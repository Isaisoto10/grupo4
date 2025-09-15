
let nav = document.createElement("nav")
nav.classList.add("navbar")
nav.classList.add("bg-body-tertiary")

let barrita = document.createElement("div")
barrita.classList.add("container-fluid")

let link = document.createElement("a")
link.classList.add("navbar-brand")
link.textContent = `STEAM`

let formulario = document.createElement("form")
  formulario.classList.add("d-flex")
  formulario.setAttribute("role", "search")

let input = document.createElement("input")
input.classList.add("form")
input.classList.add("control-me-2")  
input.type = "search"
input.placeholder = "Escribe algo..."
input.setAttribute("aria-label","Search")

let button = document.createElement("button")
button.classList.add("btn")
button.classList.add("btn-outline-success")
button.type = "submit"
button.textContent = "Search"

formulario.appendChild(input)
formulario.appendChild(button)

barrita.appendChild(link)
barrita.appendChild(formulario)

nav.appendChild(barrita)

document.body.appendChild(nav)
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





