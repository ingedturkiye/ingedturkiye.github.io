/**
 * INGED News & Announcements Data
 * ─────────────────────────────────────────────────────────────────
 * To add a news item, copy one of the objects below and fill in
 * your details. Items are displayed newest-first (top of the list).
 *
 * FIELDS:
 *   id       – A short unique identifier with no spaces, e.g. "cfp-2026"
 *              Used in the URL: news-detail.html?id=cfp-2026
 *   title    – Headline (required)
 *   date     – Display date, e.g. "March 2026"
 *   category – One of: "conference" | "drama" | "research" | "workshop" |
 *              "zoom" | "announcement" | "elter"
 *              Items tagged "elter" appear on the ELTER page automatically.
 *   image    – Optional single photo shown inside the article body (after the first paragraph).
 *              e.g. "data/images/elter-2019.jpg"
 *              Leave as "" or remove if no photo.
 *   images   – Optional array of photos shown as a slider inside the article body.
 *              Use this instead of "image" when you have more than one photo.
 *              e.g. images: ["data/images/elter-2019-a.jpg", "data/images/elter-2019-b.jpg"]
 *              If both "image" and "images" are set, "images" takes priority.
 *   body     – Short summary shown on the news card (1-2 sentences)
 *   fullText – The full article, as an array of paragraphs.
 *              Each item in the array is one paragraph of text.
 *   pdf      – Optional PDF attachment shown as a download button in the article.
 *                label – Button text, e.g. "Download Programme"
 *                href  – Path to the PDF file, e.g. "data/pdfs/elter-2019-programme.pdf"
 * ─────────────────────────────────────────────────────────────────
 */

