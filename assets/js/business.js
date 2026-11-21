/* =============================================================================
   Fitness Hub Hansi · Hansi — business data (single source of truth)
   -----------------------------------------------------------------------------
   Everything the website says about the gym lives here or in the page HTML.
   Edit this file (and the clearly marked "EDIT" comments in the HTML) to update
   the site. Nothing in this file is invented: each value came either from the
   gym's existing website project or from the gym's public Google Maps listing.
   See README.md → "What the owner must fill in".

   The only values that are intentionally EMPTY are `phone` and `whatsapp`:
   they must be confirmed by the gym before the number goes live. While they are
   empty the site hides every call/WhatsApp button instead of showing a dead
   link, and trial requests are handed to the member to share (never shown as a
   confirmed booking).
   ========================================================================== */
window.LF = {
  /* ---------------------------------------------------------------- identity */
  name: "Fitness Hub Hansi",
  nameHi: "फिटनेस हब हांसी",
  city: "Hansi",
  region: "Haryana",
  establishedNote: "Sector 6, Hansi",

  /* ----------------------------------------------------------------- address */
  address: {
    line1: "Jind Rd, Sector 6",
    line2: "Sector 6, Hansi, Haryana 125033",
    locality: "Sector 6",
    region: "Haryana",
    postalCode: "125033",
    country: "IN",
    full: "Jind Rd, Sector 6, Sector 6, Hansi, Haryana 125033",
  },
  geo: { lat: 29.10292468, lng: 75.97592265 },
  plusCode: "4PPC+9G Hansi, Haryana",

  /* -------------------------------------------------- contact (OWNER: fill) */
  // Filled from the gym's live Google Maps listing (verified 19 Nov 2026):
  // +91 99928 88818 — the number was left empty in the export on purpose
  // ("confirm before going live"); the listing confirms it, so buttons show.
  phone: "+919992888818",
  phoneDisplay: "+91 99928 88818",
  whatsapp: "919992888818",
  email: "",

  /* ------------------------------------------------------------------- links */
  links: {
    // Google Maps listing (search by name + address).
    maps:
      "https://www.google.com/maps/search/?api=1&query=Fitness%20Hub%20Hansi%2C%20Jind%20Rd%2C%20Sector%206%2C%20Hansi%2C%20Haryana%20125033",
    // Turn-by-turn directions to the pin.
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=29.10292468,75.97592265",
    // Reviews are read on Google; the site never hosts reviews itself.
    reviews:
      "https://www.google.com/maps/search/?api=1&query=Fitness%20Hub%20Hansi%2C%20Jind%20Rd%2C%20Sector%206%2C%20Hansi%2C%20Haryana%20125033",
  },

  /* ------------------------------------------------------------------ hours */
  // Times in 24h for logic + display strings for humans. Sunday closed.
  hours: [
    { day: "Monday", open: "06:00", close: "21:00", display: "6:00 AM – 9:00 PM" },
    { day: "Tuesday", open: "06:00", close: "21:00", display: "6:00 AM – 9:00 PM" },
    { day: "Wednesday", open: "06:00", close: "21:00", display: "6:00 AM – 9:00 PM" },
    { day: "Thursday", open: "06:00", close: "21:00", display: "6:00 AM – 9:00 PM" },
    { day: "Friday", open: "06:00", close: "21:00", display: "6:00 AM – 9:00 PM" },
    { day: "Saturday", open: "06:00", close: "21:00", display: "6:00 AM – 9:00 PM" },
    { day: "Sunday", closed: true, display: "Closed" },
  ],

  /* ----------------------------------------------------------------- rating */
  // Public Google rating as displayed on the gym's listing (checked Nov 2026).
  // Never hard-code testimonials: the quotes are in the page HTML, attributed
  // to their source, and can be swapped for owner-approved ones.
  rating: { value: 5.0, count: 277, source: "Google", asOf: "Nov 2026" },

  /* ------------------------------------------------------- trial booking */
  trial: {
    daysAhead: 45, // how far ahead a date can be requested
    slots: [
      "Morning · 6:00 – 10:00 AM",
      "Midday · 10:00 AM – 4:00 PM",
      "Evening · 4:00 – 9:00 PM",
    ],
    goals: [
      "Weight loss",
      "Muscle building",
      "Strength training",
      "Personal training",
      "General fitness",
      "Not sure yet",
    ],
  },

  /* --------------------------------------------------------------- trainers */
  // Coach profiles are published ONLY with the gym's approval, so this list is
  // empty by default and the coaching page shows an honest empty-state panel.
  // No name, photograph, experience or certification is ever invented.
  // To publish a coach, add an entry like:
  //   {
  //     initials: "RS",
  //     name: "Coach name",
  //     role: "Strength & conditioning",
  //     experience: "8 years",
  //     qualifications: "Certified personal trainer, first aid",
  //     bio: "One or two sentences in the coach's own words. Only facts the
  //           gym can stand behind.",
  //     photo: "assets/img/coach-name.jpg"   // omit to show the monogram
  //   }
  trainers: [],

  /* ---------------------------------------------------------------- form */
  form: {
    // Optional: paste a form endpoint (Formspree, Google Apps Script, …) to
    // POST requests. Empty = no server, so the site hands the request to the
    // member (WhatsApp or copy) and never claims a booking is confirmed.
    endpoint: "",
  },

  /* --------------------------------------------------------------- misc */
  year: new Date().getFullYear(),
};
