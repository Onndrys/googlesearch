# Google Search – školní projekt

Statický web bez dalších závislostí. Otevřete `index.html` v prohlížeči nebo spusťte místní server z této složky:

```text
python -m http.server 8000
```

Potom navštivte `http://localhost:8000/`.

## Stránky

- `index.html` – textové vyhledávání a tlačítko „Zkusím štěstí“
- `images.html` – vyhledávání obrázků
- `advanced.html` – čtyři pole rozšířeného vyhledávání
- `forms.html` – ukázkové formulářové prvky; formulář nic neodesílá
- `citace.md` – použité zdroje a zadání/prompt

Odkazy na validátory se po načtení stránky nastaví tak, aby validovaly aktuální stránku a její stylesheet. Odkaz na citace se při hostování na GitHub Pages změní na soubor v repozitáři.

Před odevzdáním doplňte URL portfolia do proměnné `portfolioUrl` v `app.js`. Je také potřeba vytvořit repozitář `googlesearch` pod vlastním GitHub účtem a povolit GitHub Pages pro větev `main` z kořenové složky.