const NEWS_DATA = [

  {
    id:       "abstract-submission-2026",
    title:    "Abstract Submission Now Open – 23rd INGED International ELT Conference",
    date:     "June 2026",
    category: "conference",
    image:    "data/images/cfp-abstract-open.png",
    body:     "Abstract submissions for the 23rd INGED International ELT Conference are now open! Submit your proposal for presentations, workshops, or poster sessions. Round 1 deadline: August 1, 2026.",
    fullText: [
      "We are delighted to announce that abstract submissions for the 23rd INGED International ELT Conference are now open. The conference will take place at Tokat Gaziosmanpaşa University on November 6–8, 2026.",
      "We invite English language teachers, researchers, teacher educators, and graduate students to submit proposals for presentations, workshops, and poster sessions.",
      "<strong>Round 1 Submission Deadline: August 1, 2026.</strong> Abstracts should be 200–250 words. Accepted presenters will be notified by September 1, 2026.",
      "Click the button below to submit your abstract via our online form."
    ],
    link: {
      label: "Submit Your Abstract",
      href:  "https://forms.gle/D56J2vGxc38MEBx96"
    }
  },

  {
    id:       "plenary-odowd-2026",
    title:    "Plenary Speaker Announcement: Prof. Robert O'Dowd",
    date:     "November 2026",
    category: "conference",
    image:    "data/images/robert-o-dowd.jpeg",
    body:     "We are delighted to announce Professor Robert O'Dowd (Universidad de León, Spain) as a plenary speaker at the 23rd INGED International ELT Conference. His talk is titled \"Virtual Exchange at a Crossroads: Navigating Pedagogical and Ethical Challenges in Foreign Language Education.\"",
    fullText: [
      "We are delighted to announce Professor Robert O'Dowd from the Universidad de León, Spain, as a plenary speaker at the 23rd INGED International ELT Conference (Tokat Gaziosmanpaşa University, November 6–8, 2026).",
      "<strong>Talk Title:</strong> Virtual Exchange at a Crossroads: Navigating Pedagogical and Ethical Challenges in Foreign Language Education",
      "Virtual Exchange (VE) refers to the numerous online learning initiatives and methodologies which bring learners in online collaborative projects together with partners from different cultural backgrounds as part of their study programmes and under the guidance of teachers or trained facilitators. Its potential for giving learners authentic experiences of intercultural communication has made it a common practice in foreign language classrooms. However, VE in foreign language education has evolved significantly in recent years from its early focus on bilingual North-North partnerships to encompass diverse global collaborations, including North-South exchanges and partnerships with conflict zones.",
      "While VE has gained increased recognition as a valuable tool for internationalisation, particularly following COVID-19, this expansion has generated complex pedagogical and ethical challenges that practitioners must navigate. In this presentation Prof. O'Dowd will examine six critical areas of concern: structural inequalities in project design that risk reproducing Global North hegemony; communication barriers in lingua franca contexts that advantage privileged learners; the psychological risks of engaging students with conflict zone partners; political and institutional pressures surrounding controversial partnerships; questions about VE's capacity for genuine social impact versus tokenistic engagement; and maintaining motivation among increasingly internationally-experienced student populations.",
      "Drawing on recent literature and over two decades of practice, he argues that VE's transition from niche activity to mainstream educational tool demands more sophisticated approaches that address power imbalances, provide robust linguistic scaffolding, implement trauma-informed protocols, and move beyond superficial intercultural encounters. The talk will conclude with recommendations for developing more equitable, effective, and engaging VE programmes that can navigate the tensions between educational aspirations and global realities.",
      "<strong>About the Speaker</strong>",
      "Robert O'Dowd is Full Professor for English Studies at the Universidad de León, Spain. A native of Ireland, he has taught at universities in Ireland, Germany, and Spain. He has published extensively on the application of Virtual Exchange and Blended Mobility in higher education and has been invited to deliver plenary speeches at international conferences in the US, Asia, and across Europe.",
      "As coordinator of three Erasmus+ projects, including the European Policy Experiment 'Virtual Innovation and Support Networks for Teachers' (VALIANT), he has regularly collaborated with universities and organizations on the promotion and integration of Virtual Exchange in higher education. His most recent books are <em>Internationalising Higher Education and the Role of Virtual Exchange</em> (2023, Routledge) and the co-edited volume <em>Virtual Innovation and Support Networks</em> (2024, Peter Lang).",
      "He has been recognized in Stanford University's 'Ranking of the World Scientists: World's Top 2% Scientists' from 2023 to 2025. He also works regularly as an expert evaluator for the European Commission and is a consultant in the field of Language Education Policy and Practice for the Council of Europe."
    ]
  },

  {
    id:       "elter-2026",
    title:    "12th INGED ELTER SIG Meeting at Boğaziçi University",
    date:     "19 June 2026",
    category: "elter",
    image:    "data/images/elter-2026.png",
    body:     "The 12th INGED ELTER Special Interest Group Meeting will be held on June 19, 2026 (Friday) at Boğaziçi University, Department of Foreign Language Education. This is a one-day event.",
    fullText: [
      "The 12th INGED ELTER (English Language Teacher Education Research) Special Interest Group Meeting will take place on Friday, June 19, 2026 at the Department of Foreign Language Education, Boğaziçi University.",
      "This is a one-day event. All those interested in English language teacher education research are welcome to attend."
    ]
  },

  {
    id:       "cfp-2026",
    title:    "Call for Papers: 23rd INGED International ELT Conference",
    date:     "March 2026",
    category: "conference",
    image:    "data/images/conference-2026.jpg",
    body:     "The Call for Papers for the 23rd INGED International ELT Conference will be published ahead of the abstract deadline. Abstract submission deadline (Round 1): August 1, 2026.",
    fullText: [
      "The Call for Papers for the 23rd INGED International ELT Conference will be published ahead of the abstract submission deadline. We invite English language teachers, researchers, teacher educators, and graduate students to submit proposals for presentations, workshops, and poster sessions.",
      "The conference will take place at Tokat Gaziosmanpa\u015fa University, November 6\u20138, 2026, bringing together ELT professionals from Turkey and across the world.",
      "Abstract submission deadline (Round 1): August 1, 2026. Abstracts should be 200\u2013250 words and submitted via the conference submission portal. Accepted presenters will be notified by September 1, 2026.",
      "For full details on submission guidelines, themes, and keynote speakers, please visit the conference page."
    ]
  },

  {
    id:       "elter-2019",
    title:    "8th ELTER Colloquium at Gazi University",
    date:     "22 June 2019",
    category: "elter",
    image:    "data/images/elter-2019-a.jpg",
    body:     "The 8th ELTER Colloquium was hosted by the School of Foreign Languages, Gazi University. The summary of the event will soon be online.",
    fullText: [
      "The 8th ELTER Colloquium was hosted by the School of Foreign Languages, Gazi University. The summary of the event will soon be online.",
      "The programme details were as follows:"
    ],
    pdf: {
      label: "Download Programme",
      href:  "data/pdfs/elter-2019-programme.pdf"
    }
  }

];
