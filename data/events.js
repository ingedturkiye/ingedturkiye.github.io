/**
 * INGED Events Data
 * ─────────────────────────────────────────────────────────────────
 * To add a new event, copy one of the objects below and fill in
 * your details. All fields are shown in the first entry as a guide.
 *
 * FIELDS:
 *   title       – Event title (required)
 *   date        – Full date string, e.g. "November 6–8, 2026"
 *   dateShort   – Short label shown in the top-right corner, e.g. "Nov 2026"
 *   location    – City or venue name
 *   category    – One of: "conference" | "drama" | "research" | "workshop" | "zoom"
 *   group       – Optional: tag the event as belonging to a specific programme page.
 *                 e.g. "elter" — makes the event appear on the ELTER page automatically.
 *   description – Short paragraph shown on the card
 *   image       – Optional: relative path to a photo, e.g. "data/images/conference-2026.jpg"
 *                 Leave as "" or remove the field entirely if no photo
 *   links       – Buttons at the bottom. Each has:
 *                   label  – Button text
 *                   href   – URL or anchor, e.g. "conference.html" or "conference.html#register"
 *                   style  – "primary" (dark fill) or "secondary" (outline)
 * ─────────────────────────────────────────────────────────────────
 */

const EVENTS_DATA = [

  {
    title:       "23rd INGED International ELT Conference",
    date:        "November 6\u20138, 2026",
    dateShort:   "Nov 2026",
    location:    "Tokat",
    category:    "conference",
    description: "Turkey\u2019s flagship biennial ELT conference. Three days of plenaries, workshops, and networking with educators from Turkey and abroad.",
    image:       "",
    links: [
      { label: "Learn More", href: "conference.html",           style: "primary" },
      { label: "Register",   href: "conference.html#register",  style: "secondary" }
    ]
  },

  {
    title:       "INGED English Drama Festival \u2014 Ankara",
    date:        "May 2026",
    dateShort:   "May 2026",
    location:    "Yonder Schools, Ankara",
    category:    "drama",
    description: "Elementary school students perform short plays in English.",
    image:       "",
    links: [
      { label: "Learn More", href: "drama.html", style: "primary" }
    ]
  },

  {
    title:       "ELTER Research Group \u2014 2026 Session",
    date:        "2026",
    dateShort:   "2026",
    location:    "Bo\u011fazi\u00e7i University, Istanbul",
    category:    "research",
    group:       "elter",
    description: "The ELTER 2025\u201326 research cycle \u2014 an invitation-based group for academically interested educators.",
    image:       "",
    links: [
      { label: "Learn More", href: "elter.html", style: "primary" }
    ]
  }

];
