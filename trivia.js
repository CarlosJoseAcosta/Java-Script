let puntos = 0;
function respuesta() {
    let comprobante = true;
    let pregutnasFallidas = [];
    if (document.querySelector("#res3").checked) {
        puntos++;
    } else if (document.querySelector("#res1").checked) {
        pregutnasFallidas.push("pregunta1");
        document.querySelector("#val1").innerHTML = "x";
        document.querySelector(".pregunta1").style.color = red;
    } else if (document.querySelector("#res2").checked) {
        pregutnasFallidas.push("pregunta1");
        document.querySelector("#val1").innerHTML = "x";
        document.querySelector(".pregunta1").style.color = red;
    } else if((!document.querySelector("#res3").checked) && (!document.querySelector("#res1").checked) && (!document.querySelector("#res2").checked)){
        comprobante = false;
        document.querySelector(".pregunta1").style.color = "red";
    }
    if (document.querySelector("#res5").cheked) {
        puntos++;
    } else if (document.querySelector("#res4").checked) {
        pregutnasFallidas.push("pregunta2");
        document.querySelector("#val2").innerHTML = "x";
        document.querySelector(".pregunta2").style.color = red;
    } else if (document.querySelector("#res6").checked) {
        pregutnasFallidas.push("pregunta2");
        document.querySelector("#val2").innerHTML = "x";
        document.querySelector(".pregunta2").style.color = red;
    } else if((!document.querySelector("#res4").checked) && (!document.querySelector("#res5").checked) && (!document.querySelector("#res6").checked)){
        comprobante = false;
        document.querySelector(".pregunta2").style.color = "red";
    }
    if (document.querySelector("#res9").checked) {
        puntos++;
    } else if (document.querySelector("#res7").checked) {
        pregutnasFallidas.push("pregunta3");
        document.querySelector("#val3").innerHTML = "x";
        document.querySelector(".pregunta3").style.color = red;
    } else if (document.querySelector("#res8").checked) {
        pregutnasFallidas.push("pregunta3");
        document.querySelector("#val3").innerHTML = "x";
        document.querySelector(".pregunta3").style.color = red;
    } else if((!document.querySelector("#res7").checked) && (!document.querySelector("#res8").checked) && (!document.querySelector("#res9").checked)){
        comprobante = false;
        document.querySelector(".pregunta3").style.color = "red";
    }
    if (document.querySelector("#res10").checked) {
        puntos++;
    } else if (document.querySelector("#res11").checked) {
        pregutnasFallidas.push("pregunta4");
        document.querySelector("#val4").innerHTML = "x";
        document.querySelector(".pregunta4").style.color = red;
    } else if (document.querySelector("#res12").checked) {
        pregutnasFallidas.push("pregunta4");
        document.querySelector("#val4").innerHTML = "x";
        document.querySelector(".pregunta4").style.color = red;
    } else if((!document.querySelector("#res10").checked) && (!document.querySelector("#res11").checked) && (!document.querySelector("#res12").checked)){
        comprobante = false;
        document.querySelector(".pregunta4").style.color = "red";
    }
    if (document.querySelector("#res13").checked) {
        puntos++;
    } else if (document.querySelector("#res14").checked) {
        pregutnasFallidas.push("pregunta5");
        document.querySelector("#val5").innerHTML = "x";
        document.querySelector(".pregunta5").style.color = red;
    } else if (document.querySelector("#res15").checked) {
        pregutnasFallidas.push("pregunta5");
        document.querySelector("#val5").innerHTML = "x";
        document.querySelector(".pregunta5").style.color = red;
    } else if((!document.querySelector("#res13").checked) && (!document.querySelector("#res14").checked) && (!document.querySelector("#res15").checked)){
        comprobante = false;
        document.querySelector(".pregunta5").style.color = "red";
    }
    if (document.querySelector("#res17").checked) {
        puntos++;
    } else if (document.querySelector("#res16").checked) {
        pregutnasFallidas.push("pregunta6");
        document.querySelector("#val6").innerHTML = "x";
        document.querySelector(".pregunta6").style.color = red;
    } else if (document.querySelector("#res18").checked) {
        pregutnasFallidas.push("pregunta6");
        document.querySelector("#val6").innerHTML = "x";
        document.querySelector(".pregunta6").style.color = red;
    } else if((!document.querySelector("#res16").checked) && (!document.querySelector("#res17").checked) && (!document.querySelector("#res18").checked)){
        comprobante = false;
        document.querySelector(".pregunta6").style.color = "red";
    }
    if (document.querySelector("#res21").checked) {
        puntos++;

    } else if (document.querySelector("#res19").checked) {
        pregutnasFallidas.push("pregunta7");
        document.querySelector("#val7").innerHTML = "x";
        document.querySelector(".pregunta7").style.color = red;
    } else if (document.querySelector("#res20").checked) {
        pregutnasFallidas.push("pregunta7");
        document.querySelector("#val7").innerHTML = "x";
        document.querySelector(".pregunta7").style.color = red;
    } else if((!document.querySelector("#res19").checked) && (!document.querySelector("#res20").checked) && (!document.querySelector("#res21").checked)){
        comprobante = false;
        document.querySelector(".pregunta7").style.color = "red";
    }
    if (document.querySelector("#res22").checked) {
        puntos++;

    } else if (document.querySelector("#res24").checked) {
        pregutnasFallidas.push("pregunta8");
        document.querySelector("#val8").innerHTML = "x";
        document.querySelector(".pregunta8").style.color = red;
    } else if (document.querySelector("#res23").checked) {
        pregutnasFallidas.push("pregunta8");
        document.querySelector("#val8").innerHTML = "x";
        document.querySelector(".pregunta8").style.color = red;
    } else if((!document.querySelector("#res22").checked) && (!document.querySelector("#res23").checked) && (!document.querySelector("#res24").checked)){
        comprobante = false;
        document.querySelector(".pregunta8").style.color = "red";
    }
    if (document.querySelector("#res27").checked) {
        puntos++;

    } else if (document.querySelector("#res25").checked) {
        pregutnasFallidas.push("pregunta9");
        document.querySelector("#val9").innerHTML = "x";
        document.querySelector(".pregunta9").style.color = red;
    } else if (document.querySelector("#res26").checked) {
        pregutnasFallidas.push("pregunta9");
        document.querySelector("#val9").innerHTML = "x";
        document.querySelector(".pregunta9").style.color = red;
    } else if((!document.querySelector("#res25").checked) && (!document.querySelector("#res26").checked) && (!document.querySelector("#res27").checked)){
        comprobante = false;
        document.querySelector(".pregunta9").style.color = "red";
    }
    if (document.querySelector("#res28").checked) {
        puntos++;

    } else if (document.querySelector("#res29").checked) {
        document.querySelector(".pregunta10").style.color = "red";
        document.querySelector("#val10").innerHTML = "x";
        document.querySelector(".pregunta10").style.color = red;
    } else if (document.querySelector("#res30").checked) {
        document.querySelector(".pregunta10").style.color = "red";
        document.querySelector("#val10").innerHTML = "x";
        document.querySelector(".pregunta10").style.color = red;
    } else if((!document.querySelector("#res30").checked) && (!document.querySelector("#res28").checked) && (!document.querySelector("#res29").checked)){
        comprobante = false;
        document.querySelector(".pregunta10").style.color = "red";
    }
    if (comprobante) {
        document.querySelector("#puntuacion").innerHTML = "Sus puntos son: " + puntos;
        for(let i = 0; i < pregutnasFallidas.length; i++){
            document.querySelector("#fallos").innerHTML += pregutnasFallidas[i];
        }
    } else {
        alert("No ha respondido a todas las preguntas")
    }
}
document.querySelector("#fin").addEventListener("click", respuesta);