import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'edu_platform.settings')

app = Celery('edu_platform')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()


from dotenv import load_dotenv
load_dotenv()