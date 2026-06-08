/* ============================================================
   SView360 — Marketing Site Interactions v2.0
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Navbar scroll state ---------- */
  var navbar = document.getElementById("navbar");
  var backToTop = document.getElementById("backToTop");

  function onScroll() {
    var y = window.scrollY;
    if (y > 60) { navbar.classList.add("scrolled"); }
    else { navbar.classList.remove("scrolled"); }

    if (backToTop) {
      if (y > 300) { backToTop.classList.add("show"); }
      else { backToTop.classList.remove("show"); }
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile hamburger menu ---------- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  function closeMenu() {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close on link click
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close on outside click
  document.addEventListener("click", function (e) {
    if (navLinks.classList.contains("open") &&
        !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  /* ---------- 3. Smooth scroll (JS fallback for older browsers) ---------- */
  if (!("scrollBehavior" in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      });
    });
  }

  /* ---------- 4. Back-to-top click ---------- */
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 5. Intersection Observer fade-in-up ---------- */
  var revealEls = document.querySelectorAll(".card, .feature-card, .pricing-card, .step, .value-card, .gov-card, .deploy-card, .brand-badge");
  revealEls.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var siblings = Array.prototype.slice.call(el.parentNode.children);
          var idx = siblings.indexOf(el);
          el.style.transitionDelay = (idx % 4) * 0.1 + "s";
          el.classList.add("visible");
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 6. Dashboard counter animation ---------- */
  var counters = document.querySelectorAll(".metric-num[data-count]");
  var countersDone = false;

  function animateCounters() {
    if (countersDone) return;
    countersDone = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        el.textContent = Math.floor(eased * target).toLocaleString("en-US");
        if (progress < 1) { requestAnimationFrame(step); }
        else { el.textContent = target.toLocaleString("en-US"); }
      }
      requestAnimationFrame(step);
    });
  }

  var mockup = document.querySelector(".vms-mockup");
  if (mockup && "IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCounters(); obs.disconnect(); }
      });
    }, { threshold: 0.4 });
    counterObserver.observe(mockup);
  } else {
    animateCounters();
  }
})();
