from PyPDF2 import PdfReader
import spacy


#works fine
def extract_text_from_pdf(pdf_path):
    with open(pdf_path, "rb") as f:
        reader = PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
    return text



nlp = spacy.load("en_core_web_sm")

#norm but strict qs
# def generate_flashcards(text):
#     doc = nlp(text)
#     flashcards = []

#     for sent in doc.sents:
#         for np in sent.noun_chunks:
#             if len(np.text.split()) > 1:
#                 question = f"What is {np.text}?"
#                 answer = sent.text.strip()
#                 flashcards.append({"question": question, "answer": answer})
#                 break  # Just one question per sentence for now

#     return flashcards[:10]  # Return top 10 flashcards



# much more strict one by GPT:
def generate_flashcards(text):
    doc = nlp(text)
    flashcards = []

    for sent in doc.sents:
        sent_text = sent.text.strip()
        if not sent_text or len(sent_text.split()) < 5:
            continue  # Skip very short sentences

        # Try to extract subject-verb-object patterns
        subject = None
        verb = None
        obj = None

        for token in sent:
            if token.dep_ == "nsubj" and subject is None:
                subject = token.text
            if token.pos_ == "VERB" and verb is None:
                verb = token.text
            if token.dep_ in ("dobj", "attr", "pobj") and obj is None:
                obj = token.text

        if subject and verb and obj:
            question = f"What does {subject} {verb}?"
            answer = sent_text
            flashcards.append({"question": question, "answer": answer})
        else:
            # fallback question
            question = f"What is the key idea of: \"{sent_text[:50]}...\"?"
            flashcards.append({"question": question, "answer": sent_text})

        if len(flashcards) >= 10:
            break  # Limit to 10 flashcards for now

    return flashcards




##uses openai not free
# def generate_flashcards_with_openai(text):
#     try:
#         prompt = (
#             "Generate 10 flashcards in the format:\n"
#             "Q: <question>\nA: <answer>\n"
#             f"Content:\n{text[:3000]}"  # Keep within token limits
#         )

#         response = client.chat.completions.create(
#             model="gpt-3.5-turbo",
#             messages=[
#                 {"role": "system", "content": "You are a helpful assistant that generates educational flashcards."},
#                 {"role": "user", "content": prompt}
#             ],
#             temperature=0.7,
#         )

#         flashcards = []
#         if response and response.choices:
#             content = response.choices[0].message.content
#             for pair in content.split("Q: ")[1:]:
#                 if "A: " in pair:
#                     question, answer = pair.split("A: ", 1)
#                     flashcards.append({"question": question.strip(), "answer": answer.strip()})

#         return flashcards

#     except Exception as e:
#         print(f"Error generating flashcards with OpenAI: {e}")
#         return []



