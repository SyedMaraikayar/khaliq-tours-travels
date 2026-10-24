// Loads GA4 and Google Ads only when real IDs are set in config.js.
(function () {
  if (typeof CONFIG === "undefined") return;

  var ids = [];
  if (CONFIG.GA4_MEASUREMENT_ID && CONFIG.GA4_MEASUREMENT_ID.indexOf("XXXX") === -1) {
    ids.push(CONFIG.GA4_MEASUREMENT_ID);
  }
  if (CONFIG.GOOGLE_ADS_ID && CONFIG.GOOGLE_ADS_ID.indexOf("XXXX") === -1) {
    ids.push(CONFIG.GOOGLE_ADS_ID);
  }
  if (!ids.length || window.__khaliqTagsLoaded) return;
  window.__khaliqTagsLoaded = true;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ids[0]);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  ids.forEach(function (id) { window.gtag("config", id); });
})();
