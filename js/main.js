/* ================================================
   INGED Website — Shared JavaScript
   Navigation, Footer, Animations, Interactivity
   ================================================ */

/* Inject Font Awesome 6 (social icons) */
(function() {
  const fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
  fa.crossOrigin = 'anonymous';
  document.head.appendChild(fa);
})();

/* ========================
   Shared HTML Components
======================== */
const NAV_HTML = `
<nav class="nav" id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="logos/inged.jpeg" alt="INGED" style="height:38px;width:auto;object-fit:contain;display:block;">
      <div class="nav-logo-text" style="margin-left:10px;">
        <strong>INGED</strong>
        <span>İngilizce Eğitimi Derneği</span>
      </div>
    </a>

    <div class="nav-links">
      <a href="index.html"      class="nav-link" data-page="home">Home</a>
      <a href="about.html"      class="nav-link" data-page="about">About</a>
      <a href="board.html"      class="nav-link" data-page="board">Board</a>

      <div class="nav-dropdown">
        <a href="programs.html" class="nav-link" data-page="programs">Events</a>
        <div class="dropdown-menu">
          <a href="conference.html" class="dropdown-item">
            <div class="dropdown-item-label">Biennial Conference</div>
            <div class="dropdown-item-desc">International ELT Conference</div>
          </a>
          <a href="elter.html" class="dropdown-item">
            <div class="dropdown-item-label">ELTER Research Group</div>
            <div class="dropdown-item-desc">English Language Teacher Education Research</div>
          </a>
          <a href="drama.html" class="dropdown-item">
            <div class="dropdown-item-label">Drama Festivals</div>
            <div class="dropdown-item-desc">Annual School Drama Competitions</div>
          </a>
          <a href="professional-development.html" class="dropdown-item">
            <div class="dropdown-item-label">Professional Development</div>
            <div class="dropdown-item-desc">Zoom Seminar Series &amp; Newsletter</div>
          </a>
        </div>
      </div>

      <a href="events.html"     class="nav-link" data-page="events">Upcoming Events &amp; News</a>
      <a href="membership.html" class="nav-link" data-page="membership">Membership</a>
      <a href="contact.html"    class="nav-link" data-page="contact">Contact</a>
    </div>

    <div class="nav-right">
      <a href="membership.html" class="btn btn-primary btn-sm">Join INGED</a>
      <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="nav-mobile" id="mobileNav">
  <a href="index.html"      class="mobile-link" data-page="home">Home</a>
  <a href="about.html"      class="mobile-link" data-page="about">About</a>
  <a href="board.html"      class="mobile-link" data-page="board">Board</a>
  <div class="mobile-divider"></div>
  <div class="mobile-cat">Events</div>
  <a href="programs.html"                class="mobile-sub-link" data-page="programs">Events Overview</a>
  <a href="conference.html"              class="mobile-sub-link" data-page="conference">Biennial Conference</a>
  <a href="elter.html"                   class="mobile-sub-link" data-page="elter">ELTER Research Group</a>
  <a href="drama.html"                   class="mobile-sub-link" data-page="drama">Drama Festivals</a>
  <a href="professional-development.html" class="mobile-sub-link" data-page="professional-development">Professional Development</a>
  <div class="mobile-divider"></div>
  <a href="events.html"     class="mobile-link" data-page="events">Upcoming Events &amp; News</a>
  <a href="membership.html" class="mobile-link" data-page="membership">Membership</a>
  <a href="contact.html"    class="mobile-link" data-page="contact">Contact</a>
  <div class="mobile-divider"></div>
  <a href="membership.html" class="btn btn-primary" style="text-align:center;justify-content:center;margin-top:6px;">Join INGED</a>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-logo">
        <img src="logos/inged_transparent.png" alt="INGED" style="height:54px;width:auto;object-fit:contain;display:block;">
        <div class="footer-logo-text" style="margin-left:10px;">
          <strong>INGED</strong>
          <span>İngilizce Eğitimi Derneği</span>
        </div>
      </div>
      <p class="footer-desc">
        Supporting English language educators in Turkey since 1995 through research, professional development, and community. Member of IATEFL and TESOL International.
      </p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;">
        <a href="https://www.instagram.com/ingedturkiye/" target="_blank" rel="noopener" title="Instagram" style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.6);font-size:1rem;transition:color .2s,border-color .2s;" onmouseover="this.style.color='white';this.style.borderColor='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.6)';this.style.borderColor='rgba(255,255,255,.2)'"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/INGEDTURKEY/" target="_blank" rel="noopener" title="Facebook" style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.6);font-size:1rem;transition:color .2s,border-color .2s;" onmouseover="this.style.color='white';this.style.borderColor='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.6)';this.style.borderColor='rgba(255,255,255,.2)'"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.youtube.com/@INGEDTurkiye/" target="_blank" rel="noopener" title="YouTube" style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.6);font-size:1rem;transition:color .2s,border-color .2s;" onmouseover="this.style.color='white';this.style.borderColor='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.6)';this.style.borderColor='rgba(255,255,255,.2)'"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://tr.linkedin.com/company/ingedturkey" target="_blank" rel="noopener" title="LinkedIn" style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.6);font-size:1rem;transition:color .2s,border-color .2s;" onmouseover="this.style.color='white';this.style.borderColor='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.6)';this.style.borderColor='rgba(255,255,255,.2)'"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>

    <div>
      <h5>Quick Links</h5>
      <div class="footer-links">
        <a href="index.html"      class="footer-link">Home</a>
        <a href="about.html"      class="footer-link">About INGED</a>
        <a href="board.html"      class="footer-link">Executive Board</a>
        <a href="events.html"     class="footer-link">Upcoming Events &amp; News</a>
        <a href="membership.html" class="footer-link">Membership</a>
        <a href="contact.html"    class="footer-link">Contact</a>
      </div>
    </div>

    <div>
      <h5>Events</h5>
      <div class="footer-links">
        <a href="conference.html"               class="footer-link">Biennial Conference</a>
        <a href="elter.html"                    class="footer-link">ELTER Research Group</a>
        <a href="drama.html"                    class="footer-link">Drama Festivals</a>
        <a href="professional-development.html" class="footer-link">Professional Development</a>
      </div>
    </div>

    <div>
      <h5>Contact</h5>
      <div class="footer-contact-item">
        <div><strong>Email</strong>ingedturkiye@gmail.com</div>
      </div>
      <div class="footer-contact-item">
        <div><strong>Address</strong>Ankara, Turkey</div>
      </div>
      <div class="footer-contact-item">
        <div><strong>Website</strong>inged.org.tr</div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© 2026 INGED — İngilizce Eğitimi Derneği. All rights reserved.</span>
    <div class="footer-bottom-links">
      <a href="#" class="fbl">Privacy Policy</a>
      <a href="#" class="fbl">Sitemap</a>
    </div>
  </div>
</footer>
`;

