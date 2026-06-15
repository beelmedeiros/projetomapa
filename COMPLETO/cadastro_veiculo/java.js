function cadastrarVeiculo(){

    let placa =
    document.getElementById("placa").value;

    let marca =
    document.getElementById("marca").value;

    let modelo =
    document.getElementById("modelo").value;

    if(
        placa === "" ||
        marca === "" ||
        modelo === ""
    ){
        alert("Preencha todos os campos!");
        return;
    }

    let tabela =
    document.getElementById("listaVeiculos");

    tabela.innerHTML += `
        <tr>
            <td>${placa}</td>
            <td>${marca}</td>
            <td>${modelo}</td>
        </tr>
    `;

    document.getElementById("placa").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
}

function acionarEmergencia(){

    let confirmar =
    confirm("Deseja realmente acionar a emergência?");

    if(confirmar){

        alert(
            "Emergência acionada!\n\n"
        );

    }
}
