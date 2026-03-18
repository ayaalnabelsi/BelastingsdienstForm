# Browser Technology

  <details open>
  <summary>Browser technology</summary>

  ### Auteur:
  Aya Alnabelsi 

  #### Niveau:
  In het midden van ontwerpen en development 

</details>

# Week 1
# Maandag reflectie
Tijdens de hoorcollege van Victor werd uitgelegd hoe je formulieren maakt in HTML. Ik heb geleerd over verschillende HTML elementen zoals inputvelden en radio buttons werken en wanneer je die gebruikt. Ook werd het verschil besproken tussen een span (inline element) en een div (blok element).

Ik heb geleerd dat een label een interactief element is waarop je kunt klikken en dat dat gekoppeld is aan een inputveld. Een legend zorgt ervoor dat de tekst duidelijk is voor machines en screenreaders. Verder werd uitgelegd dat een BSN een string element is dat uit cijfers bestaat.

Ter voorbereiding heb ik het artikel goed doorgenomen en er een samenvatting van gemaakt.

# Artikel Tahoe Icons samenvatting:
- Human Interface Guidelines uit 1992 
- Simpele display gebruiken, bereikbaar van elementen beperken om interface te verbeteren en afleiding van gebruikers te vermijden
- Pictogrammen gebruiken om te helpen sneller te vinden wat de gebruiker zoekt terwijl het toevoegen van icons aan alles is juist verkeerd om te doen 
- Icons helpen om iets sneller te vinden 
- Door duidelijkere scheiding van tekst, pictogram kan je het sneller vinden


Tot slot hebben Dylan en ik samen onze code besproken en elkaar geholpen met verbeteren.

# Dinsdag reflectie
Dinsdag hebben we samen met de klas de Weekly Geek besproken over het artikel Tahoe Icons. Ik vond het interessant dat we er een quiz over speelden en er met de hele klas over discussieerden. Door samen te beargumenteren waarom bepaalde keuzes goed of minder goed zijn werd ik gemotiveerd om meer out of the box na te denken over interfaces en het gebruik van iconen op een nuttige  manier.

Tijdens de workshop heb ik daarnaast veel geleerd over verschillende HTML elementen zoals dialog, inputvelden, alpha, password inputs en switch elementen. Ook heb ik geleerd wat het verschil is tussen valid en invalid input en hoe validatie werkt binnen een formulier. Daarnaast weet ik nu hoe autocomplete ervoor zorgt dat eerder ingevulde gegevens in een formulier automatisch worden opgeslagen en voorgesteld.

Tot slot heb ik geleerd hoe je met behulp van HTML een lijst kunt maken en hoe je verschillende elementen op een correcte manier toepast binnen een formulier.



# Vrijdag voortgangsgesprek
- Tijdens het feedbackgesprek heb ik mijn website samen met Vasilies en andere studenten doorgenomen.
- Ik heb het gitignore bestand aangemaakt met beulp van Vasilis omdat ik daar moeite mee had en het advies meegekregen om een sans serif fallback font toe te voegen.
- We hebben besproken hoe je een document online kunt laten ondertekenen.
- Het NS huisstijldocument doornemen voor een proffiesionele uitstraling van het formulier 
- Bij de fieldset border none gebruiken om de randen te verwijderen en evt  extra padding voor een betere layout.
- Het Gestalt principe toepassen door elementen die bij elkaar horen  te groeperen.
- Elke fieldset moet een legend hebben voor toegankelijkheid.
-  Display: none gebruiken om onderdelen te verbergen wanneer ze niet zichtbaar hoeven te zijn.

# Week 2
# Maandag reflectie

We hebben uitleg gekregen over de eisen van de eindopdracht. Daarnaast hebben we verschillende soorten patterns besproken en geleerd hoe validatie werkt.

Tijdens de workshop van Vasilies kregen we uitleg over validatie in HTML en CSS. Tijdens deze workshop heb ik meegedaan aan de oefening en veel geleerd over hoe validatie precies werkt en hoe je dit op verschillende manieren kunt toepassen in HTML en CSS. Zo heb ik geleerd dat je het requiredattribuut gebruikt om een veld verplicht te maken. Ook heb ik geleerd dat de blurelement geactiveerd wordt wanneer je het invoerveld verlaat bijvoorbeeld door buiten het veld te klikken.

