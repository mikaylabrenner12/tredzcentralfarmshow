/* =====================================================================
   BOOTH LEAD FORM — EDITABLE CONFIGURATION
   =====================================================================
   This is the ONLY file you should need to touch to update the form.
   - Add/remove product options
   - Add/remove salespeople (and their photos)
   - Add a new trade show event + its own thank-you message
   - Point the form at your Google Sheet backend (apiUrl)

   After editing, save this file and re-upload it to wherever you're
   hosting the form (it must sit next to index.html and admin.html).
   ===================================================================== */

const CONFIG = {

  // Shown in the header of the form
  companyName: "Tredz Central LLC",

  // PASTE the Google Apps Script "Web app" URL here after you deploy it.
  // See SETUP_INSTRUCTIONS.md for step-by-step directions.
  apiUrl: "https://script.google.com/macros/s/AKfycbzHqD4hy2WXOyXEmr27yHNkySH63lkG0zw8TnQccg2USUFsyizfUf1e_ZsLWuVjdhFk/exec",

  // ---------------------------------------------------------------
  // EVENTS — one entry per trade/farm show.
  // Set "active": true on the ONE event you're currently running.
  // The form will show that event's thankYouMessage after submit,
  // and every response gets tagged with that event's name.
  // ---------------------------------------------------------------
  events: [
    {
      id: "husker-harvest-2026",
      name: "Husker Harvest Days 2026",
      active: true,
      thankYouMessage:
        "Thanks for stopping by our booth! One of our team members will be in touch soon to help you find the right tires, wheels, or equipment. Have a great rest of the show!"
    },
    {
      id: "another-show-2026",
      name: "Another Farm Show 2026",
      active: false,
      thankYouMessage:
        "Thanks for visiting us today! We'll reach out shortly with everything you need."
    }
  ],

  // ---------------------------------------------------------------
  // PRODUCT CATEGORIES — each key is a top-level category, each
  // array item is a checkbox option under it.
  // ---------------------------------------------------------------
  productCategories: {
    "Tires/Wheels": [
      "Agriculture", "Tracks", "Construction", "Car/SUV", "Truck",
      "ATV/UTV", "Lawn & Garden", "Semi", "Trailer", "Wheels",
      "Rental", "Other"
    ],
    "Trailers": [
      "Dump", "Enclosed Cargo", "Car Hauler", "Hay Bale", "Fuel",
      "Truck Bed", "Livestock", "Utility", "Deckover",
      "Equipment/Tilt", "Other"
    ],
    "Machines": [
      "Tire Balancer", "Tire Machine", "Other"
    ],
    "Tools/Supplies": [
      "Mounting Grease", "Tire Lube", "Tire Sealant",
      "Weight Assortment Kit", "Other"
    ],
    "Services": [
      "Free Route Delivery", "Semi-Truck Tire Mounting",
      "Mobile Tire Install", "Farm Tire Service",
      "Trailer Rental", "Other"
    ]
  },

  // ---------------------------------------------------------------
  // SALESPEOPLE — add a photo file in the /photos folder and
  // reference it here. If a photo is missing, the form will just
  // show the person's initials instead, so it's safe to leave blank.
  // ---------------------------------------------------------------
  salespeople: [
    { name: "Ron",      photo: "photos/ron.jpg" },
    { name: "Blake",    photo: "photos/blake.jpg" },
    { name: "Patrick",  photo: "photos/patrick.jpg" },
    { name: "Jamison",  photo: "photos/jamison.jpg" },
    { name: "Richard",  photo: "photos/richard.jpg" },
    { name: "Alexis",   photo: "photos/alexis.jpg" },
    { name: "Other",    photo: "" }
  ]
};
