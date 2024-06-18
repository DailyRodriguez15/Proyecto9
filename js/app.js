document.getElementById('form_pesoIdeal').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sexo = document.getElementById("sexoActual").value;
    const edad = parseInt(document.getElementById("edadActual").value);
    const pesoActual = parseFloat(document.getElementById("pesoActual").value);
    const estatura = parseFloat(document.getElementById("estaturaActual").value);

    //Calcular la estatura y el peso ideal
    let pesoIdeal;
    if (sexo === "Masculino") {
        pesoIdeal = (estatura - 100) - ((estatura - 150) / 4);
    } else if (sexo === "Femenino") {
        pesoIdeal = (estatura - 100) - ((estatura - 150) / 2.5);
    }

    //Calcular el IMC
    const imcResultado = calculoImc(pesoActual, estatura);

    const diferenciaPeso = pesoActual - pesoIdeal;
    const mensajePerderGanar = diferenciaPeso > 0 ? "Deberías perder" : "Deberías ganar";

    //Mostar resultado visual
    document.getElementById("resultadosPesoIdeal").innerHTML = 
    "<div class='alert alert-info' role='alert'><p>Sexo: " + sexo + " </p>" +
    "<p>Edad: " + edad + " años</p>" +
    "<p>Peso Actual: " + pesoActual + " kg</p>" +
    "<p>Altura: " + estatura + " cm</p>" +
    "<p>IMC: " + imcResultado + "</p>" +
    "<p>Peso Ideal: " + pesoActual + "</p>" +
    "<p>" + mensajePerderGanar + ": " + diferenciaPeso.toFixed(2) + " kg</p>" +
    "</div>";
});

function calculoImc(pesoActual, estatura) {
    if (!isNaN(pesoActual) && !isNaN(estatura) && pesoActual > 0 && estatura > 0) {
        const imc = pesoActual / (estatura * estatura / 10000);
        let resultado = "";

        if (imc < 18.5) {
            resultado = "<span class='badge text-bg-warning'>Bajo Peso</span>";
        } else if (imc >= 18.5 && imc <= 24.99) {
            resultado = "<span class='badge text-bg-success'>Peso Normal</span>";
        } else if (imc >= 25 && imc <= 29.99) {
            resultado = "<span class='badge text-bg-warning'>Sobrepeso</span>";
        } else if (imc >= 30 && imc <= 34.99) {
            resultado = "<span class='badge text-bg-danger'>Obesidad I</span>";
        } else if (imc >= 35 && imc <= 39.99) {
            resultado = "<span class='badge text-bg-danger'>Obesidad II</span>";
        } else if (imc >= 40 && imc <= 49.99) {
            resultado = "<span class='badge text-bg-danger'>Obesidad III</span>";
        } else {
            resultado = "<span class='badge text-bg-danger'>Obesidad IV</span>";
        }

        return imc.toFixed(1) + " - " + resultado;
    } else {
        return "Por favor, ingrese valores numéricos válidos para el peso y la estatura.";
    }
}