/* ========================
   Init Layout
======================== */
function initLayout() {
  const navPH = document.getElementById('nav-placeholder');
  if (navPH) navPH.outerHTML = NAV_HTML;

  const footPH = document.getElementById('footer-placeholder');
  if (footPH) footPH.outerHTML = FOOTER_HTML;

  // Mark active nav item
  const currentPage = document.body.dataset.page || '';
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === currentPage) el.classList.add('active');
  });

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

}

/* ========================
   Sticky Nav
======================== */
function initScrollEffects() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:100%;pointer-events:none;';
  document.body.prepend(sentinel);
  new IntersectionObserver(([e]) => {
    nav.classList.toggle('scrolled', !e.isIntersecting);
  }).observe(sentinel);
}

/* ========================
   Scroll animations
======================== */
function initAnimations() {
  const targets = document.querySelectorAll('.fade-in, .tl-item');
  if (!targets.length) return;
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
  );
  targets.forEach(t => io.observe(t));
}

/* ========================
   Animated counters
======================== */
function animateCounter(el) {
  const target  = parseFloat(el.dataset.target);
  const suffix  = el.dataset.suffix  || '';
  const prefix  = el.dataset.prefix  || '';
  const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
  const duration = 1600;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + (eased * target).toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); }
    }),
    { threshold: 0.5 }
  );
  counters.forEach(c => io.observe(c));
}

/* ========================
   FAQ Accordion
======================== */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item   = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ========================
   Filter buttons
======================== */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.filter-bar')?.querySelectorAll('.filter-btn')
         .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter || 'all';
      document.querySelectorAll('[data-category]').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

/* ========================
   Contact form (Formspree)
======================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // ⚠️ Replace YOUR_FORM_ID with your Formspree form ID
  // Sign up at https://formspree.io, create a form for ingedturkiye@gmail.com,
  // then paste the 8-character ID here (e.g. "xpwzqdkl")
  const FORMSPREE_ID = 'xreybvep';

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn.textContent;

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(el => {
      if (!el.value.trim()) { el.style.borderColor = '#dc2626'; valid = false; }
      else el.style.borderColor = '';
    });
    if (!valid) return;

    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        btn.textContent = '✓ Message Sent';
        btn.style.background = '#059669';
        btn.style.borderColor = '#059669';
        form.reset();
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 4000);
      } else {
        throw new Error('Server error');
      }
    } catch {
      btn.textContent = 'Failed — Try Again';
      btn.style.background = '#dc2626';
      btn.style.borderColor = '#dc2626';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 3500);
    }
  });
}

/* ========================
   Bootstrap
======================== */
document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  initScrollEffects();
  initAnimations();
  initCounters();
  initFAQ();
  initFilters();
  initContactForm();
});
