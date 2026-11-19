(function () {
  var s = window.SITE || {};
  document.querySelectorAll("[data-field]").forEach(function (el) {
    var v = s[el.getAttribute("data-field")];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = s.supportEmail;
    el.href = "mailto:" + s.supportEmail;
  });
  var store = document.getElementById("store-link");
  if (store) {
    if (s.assetStoreUrl) store.href = s.assetStoreUrl;
    else store.style.display = "none";
  }
  var list = document.getElementById("products-list");
  if (list && s.products) {
    s.products.forEach(function (p) {
      var card = document.createElement(p.url ? "a" : "div");
      card.className = "card";
      if (p.url) { card.href = p.url; card.target = "_blank"; card.rel = "noopener"; }
      var h = document.createElement("h3"); h.textContent = p.name;
      var d = document.createElement("p"); d.textContent = p.description;
      card.appendChild(h); card.appendChild(d);
      list.appendChild(card);
    });
  }
  if (s.studioName) document.title = document.title.replace("Studio", s.studioName);
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
