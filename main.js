// Navegador - Isaias
let navegador = document.querySelector("#navegacion")
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
input.setAttribute("aria-label", "Search")

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

navegador.appendChild(nav)
// Fin Navegador

// Tarjetas - Pedro
class Juego {
    constructor(nombre, clasificacion, marca, precio, portada) {
        this.nombre = nombre
        this.clasificacion = clasificacion
        this.marca = marca
        this.precio = precio
        this.portada = portada
    }
    agregarProducto(producto) {
        carrito.push(producto)
    }

}

let listaJuegos = [
    new Juego("nose", 10, "ATP", 10000, "https://tse2.mm.bing.net/th/id/OIP.jK4f74zzSSSsvp0ZIbqZeAHaJl?pid=Api&P=0&h=180"),
    new Juego("Minecraft", 10, "pg15", 100, "https://i.pinimg.com/736x/f5/60/cc/f560cc7d9a907ae6e4bc5d914a844889.jpg"),
    new Juego("Call of Duty", 10, "pg15", 150, "https://tse3.mm.bing.net/th/id/OIP.VC85W4rilsr2_xqC_9DdKAHaJU?pid=Api&P=0&h=180")
]
let carrito = []

let main = document.getElementById("main")
let fila = document.createElement("div");
fila.classList.add("row");
listaJuegos.forEach(x => {
    let columna = document.createElement("div")
    columna.classList.add("col-md-4")
    let card = document.createElement("div")
    card.classList.add("card")
    //進撃 の 巨人
    //se crea la imagen 
    let img = document.createElement("img")
    img.src = x.portada
    img.alt = "imagen"
    img.classList.add("card-img-top")
    img.style.height = "200px"
    card.appendChild(img)

    //Se crea el cuerpo de la carta
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    //se va agregando la informacion
    let titulo = document.createElement("h4")
    titulo.textContent = `${x.nombre} - $${x.precio}`
    titulo.classList.add("card-title")


    cardBody.appendChild(titulo)
    let p1 = document.createElement("p")
    p1.classList.add("card-text")
    p1.textContent = `${x.marca}`
    cardBody.appendChild(p1)

    //Se crea el boton para agregar al carrito
    let botonAgregar = document.createElement("button")
    botonAgregar.classList.add("btn", "btn-primary")
    botonAgregar.textContent = "Agregar"
    botonAgregar.style.borderRadius = "15%"
    cardBody.appendChild(botonAgregar)

    card.appendChild(cardBody)

    columna.appendChild(card)
    fila.appendChild(columna)

    //se hace que el boton agregue el producto al arreglo carrito
    botonAgregar.addEventListener("click", function () {
        x.agregarProducto(x)
        console.log(carrito)
    })
})


main.appendChild(fila)

// Fin Tarjetasclass ñJuego {


let subtotal = document.querySelector("#subtotal")
fila.classList.add("row")
let tbody = document.querySelector("#tbody")

listaJuegos.forEach(x => {
    let columna = document.createElement("div")
    columna.classList.add("col-md-4")

    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement("img")
    img.src = x.portada
    img.alt = "imagen"
    img.classList.add("card-img-top")
    img.style.height = "200px"
    card.appendChild(img)

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let titulo = document.createElement("h4")
    titulo.textContent = `${x.nombre} - $${x.precio}`
    titulo.classList.add("card-title")
    cardBody.appendChild(titulo)

    let p1 = document.createElement("p")
    p1.classList.add("card-text")
    p1.textContent = `${x.marca}`
    cardBody.appendChild(p1)

    let botonAgregar = document.createElement("button")
    botonAgregar.classList.add("btn", "btn-primary")
    botonAgregar.textContent = "Agregar"
    botonAgregar.style.borderRadius = "15%"
    cardBody.appendChild(botonAgregar)

    card.appendChild(cardBody)
    columna.appendChild(card)
    fila.appendChild(columna)

    botonAgregar.addEventListener("click", function () {
        x.agregarProducto(x)
        console.log(carrito)
        mostrar()

    })
})

function mostrar() {
    tbody.innerHTML = ""

    carrito.forEach(p => {

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = p.nombre
        tr.appendChild(td1)

        let td2 = document.createElement("td")
        td2.textContent = `${p.clasificacion}`
        tr.appendChild(td2)

        let td3 = document.createElement("td")
        td3.textContent = p.marca
        tr.appendChild(td3)

        let td4 = document.createElement("td")
        td4.textContent = `$${p.precio}`
        tr.appendChild(td4)

        let td5 = document.createElement("td")
        let botoneliminar = document.createElement("button")
        botoneliminar.classList.add("btn", "btn-danger")
        let icono = document.createElement("i")
        icono.classList.add("bi", "bi-x-square")
        botoneliminar.appendChild(icono)
        botoneliminar.addEventListener("click", function () {
            p.eliminarprod(p)
            console.log(carrito)
            mostrar()
        })
        td5.appendChild(botoneliminar)
        tr.appendChild(td5)

        tbody.appendChild(tr)

    })
    let acum = 0
    carrito.forEach(p => acum += p.precio)
    subtotal.textContent = "Subtotal: $" + acum
}

main.appendChild(fila)
