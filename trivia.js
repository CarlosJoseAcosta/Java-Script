let puntos = 0;
function respuesta() {
    let comprobante = true;
    let pregutnasFallidas = [];
    if (document.querySelector("#res3").checked) {
        puntos++;
    } else if (document.querySelector("#res1").checked) {
        pregutnasFallidas.push("pregunta1");
    } else if (document.querySelector("#res2").checked) {
        pregutnasFallidas.push("pregunta1");
    } else {
        comprobante = false;
        document.querySelector(".pregunta1").computedStyleMap.color = "red";
    }
    if (document.querySelector("#res5").cheked) {
        puntos++;
    } else if (document.querySelector("#res4").checked) {
        pregutnasFallidas.push("pregunta2");
    } else if (document.querySelector("#res6").checked) {
        pregutnasFallidas.push("pregunta2");
    } else {
        comprobante = false;
        document.querySelector(".pregunta2").style.color = "red";
    }
    if (document.querySelector("#res9").checked) {
        puntos++;
    } else if (document.querySelector("#res7").checked) {
        pregutnasFallidas.push("pregunta3");
    } else if (document.querySelector("#res8").checked) {
        pregutnasFallidas.push("pregunta3");
    } else {
        comprobante = false;
        document.querySelector(".pregunta3").style.color = "red";
    }
    if (document.querySelector("#res10").checked) {
        puntos++;
    } else if (document.querySelector("#res11").checked) {
        pregutnasFallidas.push("pregunta4");//
    } else if (document.querySelector("#res12").checked) {
        pregutnasFallidas.push("pregunta4");
    } else {
        comprobante = false;
        document.querySelector(".pregunta4").style.color = "red";
    }
    if (document.querySelector("#res13").checked) {
        puntos++;
    } else if (document.querySelector("#res14").checked) {
        pregutnasFallidas.push("pregunta5");
    } else if (document.querySelector("#res15").checked) {
        pregutnasFallidas.push("pregunta5");
    } else {
        comprobante = false;
        document.querySelector(".pregunta5").style.color = "red";
    }
    if (document.querySelector("#res17").checked) {
        puntos++;

    } else if (document.querySelector("#res16").checked) {
        pregutnasFallidas.push("pregunta6");
    } else if (document.querySelector("#res18").checked) {
        pregutnasFallidas.push("pregunta6");
    } else {
        comprobante = false;
        document.querySelector(".pregunta6").style.color = "red";
    }
    if (document.querySelector("#res21").checked) {
        puntos++;

    } else if (document.querySelector("#res19").checked) {
        pregutnasFallidas.push("pregunta7");
    } else if (document.querySelector("#res20").checked) {
        pregutnasFallidas.push("pregunta7");
    } else {
        comprobante = false;
        document.querySelector(".pregunta7").style.color = "red";
    }
    if (document.querySelector("#res22").checked) {
        puntos++;

    } else if (document.querySelector("#res24").checked) {
        pregutnasFallidas.push("pregunta8");
    } else if (document.querySelector("#res23").checked) {
        pregutnasFallidas.push("pregunta8");
    } else {
        comprobante = false;
        document.querySelector(".pregunta8").style.color = "red";
    }
    if (document.querySelector("#res27").checked) {
        puntos++;

    } else if (document.querySelector("#res25").checked) {
        pregutnasFallidas.push("pregunta9");
    } else if (document.querySelector("#res26").checked) {
        pregutnasFallidas.push("pregunta9");
    } else {
        comprobante = false;
        document.querySelector(".pregunta9").style.color = "red";
    }
    if (document.querySelector("#res28").checked) {
        puntos++;

    } else if (document.querySelector("#res29").checked) {
        document.querySelector(".pregunta10").style.color = "red";
    } else if (document.querySelector("#res30").checked) {
        document.querySelector(".pregunta10").style.color = "red";
    } else {
        comprobante = false;
        document.querySelector(".pregunta10").style.color = "red";
    }
    if (comprobante) {
        alert("No ha respondido a todas las preguntas")
    } else {
        document.querySelector("#puntuacion").innerHTML = "Sus puntos son: " + puntos;
        for(let i = 0; i < pregutnasFallidas.length; i++){
            document.querySelector("#fallos").innerHTML += pregutnasFallidas[i];
        }
    }
}
document.querySelector("#fin").addEventListener("click", respuesta);