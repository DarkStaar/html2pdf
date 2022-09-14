from django.contrib.auth.models import User
from rest_framework import serializers

from user_app.models import APIUser

class RegistrationSerializer(serializers.ModelSerializer):
    password_confirmation = serializers.CharField(style={'input_type': 'password'},write_only=True)
    
    class Meta:
        model = APIUser
        fields = ['username', 'email', 'password', 'password_confirmation']
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
    def save(self):
        password = self.validated_data['password']
        password2 = self.validated_data['password_confirmation']
        
        if password != password2:
            raise serializers.ValidationError({'error': 'Password mismatch'})
        
        if APIUser.objects.filter(email = self.validated_data['email']).exists():
            raise serializers.ValidationError({'error': 'email already exists'})
        
        account = APIUser(email=self.validated_data['email'], username = self.validated_data['username'])
        account.set_password(password)
        
        account.save()
        
        return account
    
class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = APIUser
        fields = ('apikey',)