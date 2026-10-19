FORMRESAN 2.0 – UPPDATERING v13

NYTT JÄMFÖRT MED v12
- Träningspass visar föreslagen vikt baserad på senaste avklarade set. Om alla registrerade set på samma vikt nått repetitionsintervallets övre gräns föreslås en försiktig höjning. Användaren väljer själv om vikten ska fyllas i.
- Byt övning under ett pågående pass, med alternativ som använder samma utrustning. Likvärdighet i rörelse måste bedömas av användaren.
- Träningsstatistik med valbar utvecklingsgraf per övning, utifrån registrerade set.
- Receptbank med fungerande favoritfilter och uppdaterad favoritmarkering.
- Välj portionsantal när ett recept markeras som ätet.
- Veckomeny med bläddring mellan veckor och inköpslista som kan kopieras. Mängder skalas med receptets portionsantal när strukturerade ingredienser finns.
- Skapa en egen receptvariant och ändra ingredienser. Nya näringsvärden anges manuellt; ingen automatisk näringsdatabas är ansluten.
- Viktprognos från senaste mätserien, om trend och mål medger en rimlig uppskattning.
- Justerat logik för vikt- och fettprocentmål så lägre målvärden bedöms i rätt riktning.
- Säkerhetskopian fortsätter att inkludera måldata, matlogg, favoriter och träningshistorik.

BEFINTLIGT FRÅN v12
- Mina mål högst upp på översikten (pass/vecka, steg, vikt, kroppsfett och styrka).
- Dagsmål för kalorier, ätna måltider och kvarvarande kalorier; planerade måltider räknas inte som ätna.
- Receptbank, matkalender, framstegsbilder, veckomedelvikt och statistik.

VIKTIGA BEGRÄNSNINGAR
- Nya riktiga maträttsfoton och individuellt anatomiskt korrekta träningsbilder har inte kunnat levereras. Befintliga illustrationsbilder finns kvar; egna receptbilder kan laddas upp.
- Google Drive kräver användarens eget OAuth-klient-ID och har INTE testats mot ett Google-konto. JSON-export och import finns kvar.
- Övningsbyte väljer samma utrustning, inte nödvändigtvis samma muskelgrupp. Granska valet själv.
- Träningsprogression är ett förslag baserat på historik, inte en automatisk ändring av träningsplanen.
- Inköpslista kräver strukturerade ingredienslistor; andra recept listas som saknade.
- Receptvariant kräver manuell omräkning av näringsvärden.
- Appen är syntaxkontrollerad, men fullständigt mobil-/webbläsartest och Google-integration har inte kunnat verifieras.

UPPDATERA
1. Öppna gamla appen och exportera JSON-säkerhetskopia under Mer.
2. Packa upp ZIP och ersätt projektfilerna i GitHub-repot. Behåll samma GitHub Pages-adress.
3. Låt webbläsarens IndexedDB vara kvar. Rensa inte webbplatsdata.
4. Uppdatera sidan när GitHub Pages publicerat v13. Vid cachningsproblem: stäng och öppna appen igen.
5. Testa receptfilter, träningspass och återställning på en separat enhet med en testsäkerhetskopia innan du förlitar dig på den.
