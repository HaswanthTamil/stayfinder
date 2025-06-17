import json

# Load original raw JSON
with open("backend/raw_hotels.json") as f:
    raw_hotels = json.load(f)

# Convert to fixture format
fixture = []
for i, hotel in enumerate(raw_hotels, start=1):
    fixture.append({
        "model": "core.hotel", 
        "pk": i,
        "fields": hotel
    })

# Write out the converted fixture
with open("backend/seed_hotels.json", "w") as f:
    json.dump(fixture, f, indent=2)
