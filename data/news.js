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
    id:       "conference-program-2026",
    title:    "Conference Program Now Available – 23rd INGED ELT Conference",
    date:     "October 2026",
    category: "conference",
    image:    "data/images/conference-programme-2026.svg",
    body:     "The session program for the 23rd INGED International ELT Conference is now available for download. Venue and room assignments will be announced shortly.",
    fullText: [
      "We are pleased to share the session program for the <strong>23rd INGED International ELT Conference</strong> (Tokat Gaziosmanpaşa University, November 6–8, 2026).",
      "The program provides an overview of all accepted presentations, workshops, and poster sessions scheduled across the conference days.",
      "<strong>Please note:</strong> Venue and room assignments will be added to the program in the coming days. We will share the updated version as soon as room allocations are finalised.",
      "Download the current program using the button below."
    ],
    pdf: {
      label: "Download Program",
      href:  "data/pdfs/conference-program-2026.pdf"
    }
  },

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
    id:       "plenary-ersoz-2026",
    title:    "Plenary Speaker: Prof. Dr. Aydan Ersöz",
    date:     "October 2026",
    category: "conference",
    image:    "data/images/aydan-ersoz.jpeg",
    bgPosition: "center 8%",
    body:     "We are honoured to welcome Prof. Dr. Aydan Ersöz, Emeritus Professor at Gazi University and Honorary Chair of INGED, as a plenary speaker at the 23rd INGED International ELT Conference.",
    fullText: [
      "We are honoured to welcome <strong>Prof. Dr. Aydan Ersöz</strong> as a plenary speaker at the 23rd INGED International ELT Conference (Tokat Gaziosmanpaşa University, November 6–8, 2026).",
      "<strong>Talk Title:</strong> Technology and Young Learners: Not Best Friends",
      "This presentation has two parts: in the first part, why technology is not enough for young learners will be mentioned. For children, learning is a matter of experiencing rather than storing information to memory. Children want to use the language, not to learn about it. Hence, technology can be a great servant, but it is a terrible master. In the second part, a sample lesson plan based on storytelling and dramatization will be provided.",
      "The lesson plan integrates various activity types suitable for children, as any lesson for young learners should include contexts such as games, songs, rhymes, chants, stories, riddles, puzzles, drama, dramatization, and art and craft activities, and the like. All these contain authentic language and help teachers create a natural (or a less formal) atmosphere in the classroom. They are also a part of the child's life.",
      "<strong>Biodata:</strong> Prof. Dr. Aydan Ersöz retired from Gazi University in 2006. She was the President of INGED Board for about 18 years. The new board honoured her by naming her the Honorary President. She worked at Ankara Bilim University for about 2 years between 2023 and 2025. She has taken active part in various in-service training programmes for universities, state and private schools. She has published a number of articles and books. Her interest areas are: teaching English to young learners; evaluating, adapting, and developing teaching materials; and teacher training."
    ]
  },

  {
    id:       "plenary-odowd-2026",
    title:    "Plenary Speaker (Online): Prof. Robert O'Dowd",
    date:     "October 2026",
    category: "conference",
    image:    "data/images/robert-o-dowd.jpeg",
    body:     "We are delighted to announce Professor Robert O'Dowd (Universidad de León, Spain) as an online plenary speaker at the 23rd INGED International ELT Conference. His talk is titled \"Virtual Exchange at a Crossroads: Navigating Pedagogical and Ethical Challenges in Foreign Language Education.\"",
    fullText: [
      "We are delighted to announce <strong>Professor Robert O'Dowd</strong> from the Universidad de León, Spain, as an online plenary speaker at the 23rd INGED International ELT Conference (Tokat Gaziosmanpaşa University, November 6–8, 2026).",
      "<strong>Talk Title:</strong> Virtual Exchange at a Crossroads: Navigating Pedagogical and Ethical Challenges in Foreign Language Education",
      "Virtual Exchange (VE) refers to the numerous online learning initiatives and methodologies which bring learners in online collaborative projects together with partners from different cultural backgrounds as part of their study programmes and under the guidance of teachers or trained facilitators. Its potential for giving learners authentic experiences of intercultural communication has made it a common practice in foreign language classrooms.",
      "While VE has gained increased recognition as a valuable tool for internationalisation, particularly following COVID-19, this expansion has generated complex pedagogical and ethical challenges that practitioners must navigate. In this presentation Prof. O'Dowd will examine six critical areas of concern: structural inequalities in project design that risk reproducing Global North hegemony; communication barriers in lingua franca contexts that advantage privileged learners; the psychological risks of engaging students with conflict zone partners; political and institutional pressures surrounding controversial partnerships; questions about VE's capacity for genuine social impact versus tokenistic engagement; and maintaining motivation among increasingly internationally-experienced student populations.",
      "<strong>About the Speaker</strong>",
      "Robert O'Dowd is Full Professor for English Studies at the Universidad de León, Spain. A native of Ireland, he has taught at universities in Ireland, Germany, and Spain. He has published extensively on the application of Virtual Exchange and Blended Mobility in higher education and has been invited to deliver plenary speeches at international conferences in the US, Asia, and across Europe.",
      "As coordinator of three Erasmus+ projects, including the European Policy Experiment 'Virtual Innovation and Support Networks for Teachers' (VALIANT), he has regularly collaborated with universities and organizations on the promotion and integration of Virtual Exchange in higher education. His most recent books are <em>Internationalising Higher Education and the Role of Virtual Exchange</em> (2023, Routledge) and the co-edited volume <em>Virtual Innovation and Support Networks</em> (2024, Peter Lang).",
      "He has been recognized in Stanford University's 'Ranking of the World Scientists: World's Top 2% Scientists' from 2023 to 2025.",
      "<em>Prof. O'Dowd will deliver his plenary session online.</em>"
    ]
  },

  {
    id:       "plenary-warren-2026",
    title:    "Plenary Speaker: Dr. Amber N. Warren",
    date:     "October 2026",
    category: "conference",
    image:    "data/images/amber-warren.jpeg",
    body:     "We are pleased to announce Dr. Amber N. Warren (Vanderbilt University, USA) as a plenary speaker at the 23rd INGED International ELT Conference, November 6–8, 2026 in Tokat.",
    fullText: [
      "We are delighted to announce <strong>Dr. Amber N. Warren</strong> from Vanderbilt University's Peabody College of Education and Human Development, USA, as a plenary speaker at the 23rd INGED International ELT Conference.",
      "<strong>About the Speaker</strong>",
      "Amber N. Warren, PhD, is Associate Professor of the Practice in Multilingual Learner Education at Vanderbilt University's Peabody College of Education and Human Development. She holds a PhD from Indiana University (2016) and prior to joining Vanderbilt served as Assistant Professor of Educational Studies (Language Education) at the University of Nevada, Reno.",
      "Dr. Warren's research centres on language teacher identity, equity, and the intersections of policy and pedagogy in TESOL and multilingual education contexts. Using qualitative methodologies, she examines how teachers — especially those working with multilingual learners — make sense of their professional identities under the pressures of education policy, institutional expectations, and social positionality.",
      "Her work has appeared in leading journals including the <em>TESOL Journal</em>, <em>Teaching and Teacher Education</em>, and the <em>Journal of Education Policy</em>. She is a recognised leader in the TESOL professional community and a co-editor of multiple volumes in language teacher education."
    ]
  },

  {
    id:       "plenary-colpaert-2026",
    title:    "Plenary Speaker (Online): Prof. Jozef Colpaert",
    date:     "October 2026",
    category: "conference",
    image:    "data/images/jozef-colpaert.jpeg",
    body:     "We are pleased to announce Prof. Jozef Colpaert (University of Antwerp / Ontario Tech University) as an online plenary speaker at the 23rd INGED International ELT Conference, November 6–8, 2026 in Tokat.",
    fullText: [
      "We are delighted to announce <strong>Prof. Jozef Colpaert</strong> from the University of Antwerp, Belgium, as an online plenary speaker at the 23rd INGED International ELT Conference.",
      "<strong>Talk Title: The added value of AI and teacher roles</strong>",
      "What does AI actually add to language education, for whom, and under which conditions? This plenary argues that its educational value emerges from how well its capabilities address the needs of a particular learning environment. Drawing on Educational Engineering, it proposes a design approach in which teachers identify goals, analyse contextual constraints, and test and refine possible improvements. Learners' personal goals, psychological needs, and relationships are central to this process.",
      "This perspective invites a reconsideration of teacher roles. As AI expands opportunities for feedback, interaction, and materials development, teachers need professional agency, complementary expertise, and opportunities for collaboration. Their role includes judging when AI supports learning and when it bypasses the intellectual and interpersonal engagement that learning requires.",
      "The plenary explores how thoughtful design can connect technological possibilities with humane and sustainable teaching. It considers how AI might create more space for dialogue, care, intercultural understanding, and teacher wellbeing. Its guiding question is how AI can support learning environments in which both teachers and learners can flourish.",
      "<strong>About the Speaker</strong>",
      "Jozef Colpaert is Emeritus Professor of Instructional Design, Educational Technology, and Computer Assisted Language Learning (CALL) at the University of Antwerp, Belgium. He also holds an adjunct professorship at Ontario Tech University (2024–2027). He co-founded LatinCALL, served as President of EuroCALL, and organised the International CALL Research Conferences (2002–2022).",
      "Professor Colpaert served for two decades as Editor-in-Chief of the journal <em>Computer Assisted Language Learning</em> (Taylor &amp; Francis; Impact Factor: 7.0) and currently serves as editor of the new journal <em>Language and Motivation</em> (launched 2024). His 2025 chapter appears in the <em>Cambridge Handbook of Technology in Language Teaching and Learning</em>.",
      "<em>Prof. Colpaert will deliver his plenary session online.</em>"
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
    id:       "elter-2017",
    title:    "7th ELTER Colloquium at Bilkent University",
    date:     "10–11 June 2017",
    category: "elter",
    image:    "data/images/elter-2017.jpg",
    body:     "The 7th ELTER Colloquium was held at Bilkent University, Ankara, on 10–11 June 2017.",
    fullText: [
      "The 7th ELTER Colloquium took place at Bilkent University, Ankara, on 10–11 June 2017.",
      "A summary of the event is available for download."
    ],
    pdf: {
      label: "Download Event Summary",
      href:  "https://www.elterturkey.com/_files/ugd/2dbfa7_0e66dc4e48bf49d98c54efef5ce20b29.pdf"
    }
  },

  {
    id:       "elter-2016",
    title:    "6th ELTER Colloquium at Bolu Abant İzzet Baysal University",
    date:     "10–11 June 2016",
    category: "elter",
    image:    "data/images/elter-2016.jpg",
    body:     "The 6th ELTER Colloquium was hosted by Bolu Abant İzzet Baysal University, Bolu, on 10–11 June 2016.",
    fullText: [
      "The 6th ELTER Colloquium was hosted by Bolu Abant İzzet Baysal University, Bolu, on 10–11 June 2016.",
      "A summary of the event is available for download."
    ],
    pdf: {
      label: "Download Event Summary",
      href:  "https://www.elterturkey.com/_files/ugd/2dbfa7_56ebc7f271334cf6bcaea16d4abd1994.pdf"
    }
  },

  {
    id:       "elter-2015",
    title:    "5th ELTER Colloquium at International Training Institute, Istanbul",
    date:     "5–6 June 2015",
    category: "elter",
    image:    "data/images/elter-2015.jpg",
    body:     "The 5th ELTER Colloquium was hosted by International Training Institute in Istanbul, on 5–6 June 2015.",
    fullText: [
      "The 5th ELTER Colloquium was hosted by International Training Institute in İstanbul on 5–6 June 2015.",
      "The programme and event summary are available for download."
    ],
    pdf: {
      label: "Download Programme & Summary",
      href:  "https://www.elterturkey.com/_files/ugd/2dbfa7_08c4e354543148a2b7e686781f6aef26.pdf"
    }
  },

  {
    id:       "elter-2014",
    title:    "4th ELTER Colloquium at METU Northern Cyprus Campus",
    date:     "7–8 June 2014",
    category: "elter",
    image:    "data/images/elter-2014.jpg",
    body:     "The 4th ELTER Colloquium was held at Middle East Technical University Northern Cyprus Campus, Cyprus, on 7–8 June 2014.",
    fullText: [
      "The 4th ELTER Colloquium took place at Middle East Technical University Northern Cyprus Campus, Cyprus, on 7–8 June 2014."
    ]
  },

  {
    id:       "elter-2013",
    title:    "3rd ELTER Colloquium at Izmir University of Economics",
    date:     "21 June 2013",
    category: "elter",
    body:     "The 3rd ELTER Colloquium was held at Izmir University of Economics, İzmir, on 21 June 2013.",
    fullText: [
      "The 3rd ELTER Colloquium took place at Izmir University of Economics, İzmir, on 21 June 2013.",
      "The event featured a plenary talk by Prof Simon Borg and presentations on research in language teacher education.",
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_a0efd888a2a049f499c3e4161b7e1d7b.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Programme Details →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_519a4c8a6f2c48e0ae78f9a638f0b056.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">PowerPoint Slides 2013 →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_40ca22481f69410eb09df613dbf2cb82.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">PowerPoint Slides 2012 &amp; 2013 →</a>'
    ]
  },

  {
    id:       "elter-2012",
    title:    "2nd ELTER Colloquium at Boğaziçi University, Istanbul",
    date:     "22 June 2012",
    category: "elter",
    body:     "The 2nd ELTER Colloquium was held at Boğaziçi University, Istanbul, on 22 June 2012.",
    fullText: [
      "The 2nd ELTER Colloquium took place at Boğaziçi University, Istanbul, on 22 June 2012.",
      "Sessions covered quality in teacher education, research in teacher education, and communication among teacher educators, with a plenary talk by Prof Simon Borg.",
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_0816ede1463246d4839e1a31ec0719a9.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Programme Details →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_8234cee13d154bb196e3716077ca8f2a.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Quality in Teacher Education →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_822ce1cc47e6463ab5f70761e9582ad9.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Research in Teacher Education →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_1d493c40bc414f1fb4011b291127968a.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Communication among Teacher Educators →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_f046aca88a2f4007b5dd7e15f26936ba.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Plenary Talk by Prof Simon Borg →</a>'
    ]
  },

  {
    id:       "elter-2011",
    title:    "1st ELTER Colloquium at Bilkent University, Ankara",
    date:     "24 June 2011",
    category: "elter",
    body:     "The inaugural ELTER Colloquium was held at Bilkent University, Ankara, on 24 June 2011.",
    fullText: [
      "The 1st ELTER Colloquium took place at Bilkent University, Ankara, on 24 June 2011 — marking the founding of the ELTER Special Interest Group.",
      "The event featured a plenary talk by Prof Tom Farrell.",
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_87545bb09a2148278ad9953c24265e98.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Programme Details →</a>',
      '<a href="https://www.elterturkey.com/_files/ugd/2dbfa7_e73d4d6c3aa94df287b59d4f9d9e1595.pdf" target="_blank" rel="noopener" style="color:var(--navy-mid);font-weight:600;">Plenary Talk by Prof Tom Farrell →</a>'
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
      href:  "https://www.elterturkey.com/_files/ugd/2dbfa7_4e37ed107c694123bcf9b174cef59149.pdf"
    }
  }

];
