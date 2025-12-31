#!/bin/bash
# This script sets up the backend server for the Rewear project.

# Install dependencies
echo "Installing dependencies..."
./venv/bin/pip install -r requirements.txt

# Run database migrations
echo "Running database migrations..."
./venv/bin/python manage.py migrate

echo "Setup complete. You can now run the server with:"
echo "./venv/bin/python manage.py runserver"