from django.urls import path 

from convert.api.views import RenderPDFAV

urlpatterns = [
    path('', RenderPDFAV.as_view(), name='convert'),
]
