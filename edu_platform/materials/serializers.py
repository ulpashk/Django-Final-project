# materials/serializers.py

from rest_framework import serializers
from .models import Material, Flashcard

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'
        read_only_fields = ['uploaded_by']


class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = '__all__'
        # read_only_fields = ['uploaded_by']
