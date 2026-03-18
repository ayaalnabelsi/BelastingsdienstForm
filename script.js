const knop = document.getElementById("voeg-verkrijger-toe");
const template = document.getElementById("verkrijger-template");
let nummer = 1;

knop.addEventListener("click", () => {
  nummer++;
  const nieuw = template.content.cloneNode(true);

  // nummer toevoegen aan de titel
  nieuw.querySelector("legend").textContent = `Verkrijger ${nummer}`;

  // unieke radio namen maken
  nieuw.querySelectorAll('input[name="hele-vermogen[]"]').forEach(r => r.name = `hele-vermogen-${nummer}`);
  nieuw.querySelectorAll('input[name="wettelijkeErfdeel[]"]').forEach(r => r.name = `wettelijkeErfdeel-${nummer}`);

  // voeg toe boven de knop
  knop.parentNode.insertBefore(nieuw, knop);
});

