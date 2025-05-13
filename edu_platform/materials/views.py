from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Material, Flashcard, Summary
from .serializers import MaterialSerializer, FlashcardSerializer
from django.shortcuts import get_object_or_404, render
from .models import Material, ExtractedText
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from .tasks import summarize_text_task
from celery.result import AsyncResult
from django.conf import settings
from celery import Celery

from django.http import HttpResponse, Http404

from docx import Document

from .utils import generate_pdf


class MaterialUploadView(generics.CreateAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)
        # Trigger Celery task here if PDF is uploaded
        from .tasks import generate_tests_from_pdf
        if serializer.validated_data.get("material_type") == "pdf":
            generate_tests_from_pdf.delay(serializer.instance.id)


class MaterialListView(generics.ListAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
    permission_classes = [permissions.IsAuthenticated]


class FlashcardListView(generics.ListAPIView):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer
    permission_classes = [permissions.IsAuthenticated]


class FlashcardsByExtractedTextView(generics.ListAPIView):
    serializer_class = FlashcardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        extracted_text_id = self.kwargs.get('extracted_text_id')
        return Flashcard.objects.filter(extracted_text_id=extracted_text_id)
    


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def trigger_summary_task(request):
    extracted_id = request.data.get("extracted_text_id")
    if not extracted_id:
        return JsonResponse({"error": "No ExtractedText ID provided"}, status=400)

    task = summarize_text_task.delay(extracted_id)
    return JsonResponse({"task_id": task.id})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_summary(request, extracted_text_id):
    try:
        summary = Summary.objects.get(extracted_text_id=extracted_text_id)
        return JsonResponse({
            "summary": summary.summarized_text,
            "created_at": summary.created_at
        })
    except Summary.DoesNotExist:
        return JsonResponse({"error": "Summary not found"}, status=404)
    

def download_summary(request, summary_id):
    format = request.GET.get("format", "pdf")
    
    try:
        summary = Summary.objects.get(pk=summary_id)
    except Summary.DoesNotExist:
        raise Http404("Summary not found")

    if format == "pdf":
        buffer = generate_pdf(summary)
        response = HttpResponse(buffer, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="summary_{summary_id}.pdf"'
        return response

    return HttpResponse("Unsupported format", status=400)