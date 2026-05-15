function soma() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var resultado = document.getElementById("resultado");


    resultado.innerHTML = "Resultado: " + (Number(campo1.value) + Number(campo2.value));
}

function addItem() {
    var campo_tarefas = document.getElementById("campo_tarefas");
    var lista = document.getElementById("Lista");
    var Item = document.createElement("li");

    Item.innerHTML = campo_tarefas.value

    lista.appendChild(Item);

    campo_tarefas.value = "";
}