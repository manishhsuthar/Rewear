
import os
import django
from django.contrib.auth import get_user_model

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rewear_project.settings')

# Setup Django
django.setup()

User = get_user_model()

# Create a superuser if it doesn't exist
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
    print("Superuser 'admin' created with password 'admin'. Please change this password.")
else:
    print("Superuser 'admin' already exists.")