Vervolgens heb ik zelfstandig gewerkt aan het formulier. Ik heb nagedacht aan  welke patterns ik de komende twee weken wil werken en hoe ik de UX zo prettig mogelijk kan maken. Daarnaast heb ik me verdiept in de artikelen over Aria link role en het Anchor element.

Aan het einde van de dag had ik een feedbackronde met Melvin, Feedback die ik heb gekregen:

Voor het uitklappen van vragen moet ik het gedeelte dat verborgen wordt in een div plaatsen met een eigen id of class.
Wanneer een radio button is geselecteerd moet ik daarop de styling toepassen.
Om een element te verbergen kan ik werken met
opacity: 0;
transition
max-height: 0;


# Samenvatting soorten patterns:
Er moeten minimaal 2 patterns en validatie worden toegepast.
- Gebruik van verschillende datepickers (klein pattern), bijvoorbeeld om vragen te tonen of te verbergen.
- Vragen wel of niet tonen op basis van eerdere antwoorden.
- Extra toelichting tonen zonder te veel tekst weer te geven.
- Bij gegevens van een gemachtigde: één van de opties bij vraag 2a moet worden ingevuld.
- Verschil maken tussen een adres in Nederland of in het buitenland (verschillende formuliervelden onderzoeken).
- Mogelijkheid om meerdere verkrijgers toe te voegen.
- Landcode correct laten invullen.
- BSN moet voldoen aan de elfproef 11 proef validatie toevoegen.


# Samenvatting artikel Anchor element en ARIA role link
De ARIA role link zorgt ervoor dat een element zoals een div of span zich gedraagt als een link. Een <a> tag is beter omdat die standaard al werkt met toetsenbord Tab, Enter, focus en screenreaders en omdat deze toegankelijker en gebruiksvriendelijker is.

Als je role link gebruikt moet je zelf extra dingen toevoegen zoals tabindex, JavaScript voor klik en Enter functionaliteit en de juiste styling, de browser regelt dit niet automatisch.

