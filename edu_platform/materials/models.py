from django.db import models
from django.conf import settings

class Material(models.Model):
    MATERIAL_TYPE_CHOICES = [
        ('pdf', 'PDF'),
        ('text', 'Plain Text'),
        ('video', 'Video'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    uploaded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    material_type = models.CharField(max_length=10, choices=MATERIAL_TYPE_CHOICES)
    pdf_file = models.FileField(upload_to='materials/pdfs/', blank=True, null=True)
    text_content = models.TextField(blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # extracted_text = models.TextField(blank=True, null=True) 

    def __str__(self):
        return self.title


class ExtractedText(models.Model):
    material = models.OneToOneField("Material", on_delete=models.CASCADE, related_name="extracted")
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class Flashcard(models.Model):
    extracted_text = models.ForeignKey(ExtractedText, on_delete=models.CASCADE, related_name="flashcards")
    question = models.TextField()
    answer = models.TextField()


class Summary(models.Model):
    extracted_text = models.ForeignKey(ExtractedText, on_delete=models.CASCADE, related_name="summarized")
    summarized_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)