document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".nav-menu");

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.textContent = open ? "✕" : "☰";
    document.body.classList.toggle("menu-open", open);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 1080) setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  function track(name, label) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, {
      event_category: "engagement",
      event_label: label || "general",
      service_name: label || "general",
      page_location: window.location.href
    });
  }

  document.querySelectorAll("[data-whatsapp-message]").forEach(function (link) {
    var number = (window.CONFIG && CONFIG.WHATSAPP_NUMBER) || "";
    if (!number || number.indexOf("X") !== -1) {
      link.hidden = true;
      return;
    }
    var message = link.getAttribute("data-whatsapp-message") || "";
    link.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    link.addEventListener("click", function () {
      track("click_whatsapp", link.getAttribute("data-service") || "general");
    });
  });

  var phone = window.CONFIG && CONFIG.BUSINESS_PHONE_E164;
  document.querySelectorAll("[data-call]").forEach(function (link) {
    if (!phone || phone.indexOf("X") !== -1) {
      link.hidden = true;
      return;
    }
    link.href = "tel:" + phone;
    link.addEventListener("click", function () {
      track("click_to_call", "phone");
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.addEventListener("click", function () {
      track("click_email", "email");
    });
  });
});
