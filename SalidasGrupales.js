let viajes = [
    {
        id:"1", 
        nombre:"Cuba", 
        country: "Cuba",
        img:"Imagenes/salidasGrupales/Cuba.png", 
        subtitle:"Animate a vivir la historia que quieras contar. A conocer lugares soñados, a ver nuevos horizontes o volver a donde fuiste feliz!", 
        text:"Un viaje especialmente diseñado para aquellos que buscan algo diferente, pensado hasta en los pequeños detalles. Ideal para los que quieren disfrutar más y mejor, sin apuro, pasar más tiempo en los mejores destinos, en los más lindos hoteles, con la mejor ubicación."},
    {
        id:"2", 
        nombre:"Roma", 
        country: "Italia",
        img:"Imagenes/salidasGrupales/Roma.png", 
        subtitle:"Animate a vivir la historia que quieras contar. A conocer lugares soñados, a ver nuevos horizontes o volver a donde fuiste feliz!", 
        text:"Un viaje especialmente diseñado para aquellos que buscan algo diferente, pensado hasta en los pequeños detalles. Ideal para los que quieren disfrutar más y mejor, sin apuro, pasar más tiempo en los mejores destinos, en los más lindos hoteles, con la mejor ubicación. Los pueblos medievales de la Toscana, las playas de la Costa Amalfitana y el arte y la arquitectura de Roma, nos esperan!"},
    {
        id:"3", 
        nombre:"Madryn", 
        country: "Argentina",
        img:"Imagenes/salidasGrupales/Madryn.png", 
        subtitle:"Animate a vivir la historia que quieras contar. A conocer lugares soñados, a ver nuevos horizontes o volver a donde fuiste feliz!", 
        text:"Un viaje especialmente diseñado para aquellos que buscan algo diferente, pensado hasta en los pequeños detalles. Ideal para los que quieren disfrutar más y mejor, sin apuro, pasar más tiempo en los mejores destinos, en los más lindos hoteles, con la mejor ubicación"},
    {
        id:"4", 
        nombre:"SanMartinDeLosAndes", 
        country: "Argentina",
        img:"Imagenes/salidasGrupales/SanMartinDeLosAndes.png", 
        subtitle:"Animate a vivir la historia que quieras contar. A conocer lugares soñados, a ver nuevos horizontes o volver a donde fuiste feliz!", 
        text:"Un viaje especialmente diseñado para aquellos que buscan algo diferente, pensado hasta en los pequeños detalles. Ideal para los que quieren disfrutar más y mejor, sin apuro, pasar más tiempo en los mejores destinos, en los más lindos hoteles, con la mejor ubicación."},
    {
        id:"5", 
        nombre:"Pumamarca", 
        country:"Argentina",
        img:"Imagenes/salidasGrupales/Pumamarca.png", 
        subtitle:"Animate a vivir la historia que quieras contar. A conocer lugares soñados, a ver nuevos horizontes o volver a donde fuiste feliz!", 
        text:"Un viaje especialmente diseñado para aquellos que buscan algo diferente, pensado hasta en los pequeños detalles. Ideal para los que quieren disfrutar más y mejor, sin apuro, pasar más tiempo en los mejores destinos, en los más lindos hoteles, con la mejor ubicación."}
]

window.addEventListener("DOMContentLoaded", mostrarViajes);
function mostrarViajes(viaje) {
    const contenedor = document.getElementById("salidasGrupales");
    for( const viaje of viajes){
        const div = document.createElement("div");
        div.innerHTML = `<div class="box">
                            <a href="#resultado">
                                <img class="viaje_img" id=${viaje.nombre} src=${viaje.img} alt=${viaje.nombre} onclick="mostrarResultado(id)">
                            </a>
                            <div class="prueba">
                                <h3 class="viaje_title">${viaje.nombre.split(/(?=[A-Z])/).join(" ")}</h3>
                            </div>
                        </div>        
        `;
        contenedor.appendChild(div);
    }
}




function mostrarResultado(e) {
    $('.result').hide();
    const resultado = document.getElementById("resultado");
    let div = document.createElement("div");    
    let viajeFiltrado = viajes.find(item => item.nombre === e);
    div.innerHTML = `
                        <div class="result flex column"><img class="image_bg" src=${viajeFiltrado.img}>
                            <button class="delete-btn" onclick=eliminarResultado()>Volver atras</button>
                            <h3 class="title_result font-secondary">${viajeFiltrado.nombre.split(/(?=[A-Z])/).join(" ")} - ${viajeFiltrado.country}</h3>
                            <div class="flex">
                                    <img src=${viajeFiltrado.img} class="image_result">
                                <div class="flex column text-result">
                                    <p class="p_result p_subtitle font-secondary">${viajeFiltrado.subtitle}</p>

                                    <p class="p_result font-secondary">${viajeFiltrado.text}</p>
                                    <div class="btn-div">
                                        <button class="btn-result font-secondary">Reserva tu lugar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
    resultado.append(div);
}


function eliminarResultado(){
    $('.result').hide();
}



let Search = document.getElementById("search");
Search.addEventListener("click", BuscarResultado);
Search.addEventListener("keypress", BuscarResultado);

function BuscarResultado(){
    $('.result').hide();
    let stringSearch = document.getElementById("inputSearch").value;
    let viajeFilter = viajes.filter(viaje => viaje.nombre.includes(stringSearch) || viaje.country.includes(stringSearch));
    for (let viaje of viajeFilter) {
        let div = document.createElement("div");
        div.innerHTML = `
                            <div class="result flex column"><img class="image_bg" src=${viaje.img}/>
                            <button class="delete-btn" onclick=eliminarResultado()>Volver atras</button>
                            <h3 class="title_result font-secondary">${viaje.nombre} - ${viaje.country}</h3>
                            <div class="flex">
                                <a href="#resultado">
                                    <img src=${viaje.img} class="image_result">
                                </a>
                                <div class="flex column">
                                    <p class="p_result font-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat bibendum nunc volutpat arcu feugiat eget turpis. Ullamcorper quis sed et amet. Ornare neque, nisl, vel aliquet. Velit, fermentum interdum bibendum hac bibendum. Elementum dui risus euismod vestibulum tellus, dui lectus sed.</p>

                                    <p class="p_result font-secondary">Tempor porta ipsum scelerisque urna in. Nulla pulvinar metus, erat felis et eget sem. Quisque nisi, mauris amet velit ipsum, tortor. Maecenas et arcu lectus dolor sed gravida facilisis a ipsum. Consectetur accumsan turpis nisi, vel pretium.</p>
                                    <div class="btn-div">
                                        <button class="btn-result font-secondary">Itinerario</button>
                                        <button class="btn-result font-secondary">Reserva tu lugar</button>
                                    </div>
                                </div>
                            </div>
                        </div>   
        `  
        resultado.append(div)
    }
}
