function operacion() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);
    var resultado = "";

    if (input1 < input3) {
        resultado = "Multiplicación: " + input1 + " * " + input2 + " * " + input3 + " = " + (input1 * input2 * input3);
    }
    else {
        resultado = "No se realiza la multiplicación.";
    }

    if (input2 === 0) {
        var mayor = Math.max(input1, input3);
        var menor = Math.min(input1, input3);
        resultado += "<br>Resta: " + mayor + " - " + menor + " = " + (mayor - menor);
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function concatenacion() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);
    var resultado = "";

    var multiplicacion = input1 * (input2 + input3);

    for (var i = 0; i < multiplicacion; i++) {
        resultado += "Valor1: " + input1 + " Valor2: " + input2 + " Valor3: " + input3 + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}