//funcion que guarda en el localstorage con la clave h1

function guardarEspecialidad(especialidad) {
    let titulo = "h1";
    let tituloContenido = especialidad;
    localStorage.setItem(titulo, tituloContenido);

}

//acciones que realizan cada boton del index.html

document.getElementById("btngeneral").addEventListener("click", function () {
    guardarEspecialidad("Medicina general");

})

document.getElementById("btnespecialista").addEventListener("click", function () {
    guardarEspecialidad("Medicina especializada");

})

document.getElementById("btnlaboratrio").addEventListener("click", function () {
    guardarEspecialidad("Laboratorio");

})

document.getElementById("btndiagnostica").addEventListener("click", function () {
    guardarEspecialidad("Imágenes diagnósticas");

})
//Cambio del titulo en el html formulario
function cambiarTitulo() {

    var helemento = document.getElementById("especialidad");
    var contenido = localStorage.getItem("h1");
    helemento.innerHTML = contenido;
}

//asignar turno formulario

function asignar() {


    let modal2 = document.getElementById("bodymodal");
    let boton = document.getElementById("boton");
    let especialidad = document.getElementById("especialidad").innerHTML;
    let tipoID = document.getElementById("tipoID").value;
    let numeroID = document.getElementById("numeroID").value;
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let celular = document.getElementById("celular").value;
    let edad = document.getElementById("edad").value;
    let fecha = new Date();
    var aTurno = ""



    if (tipoID == "" || numeroID == "" || nombre == "" || correo == "" || celular == "" || edad == "") { //verificar si se llenaron todos los campos

        modal2.innerHTML = "Debe diligenciar todos los campos";
        boton.innerHTML = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                
        `

    } else { //asignación de turnos segun la especialidad

        if (especialidad == "Medicina general") {
            aTurno = turno("MG");

        } else if (especialidad == "Medicina especializada") {
            aTurno = turno("ME");
        } else if (especialidad == "Laboratorio") {
            aTurno = turno("LB");
        } else if (especialidad == "Imágenes diagnósticas") {
            aTurno = turno("ID");
        }

        //edicion del modal o ventana emergente
        modal2.innerHTML = `
    <h3>` + especialidad + `</h3>    
    <p class="m-0"> ` + tipoID + " :" + numeroID + ` </p>
    <p class = "m-0" >Nombre:  ` + nombre + ` </p>
    <p class = "m-0" > ` + correo + ` </p>
    <p class = "m-0" >Celular:  ` + celular + ` </p>
    <p class = "m-0" >Edad: ` + edad + ` </p>
    <h2 class = "text-center" > Su turno </h2>

    <h1 class="text-center"> ` + aTurno + ` </h1>
    <p class = "m-0" > ` + fecha + ` </p>`;
        boton.innerHTML = `<a class="btn btn-info w-25 p-2" href="./index.html">Terminar</a>
                
        `



    }
}
//Buscador de turnos
function turno(codigo) {
    if (localStorage.getItem(codigo) == null) {
        let nTurno = 1;
        let tturno = codigo + "-" + nTurno
        localStorage.setItem(codigo, nTurno)
        return tturno

    } else {
        let nTurno = parseInt(localStorage.getItem(codigo)) + 1
        let tturno = codigo + "-" + nTurno
        localStorage.setItem(codigo, nTurno)
        return tturno

    }

}