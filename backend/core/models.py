from django.db import models
from django.contrib.postgres.fields import ArrayField

class Hotel(models.Model):

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    image_urls = ArrayField(models.URLField(), default=list, blank=True, null=True)
    host = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)

    price_per_night = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    num_beds = models.IntegerField(blank=True, null=True)

    is_booked = models.BooleanField(default=False)
    dates = ArrayField(models.CharField(max_length=200), default=list, blank=True, null=True)
    tags = models.TextField(default="", blank=True, null=True)
    is_liked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}, {self.location}"

    def book(self, booking_date=None):
        self.is_booked = True
        if booking_date:
            if self.dates is None:
                self.dates = []
            self.dates.append(str(booking_date))
        self.save()

    def unbook(self, unbook_date=None):
        self.is_booked = False
        if unbook_date and self.dates:
            self.dates = [date for date in self.dates if date != str(unbook_date)]
        self.save()
