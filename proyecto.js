


function filtro(propiedad, valor) {
    let retorno
    if (propiedad === "todo") {
        retorno = listaProductos

    }
    else if (propiedad == "nombre") {
        retorno = listaProductos.filter(x => x.nombre == valor)

    }
    else if (propiedad == "marca") {
        retorno = listaProductos.filter(x => x.marca == valor)
        
    }
    else if (propiedad == "precio") {
        val = parseFloat(valor)
        retorno = listaProductos.filter(x => x.precio >= 0 && x.precio <= val)
    } else if (propiedad == "clasificacion")
        retorno = listaProductos.filter(x => x.clasificacion == valor)
        if(clasificacion=== "ATP"){
            retorno = retorno.filter(x => x.clasificacion == "ATP" || x.clasificacion == "+7")
        }else{
            if(clasificacion ==="pg15"){
                retorno = retorno.filter(x => x.clasificacion == "pg15" || x.clasificacion == "+15" || x.clasificacion == "+15")
        }else{
            if(clasificacion==="pg18"){
                retorno = retorno.filter(x => x.clasificacion == "pg18" || x.clasificacion == "+18" || x.clasificacion == "+18")
        }
    }
    return retorno
}
}
  




