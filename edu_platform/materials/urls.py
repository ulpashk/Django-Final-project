from django.urls import path
from .views import MaterialUploadView, MaterialListView, FlashcardListView, FlashcardsByExtractedTextView

urlpatterns = [
    path('upload/', MaterialUploadView.as_view(), name='material-upload'),
    path('list/', MaterialListView.as_view(), name='material-list'),
    path('flashcards/list/', FlashcardListView.as_view(), name='flashcards-list'),
    path('flashcards/<int:extracted_text_id>/', FlashcardsByExtractedTextView.as_view(), name='flashcards-by-extracted-text'),
]
