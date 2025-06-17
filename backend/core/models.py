from django.db import models

class Hotel(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    image_urls = models.URLField(blank=True, null=True)  # 🔁 Changed from ArrayField to single URLField
    host = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)

    price_per_night = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    num_beds = models.IntegerField(blank=True, null=True)

    is_booked = models.BooleanField(default=False)
    dates = models.TextField(blank=True, null=True)  # 🔁 Changed from ArrayField to plain string
    tags = models.TextField(default="", blank=True, null=True)
    is_liked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}, {self.location}"

    def book(self, booking_date=None):
        self.is_booked = True
        if booking_date:
            if not self.dates:
                self.dates = str(booking_date)
            else:
                self.dates += f", {booking_date}"
        self.save()

    def unbook(self, unbook_date=None):
        if unbook_date and self.dates:
            date_list = self.dates.split(", ")
            date_list = [d for d in date_list if d != str(unbook_date)]
            self.dates = ", ".join(date_list)
        self.is_booked = False
        self.save()
