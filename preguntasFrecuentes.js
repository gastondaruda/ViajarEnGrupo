let preguntasFrecuentes = [
    {id:"question1",
    pregunta:"En el caso que ya haya pagado y tengo problemas para realizar mi viaje. ¿Perdí el dinero?",
    respuesta:"No! Nunca perdes el dinero cuando viajas a traves de Bettina Schwartz, tu asesora y agente de viajes de confianza."},
    {id:"2",
    pregunta:"¿Solo puedo comprar paquetes pre-armados?",
    respuesta:"No ! La idea es que vos armes tu propio paquete de viaje. Para disfrutar tus vacaciones como quieras."},
    {id:"3",
    pregunta:"¿Cuánto tiempo se demoran en pasarme un presupuesto?",
    respuesta:"El presupuesto se arma en el momento, y en 1 hora podes estar con todo listo para embarcar!!"},
    {id:"4",
    pregunta:"¿Se puede viajar en plena pandemia?",
    respuesta:"Si! Chequea bien los requisitos por pais. Los podes encontrar en Kayak"},
    {id:"5",
    pregunta:"No tengo seguro de viaje. ¿Cómo lo consigo?",
    respuesta:"Para viajar al exterior es obligatorio tener una asistencia para el viajero. Nosotros desde Viajarengrupo te ofrecemos asistencias de calidad. No dudes en consultarnos."}
] 


let preguntasContenedor = document.getElementById("preguntas");

window.addEventListener("DOMContentLoaded", mostrarPreguntas);
function mostrarPreguntas(){
    for(let pregunta of preguntasFrecuentes){
        let ul = document.createElement("ul");
        ul.innerHTML = `<li class="preguntas_li" id=${pregunta.id}><i class='bx bx-question-mark'></i>${pregunta.pregunta}</ul>
                        <li class="respuestas_li">${pregunta.respuesta}</li>`
                        preguntasContenedor.appendChild(ul);
    }
}

function mostrarRespuesta(e){
    /*let respuesta = document.getElementById("1");
    respuesta.classList.toggle("display");
    console.log("Hola")*/
    let preguntaFiltrada = preguntasFrecuentes.filter(item => console.log(item.id === e));
    console.log(e);
    console.log(id)
    console.log(preguntaFiltrada);

}


//<i  class='bx bx-down-arrow-alt'></i>