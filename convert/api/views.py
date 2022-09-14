import http
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from xhtml2pdf import pisa  

from convert.api.permissions import HasAPIKey
from convert.api.serializers import ConvertSerializer

# Create your views here.

class RenderPDFAV(APIView):
    permission_classes = [IsAuthenticated, HasAPIKey]
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        html = request.data.get('html')
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'filename="converted_pdf.pdf"'
        pdf_status = pisa.CreatePDF(html, dest=response)
        
        if pdf_status.err:
            return HttpResponse('We had some errors <pre>' + html + '</pre>')
        return response
        