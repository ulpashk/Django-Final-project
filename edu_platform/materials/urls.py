from django.urls import path
from .views import MaterialUploadView, MaterialListView, FlashcardListView, FlashcardsByExtractedTextView, trigger_summary_task, get_summary, download_summary

urlpatterns = [
    path('upload/', MaterialUploadView.as_view(), name='material-upload'),
    path('list/', MaterialListView.as_view(), name='material-list'),
    path('flashcards/list/', FlashcardListView.as_view(), name='flashcards-list'),
    path('flashcards/<int:extracted_text_id>/', FlashcardsByExtractedTextView.as_view(), name='flashcards-by-extracted-text'),
    path('summarize/', trigger_summary_task, name='summary-text'),
    path('summarizedtext/<int:extracted_text_id>', get_summary, name='summary-text-list'),
    path('summary/<int:summary_id>/download/', download_summary),
]
