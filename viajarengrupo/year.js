let yearActual = new Date().getFullYear();
let year = document.getElementById("year");

let p = document.createElement("p");

p.innerHTML = `<h3 class="yearActual">${yearActual} </h3>`

year.appendChild(p);
console.log(p)