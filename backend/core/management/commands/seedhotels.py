# core/management/commands/seedhotels.py
import json
from django.core.management.base import BaseCommand
from core.models import Hotel

class Command(BaseCommand):
    help = 'Seed hotel data from JSON'

    def handle(self, *args, **kwargs):
        Hotel.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Existing hotels deleted.'))
        with open('seed_hotels.json') as f:
            data = json.load(f)
            for item in data:
                Hotel.objects.create(**item)
        self.stdout.write(self.style.SUCCESS('Hotels seeded!'))

