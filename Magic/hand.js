//descobre quantidade de cartas na pasta do deck
let quantidade = 0;
let cartas = [];

document.getElementById("pasta").addEventListener("change", function() {

    const arquivos = Array.from(this.files);

    cartas = arquivos.filter(arquivo =>
        arquivo.name.endsWith(".png")
    );

    quantidade = cartas.length;

    console.log("Quantidade:", quantidade);


});
//final 

//manda a carta para o campo de batalha
function ativar(numero) {
    let contador = Number(localStorage.getItem("contador")) || 0;

    contador++;

    localStorage.setItem("contador", contador);
    localStorage.setItem("carta", numero);
}

//puxa carta do grimorio
async function draw()
{
    //numero aleatorio
    const numero = Math.floor(Math.random() * quantidade) + 1;
    //Cria div onde fica imagem da carta e imagem
    const nova_div = document.createElement("div");    
    const nova_carta = document.createElement("img");
    //Atributos dos elementos
    nova_div.id = "spell_slot"; 
    nova_carta.id = "carta_spell";
    //define qual carta puxada
    nova_carta.src = `cartas/(${numero}).png`;
    nova_div.setAttribute("onclick", `ativar(${numero})`);
    //defini-los como apendices
    const battleStage = document.getElementById("spells_stage");
    nova_carta.textContent = "";
    battleStage.appendChild(nova_div);
    nova_div.appendChild(nova_carta);
}
