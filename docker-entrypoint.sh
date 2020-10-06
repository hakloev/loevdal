#!/bin/sh

# Give PostgreSQL a few extra seconds to get ready
sleep 6

# Migrate database
python manage.py migrate --no-input

# Start the application socket
daphne -b 0.0.0.0 -p 8080 loevdal.asgi:application

