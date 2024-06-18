function categoriaEdad() {
    const edad = parseInt(document.getElementById("edad").value);

    if (!isNaN(edad)) {
        if (edad <= 12) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = "<div class='alert alert-info' role='alert'>Eres un niño</div>";
        } else if (edad > 12 && edad <= 40) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = "<div class='alert alert-warning' role='alert'>Eres un joven</div>";
        } else if (edad > 40 && edad <= 60) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = "<div class='alert alert-primary' role='alert'>Eres un adulto</div>";
        } else {
            document.getElementById("resultadoCategoriaEdad").innerHTML = "<div class='alert alert-success' role='alert'>Eres un adulto mayor</div>";
        }
    } else {
        document.getElementById("resultadoCategoriaEdad").innerHTML = "<div class='alert alert-danger' role='alert'>Por favor, ingrese un numero entero valido para la edad.</div>";
    }
}
function pesoEstatura() {
    const sexo = document.getElementById("sexo").value;

    const edad = parseInt(document.getElementById("edadPesoEstatura").value);

    if (isNaN(edad)) {
        document.getElementById("pesoEstatura").innerHTML = 'Por favor, ingrese un valor entero válido para la edad.';
        return;
    }

    let genero, pesoEstimado, estaturaEstimada;
    if (sexo === "H") {
        if (11 <= edad && edad <= 14) {
            genero = "un hombre";
            pesoEstimado = 45;
            estaturaEstimada = 157;
        } else if (15 <= edad && edad <= 18) {
            genero = "un hombre";
            pesoEstimado = 66;
            estaturaEstimada = 176;
        } else if (19 <= edad && edad <= 24) {
            genero = "un hombre";
            pesoEstimado = 72;
            estaturaEstimada = 177;
        } else if (25 <= edad && edad <= 50) {
            genero = "un hombre";
            pesoEstimado = 79;
            estaturaEstimada = 176;
        } else {
            genero = "un hombre";
            pesoEstimado = 77;
            estaturaEstimada = 173;
        }
    } else {
        if (11 <= edad && edad <= 14) {
            genero = "una mujer";
            pesoEstimado = 46;
            estaturaEstimada = 157;
        } else if (15 <= edad && edad <= 18) {
            genero = "una mujer";
            pesoEstimado = 55;
            estaturaEstimada = 163;
        } else if (19 <= edad && edad <= 24) {
            genero = "una mujer";
            pesoEstimado = 58;
            estaturaEstimada = 164;
        } else if (25 <= edad && edad <= 50) {
            genero = "una mujer";
            pesoEstimado = 63;
            estaturaEstimada = 163;
        } else {
            genero = "una mujer";
            pesoEstimado = 65;
            estaturaEstimada = 160;
        }
    }

    document.getElementById("resultadoPesoEstatura").innerHTML = "<div class='alert alert-info' role='alert'>Para " + genero + " de " + edad + " años, el peso estimado es de " + pesoEstimado + " kg y la estatura estimada es de " + estaturaEstimada + " cm.</div>";
    
}
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

    if (!isNaN(peso) && !isNaN(estatura) && peso > 0 && estatura > 0) {
        let imc = peso / (estatura * estatura);

        if (imc < 18.5) {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-warning' role='alert'>Usted tiene bajo peso</div>";
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-success' role='alert'>Usted tiene un peso normal</div>";
        } else if (imc >= 25 && imc <= 29.9) {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'>Usted tiene sobrepeso</div>";
        } else if (imc >= 30 && imc <= 34.9) {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'>Usted tiene obsesidad tipo I</div>";
        } else if (imc >= 35 && imc <= 39.9) {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'>Usted tiene obsesidad tipo II</div>";
        } else if (imc >= 40 && imc <= 49.9) {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'>Usted tiene obsesidad tipo III</div>";
        } else {
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'>Usted tiene obsesidad tipo IV</div>";
        }
    } else {
        document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'>'Por favor, ingrese valores numericos validos para el peso y la estatura.';</div>";
        
    }
}
function calcularPresionArterial() {
    const presionSistolica = parseInt(document.getElementById("presionSistolica").value);

    if (!isNaN(presionSistolica)) {
        if (presionSistolica < 90) {
            document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-info' role='alert'>Su presion arterial es baja</div>";
        } else if (presionSistolica < 120) {
            document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-success' role='alert'>Su presion arterial es normal</div>";
        } else if (presionSistolica >= 120 && presionSistolica <= 139) {
            document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-warning' role='alert'>Su presion arterial esta en prehipertension</div>";
        } else if (presionSistolica >= 140 && presionSistolica <= 159) {
            document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-danger' role='alert'>Su presion arterial es Alta: hipertension Fase 1</div>";
        } else {
            document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-danger' role='alert'>Su presion arterial es Alta: hipertension Fase 2</div>";
        }
    } else {
        document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-danger' role='alert'>Por favor, 'Por favor, ingrese un valor entero valido para la presion arterial.';</div>";
        
    }
}

