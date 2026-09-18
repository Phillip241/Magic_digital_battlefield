window.addEventListener("storage", function(event) 
{
    if (event.key === "contador") {
        jogar_carta();
    }
});


function jogar_carta()
{
const nova_carta = document.createElement("div");
nova_carta.id = "speel_slot";
const battleStage = document.getElementById("spells_stage");
nova_carta.textContent = "Nova div!";
battleStage.appendChild(nova_carta);
alert('deu')
}