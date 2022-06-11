let viajes = [
    {id:"1", nombre:"Cuba", img:"./imagenes/salidasGrupales/Cuba.png", grid: true},
    {id:"2", nombre:"Italia", img:"./imagenes/salidasGrupales/Roma.png"},
    {id:"3", nombre:"Madryn", img:"./imagenes/salidasGrupales/Madryn.png"},
    {id:"4", nombre:"SanMartindelosAndes", img:"./imagenes/salidasGrupales/SanMartinDeLosAndes.png"},
    {id:"5", nombre:"Pumamarca", img:"./imagenes/salidasGrupales/Pumamarca.png"}
]

window.addEventListener("DOMContentLoaded", mostrarViajes);

function mostrarViajes(e) {
    const contenedor = document.getElementById("salidasGrupales");

    for( const viaje of viajes){
        const div = document.createElement("div");
        div.innerHTML = `<div class="box">
                            <img class="viaje_img" id=${viaje.nombre} src=${viaje.img} alt=${viaje.nombre} onclick="mostrarResultado(id)">
                            <div class="prueba">
                                <h3 class="viaje_title">${viaje.nombre}</h3>
                            </div>
                        </div>        
        `;
        contenedor.appendChild(div);
    }
}


function mostrarResultado(e) {
    $('.result').hide();
    let resultado = document.getElementById("resultado");
    let div = document.createElement("div");    
    let viajeFiltrado = viajes.find(item => item.nombre === e);
    div.innerHTML = `
                        <div class="result flex column">
                            <h3 class="title_result font-secondary">${viajeFiltrado.nombre}</h3>
                            <div class="flex">
                                <img src=${viajeFiltrado.img} class="image_result">
                                <div class="flex column">
                                    <p class="p_result font-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum nunc volutpat arcu feugiat eget turpis. Ullamcorper quis sed et amet. Ornare neque, nisl, vel aliquet. Velit, fermentum interdum bibendum hac bibendum. Elementum dui risus euismod vestibulum tellus, dui lectus sed.</p>

                                    <p class="p_result font-secondary">Tempor porta ipsum scelerisque urna in. Nulla pulvinar metus, erat felis et eget sem. Quisque nisi, mauris amet velit ipsum, tortor. Maecenas et arcu lectus dolor sed gravida facilisis a ipsum. Consectetur accumsan turpis nisi, vel pretium.</p>
                                </div>
                            </div>
                        </div>
                    `
    resultado.append(div);
}
