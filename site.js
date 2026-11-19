(function () {
  var s = window.SITE || {};

  // Asset Store buttons
  document.querySelectorAll("[data-store]").forEach(function (el) {
    if (s.assetStoreUrl) el.href = s.assetStoreUrl;
    else el.style.display = "none";
  });

  // Asset cards
  var list = document.getElementById("products-list");
  if (list && s.products) {
    s.products.forEach(function (p) {
      var card = document.createElement(p.url ? "a" : "div");
      card.className = "card product";
      if (p.url) { card.href = p.url; card.target = "_blank"; card.rel = "noopener"; }
      if (p.tag) {
        var t = document.createElement("span"); t.className = "tag"; t.textContent = p.tag;
        card.appendChild(t);
      }
      var h = document.createElement("h3"); h.textContent = p.name;
      var d = document.createElement("p"); d.textContent = p.description;
      card.appendChild(h); card.appendChild(d);
      if (p.url) {
        var more = document.createElement("span"); more.className = "more"; more.textContent = "View on Asset Store →";
        card.appendChild(more);
      }
      list.appendChild(card);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
