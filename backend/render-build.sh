#!/usr/bin/env bash

# 📦 Install dependencies
pip install -r requirements.txt

# 🛠️ Run migrations
python manage.py migrate

# 🧪 Load initial data
python manage.py loaddata seed_hotels.json

# 🌐 Collect static files (optional, but Render likes it)
python manage.py collectstatic --noinput
