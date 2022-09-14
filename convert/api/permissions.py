from rest_framework import permissions
from user_app.models import APIUser

class HasAPIKey(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return bool(request.META['HTTP_APIKEY'] == request.user.apikey)
        
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return bool(request.META['HTTP_APIKEY'] == request.user.apikey)
        