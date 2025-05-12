from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Material, Flashcard
from .serializers import MaterialSerializer, FlashcardSerializer
from django.shortcuts import get_object_or_404, render
from .models import Material, ExtractedText


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