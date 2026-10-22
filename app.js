const portfolioUrl = "https://onndrys.github.io/github/";

for (const link of document.querySelectorAll("[data-html-validator]")) {
  link.href = `https://validator.w3.org/nu/?doc=${encodeURIComponent(window.location.href)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

for (const link of document.querySelectorAll("[data-css-validator]")) {
  const stylesheetUrl = new URL("styles.css", window.location.href).href;
  link.href = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(stylesheetUrl)}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=cs`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

for (const link of document.querySelectorAll("[data-citations-link]")) {
  const hostname = window.location.hostname;
  if (hostname.endsWith(".github.io")) {
    const username = hostname.slice(0, -".github.io".length);
    link.href = `https://github.com/${username}/googlesearch/blob/main/citace.md`;
  } else {
    link.href = "citace.md";
  }
}

for (const link of document.querySelectorAll("[data-portfolio-link]")) {
  if (portfolioUrl) {
    link.href = portfolioUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.removeAttribute("href");
    link.dataset.missing = "true";
    link.title = "Doplňte URL svého portfolia do proměnné portfolioUrl v souboru app.js.";
    link.setAttribute("aria-disabled", "true");
  }
}
