from celery import shared_task
from .models import Material, ExtractedText, Flashcard
from .utils import generate_flashcards, extract_text_from_pdf


@shared_task
def generate_tests_from_pdf(material_id):
    try:
        material = Material.objects.get(id=material_id)

        if material.pdf_file:
            pdf_path = material.pdf_file.path
            extracted_text = extract_text_from_pdf(pdf_path)

            # Save or update the extracted text
            extracted_obj, _ = ExtractedText.objects.update_or_create(
                material=material,
                defaults={"text": extracted_text}
            )

            # Generate flashcards linked to ExtractedText (not Material directly)
            flashcards = generate_flashcards(extracted_text)
            for qa in flashcards:
                Flashcard.objects.create(
                    extracted_text=extracted_obj,
                    question=qa["question"],
                    answer=qa["answer"]
                )

    except Material.DoesNotExist:
        pass


##with openai not free one 
# from celery import shared_task
# from .models import Material, ExtractedText, Flashcard
# from .utils import extract_text_from_pdf, generate_flashcards_with_openai

# @shared_task
# def generate_tests_from_pdf(material_id):
#     try:
#         material = Material.objects.get(id=material_id)

#         if material.pdf_file:
#             pdf_path = material.pdf_file.path
#             extracted_text = extract_text_from_pdf(pdf_path)

#             # Save or update the extracted text
#             extracted_obj, _ = ExtractedText.objects.update_or_create(
#                 material=material,
#                 defaults={"text": extracted_text}
#             )

#             # Clear old flashcards if needed (optional):
#             Flashcard.objects.filter(extracted_text=extracted_obj).delete()

#             # Generate flashcards using OpenAI
#             flashcards = generate_flashcards_with_openai(extracted_text)

#             for qa in flashcards:
#                 question = qa.get("question")
#                 answer = qa.get("answer")
#                 if question and answer:
#                     Flashcard.objects.create(
#                         extracted_text=extracted_obj,
#                         question=question.strip(),
#                         answer=answer.strip()
#                     )

#     except Material.DoesNotExist:
#         pass




#  celery -A edu_platform worker --loglevel=info --pool=solo