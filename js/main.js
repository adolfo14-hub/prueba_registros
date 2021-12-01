let RegistrosHTML = document.getElementById('RegistrosHTML');
let arrayRegistros; 

async function leeRegistros(nombre) {

    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();

    return registros;

}

async function muestraRegistros(){

    try{

    arrayRegistros = await leeRegistros();
    }
    catch{   
    console.log("Error generado");
    }
    console.log(arrayRegistros);

    arrayRegistros.forEach(function (item, index) {
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.nombre + " -> " + item.apellido + " -> " + item.telefono + " " + "<br>";

    });


   
}


muestraRegistros();

