function calcularOrcamento(){

  let cliente = document.getElementById("cliente").value;

  let produto = document.getElementById("produto");

  let valor = Number(produto.value);

  let nomeProduto =
    produto.options[produto.selectedIndex].text;

  let quantidade =
    Number(document.getElementById("quantidade").value);

  let total = valor * quantidade;

  document.getElementById("resultado").innerHTML = `
    <strong>Cliente:</strong> ${cliente} <br>
    <strong>Produto:</strong> ${nomeProduto} <br>
    <strong>Total:</strong> R$ ${total}
  `;

}