Met de <a> element kunnen we linken naar verschillende pagina's zoals:
- E-mailadressen (mailto:)
- Telefoonnummers (tel:)
- Een plek op dezelfde pagina (#anker)
- Bestanden zoals pdf’s

Belangrijke attributen:
- target _blank voor nieuw tabblad, _self om op de zelfde tabblad te blijven
- download bestand direct downloaden
- rel zegt iets over de relatie tussen de pagina en link 
- referrerpolicy bepaalt de hoeveelheid informatie die meegestuurd wordt


# Dinsdag reflectie
Tijdens de Weekly Geek heb ik me verdiept in het anchor element en de rol link binnen HTML. Samen met mijn groepje onderzocht hoe we dit element correct en toegankelijk gebruiken met de focus op semantiek en screenreaders, we maakten een voorbeeld in Visual Studio Code en presenteerden dit aan de klas.

Ik vond het interessant om te merken hoe veel diepgang er zit in een element en ben me nu bewuster van het belang van toegankelijkheid en goede HTML structuur.

Verder heb ik me de rest van de dag beziggehouden met het vormgeven van het formulier en het toepassen van de NS huisstijl. Daarnaast ben ik gestart met het uitwerken van de eerste pattern het in en uitklappen van vragen. Dit is een uitdagend pattern waar ik me nog verder in moet verdiepen om het zo semantisch en toegankelijk mogelijk op te maken.

Aan het einde van de dag heb ik een feedbacksessie gehad met Sabrine. We hebben elkaars code doorgenomen en inspiratie uitgewisseld.

De feedback die ik heb gekregen:
- De radio button en het bijbehorende label van positie wisselen.
- De NS huisstijlpagina gebruiken als referentie voor de styling.
- Een div om de fieldset plaatsen en deze verbergen waar nodig.

# Vrijdag voortgangsgesprek
- Het formulier ziet er goed uit. In de 2e html pagina zijn meerdere patterns te zien, een gedeelte weghalen en de focus leggen op het onderdeel toevoegen van verkrijgers.
- Nadenken over kleine details, zoals de grootte van een inputveld.
- Voor de pattern het toevoegen van een 2e verkrijger gebruik maken van de templating methode. 


# Week 3
# Maandag reflectie
Tijdens het gastcollege van Rijk van Zanten de oprichter van Directus vertelde hij over het starten van een eigen bedrijf en alles wat daarbij komt kijken. Hij legde uit dat je als ondernemer voortdurend tegen nieuwe situaties aanloopt en moet nadenken over zaken waar je eerder misschien nooit mee te maken hebt gehad. Ook gaf hij aan dat er veel komt kijken bij het opzetten van een bedrijf en hoe belangrijk goede communicatie tussen medewerkers is.

Wat ik vooral interessant vond was het verhaal over hoe Rijk zijn carriere is begonnen. Hij vertelde dat het soms nuttig is om van een hobby je werk te maken dat kan veel plezier geven ook al kan het werk soms moeilijk of intensief zijn. 

Wat mij ook opviel waren de lange werkdagen die hij maakt hij werkt vaak van ongeveer 9:00 tot 19:30. Daarnaast vond ik het bijzonder om te horen hoe internationale samenwerkingen verlopen en welke skills daarvoor nodig zijn dat gaf een goed beeld van hoe het is om met mensen uit verschillende landen samen te werken.

Daarna hebben we een workshop van Vsilies gehad over het valideren van formulieren in HTML en CSS. We hebben besproken op welke verschillende manieren inputvelden gevalideerd kunnen worden en hoe je validatie met JavaScript kunt toepassen. 

Daarbij ging het niet alleen om het gebruik van bijvoorbeeld required, maar ook om verder nadenken over hoe je validatie op een gebruiksvriendelijke en prettige manier kunt toepassen voor de gebruiker.

Verder heb ik mij de rest van de dag beziggehouden met het uitzoeken hoe ik vragen kan laten in en uitklappen. Hier was ik best lang mee bezig, omdat een groot gedeelte in eerste instantie niet lukte, ondanks dat het een intensief en soms lang proces was vond ik het best leerzaam het liet me nadenken over de kleine details die ervoor zorgen dat een formulier toegankelijker en gebruiksvriendelijker maakt voor een gebruiker.

# Dinsdag reflectie
Vandaag heb ik gewerkt aan het in en uitklappen van vragen in het formulier, waarbij ik gebruikmaakte van id’s en de :has()selector. Ik heb veel geleerd over hoe deze selector werkt en hoe je met id’s specifieke onderdelen makkelijker kunt stylen. Ook heb ik nagedacht over hoe ik bepaalde vragen op een logische en gebruiksvriendelijke manier kan laten zien.

Het bleek soms lastiger dan verwacht, zodra ik een onderdeel af had kwam er vaak iets nieuws bij waar ik rekening mee moest houden, waardoor ik telkens een nieuwe logische oplossing moest bedenken om alles netjes te laten werken.

Daarnaast heb ik het eerste pattern volledig afgerond, de CSS aangepast aan de huisstijl van de NS en de HTML en CSS gevalideerd. Het was een leerzame dag ik heb veel nieuwe dingen geleerd en veel bereikt in een dag.


# Weekly geek aantekeningen
What Happened To Text Inputs? 22 November 2022

- Er zijn drie manieren om textinputvelds te ontwerpen en maar een daarvan is goed
Ontwerpers proberen te innoveren en veranderen daardoor dingen die voor gebruikers al prima werken
- Visuele conventies zoals onderstreepte links maken meteen duidelijk wat interactief is.
- Ontwerpers verwijderen visuele aanwijzingen omdat ze rommelig lijken
- Door minimalistisch design verdwijnen de visuele elementen die een invoerveld herkenbaar maken
- Labels worden vervangen door placeholders hierdoor lijkt het formulier al ingevuld, Placeholders kunnen niet meer gebruikt worden waarvoor ze bedoeld zijn.
# Vrijdag reflectie
- langs Nienke gaan voor templating 
- Wanneer er vraag weg is het niet requierd maken met javascript 
- Validatie mooier maken bij fieldsets 
- Voor de mondeling Nastreven waar we trots op zijn wat wist ik nog niet en nu wel.

# Bronnenlijst
- https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date
- Dylan
- https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has


