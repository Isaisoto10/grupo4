let carrusel=document.createElement("div")
carrusel.classList.add("carousel", "slide")
let carruselinner=document.createElement("div")
carruselinner.classList.add("carousel-inner")

let divItemActive=document.createElement("div")
let img=document.createElement("img")
img.src="..."
img.classList.add("d-block","w-100")
img.alt="imagen de juego"
img.appendChild(divItemActive)

let divItem=document.createElement("div")
let img2=document.createElement("img")
img2.src="..."
img2.classList.add("d-block", "w-100")
img2.alt="imagen de juego"
img2.appendChild(divItem)


carrusel.appendChild(carruselinner)
let boton=document.createElement("button")
document.body.appendChild(carrusel)





