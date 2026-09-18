//recebe carta do outro site
window.addEventListener("storage", function(event) {

    if (event.key === "carta") {

        jogar_carta(event.newValue);
    }
});

//funtion que recebe carta da "mao"
function jogar_carta(numero)
{
    //Cria div onde ficará imagem da carta e imagem
    const nova_div = document.createElement("div");    
    const nova_carta = document.createElement("img");
    //Atributos dos elementos
    nova_div.id = "spell_slot"; 
    nova_carta.id = "carta_spell";
    nova_carta.src = `cartas/(${numero}).png`;
    //defini-los como apendices
    const battleStage = document.getElementById("spells_stage");
    nova_carta.textContent = "";
    battleStage.appendChild(nova_div);
    nova_div.appendChild(nova_carta);
}

//lembrar de reajustar height
function ver_hand(){
    window.open(
        "hand.html",
        "janelaBatalha",
        `width=${screen.availWidth},height=500,resizable=yes`
    );
}