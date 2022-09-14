from rest_framework import serializers
from convert.models import Url

class ConvertSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Url
        fields = ('html', 'apikey')