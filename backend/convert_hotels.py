import os
import json

BASE_DIR = os.path.dirname(__file__)

# Load original raw JSON
with open(os.path.join(BASE_DIR, "raw_hotels.json")) as f:
    raw_hotels = json.load(f)

# Convert to fixture format
fixture = []
for i, hotel in enumerate(raw_hotels, start=1):
    # Force image_urls and dates to be lists (not strings)
    hotel["image_urls"] = hotel.get("image_urls", [])
    hotel["dates"] = hotel.get("dates", [])

    fixture.append({
        "model": "core.hotel",
        "pk": i,
        "fields": hotel
    })

# Write out the converted fixture
with open(os.path.join(BASE_DIR, "seed_hotels.json"), "w") as f:
    json.dump(fixture, f, indent=2)
