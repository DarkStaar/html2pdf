from dataclasses import dataclass
from logging import log
import secrets
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from user_app.models import APIUser
from user_app.api.serializers import RegistrationSerializer, UserSerializer
# Create your views here.

@api_view(['POST', ])
@permission_classes([IsAuthenticated])
def logout_view(request):
    if request.method == 'POST':
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
    
@api_view(['POST',])
@authentication_classes([])
@permission_classes([])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data = request.data)
        
        data = {}
        
        if serializer.is_valid():
            account = serializer.save()

            data['username'] = account.username
            data['email'] = account.email
            
            token = Token.objects.get(user=account).key
            data['token'] = token
            
            data['response'] = "Registration Successful"
        
        else:
            data = serializer.errors
            
        return Response(data, status.HTTP_201_CREATED)
    
@api_view(['GET',])
@permission_classes([IsAuthenticated])
def generate_key(request):
    
    if request.method == 'GET':
        try:
            user = APIUser.objects.get(username=request.user.username)
        except APIUser.DoesNotExist:
            return Response({'Error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        
        user.apikey = secrets.token_hex(16)
        serializer = UserSerializer(user, data=request.data)
        data = {}
        
        if serializer.is_valid():
            serializer.save(update_fields=['apikey'])

            data = {
                'username': request.user.username,
                'api_key': request.user.apikey
            }
        else:
            data = serializer.errors

        return Response(serializer.data, status.HTTP_200_OK)