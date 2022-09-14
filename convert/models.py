from django.db import models

# Create your models here.

class Url(models.Model):
    code = models.CharField(max_length=100000000)
    
    def __str__(self):
        return self.code