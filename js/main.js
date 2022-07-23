let boton = document.getElementById("calculador");
boton.onclick = () => {

    let anch1 = parseInt(document.getElementById('altura').value);
    let altu2 = parseInt(document.getElementById('ancho').value);
    let colorr = document.getElementById("coloreado");
    let colo3 = parseInt(colorr.options[colorr.selectedIndex].value);
    let suma = `total $ ${((anch1 * altu2) * colo3)}`;
    document.getElementById("resultado").value = suma;
    sessionStorage.setItem("Presupuesto Final" , suma);
    sessionStorage.ANCHO = anch1;
    sessionStorage.ALTURA = altu2;
};

class cliente{
    constructor(nombre,correo,mesaje){
        this.nombre = nombre;
        this.correo = correo;
        this.mesaje = mesaje;
        }
}

let boton2 = document.getElementById("enviarInfo");
boton2.addEventListener("click", cargarCliente);

function cargarCliente(){
    let nombre = document.getElementById("nombrecito").value;
    let correo = document.getElementById("mailcito").value;
    let mesaje = document.getElementById("mensajito").value;
    let cliente1 = new cliente(nombre, correo, mesaje);
    console.log(cliente1);
    mostrarCliente(cliente1);

    function mostrarCliente(cliente){
        let formulario = document.getElementById("customer");
        formulario.innerHTML = "";

        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = "<p> gracias"

        nuevoContenido.className = "col-lg-6";
        formulario.appendChild(nuevoContenido);
    
    }
}