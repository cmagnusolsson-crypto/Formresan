FORMRESAN – PWA prototyp v1

Innehåll: index.html, app.js, sw.js, manifest.webmanifest, icon.svg.

För att installera på Android måste filerna ligga på en HTTPS-webbadress (t.ex. GitHub Pages eller Netlify). Öppna sidan i Chrome på Android och välj 'Lägg till på startskärmen' eller 'Installera app'.

Test lokalt på dator: kör python -m http.server 8000 i denna mapp och öppna http://localhost:8000.

Funktioner: mätningar, träningspass, kalenderlistor, recept med manuellt angivna näringsvärden, måltidsplanering, statistik, foton, JSON export/import, offline-cache. Data lagras lokalt i IndexedDB på enheten. Rensa inte webbplatsdata utan säkerhetskopia. Påminnelser fungerar endast när appen öppnas; inga schemalagda bakgrundsnotiser.

Viktigt: prototyp, inte produktionsgranskad. Testa backup och återställning före skarp användning. Foton komprimeras och sparas lokalt. Ingen molnsynk.
