function calcular(){

    var pao = document.getElementById("pao").value;
    var bolo = document.getElementById("bolo").value;
    var cafe = document.getElementById("cafe").value;

    var valorPao = 1;
    var valorBolo = 15;
    var valorCafe = 5;

    
    var total =
        (pao * valorPao) +
        (bolo * valorBolo) +
        (cafe * valorCafe);

    document.getElementById("resultado").innerHTML =
        "Total: R$ " + total.toFixed(2);
}
