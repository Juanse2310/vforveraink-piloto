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

//JS para Market place
let productos = [
    {
        id: 1,
        nombre:"Producto 1",
        precio: 950,
        imagen: "./imagenes/img1.jpeg",
    },
    {
        id: 2,
        nombre:"Producto 2",
        precio: 850,
        imagen: "./imagenes/img2.jpg",
    },
    {
        id: 3,
        nombre:"Producto 3",
        precio: 750,
        imagen: "./imagenes/img3.jpeg",
    },
    {
        id: 4,
        nombre:"Producto 4",
        precio: 650,
        imagen: "./imagenes/img4.jpg",
    },
    {
        id: 5,
        nombre:"Producto 5",
        precio: 550,
        imagen: "./imagenes/img5.jpeg",
    },
    {
        id: 6,
        nombre:"Producto 6",
        precio: 550,
        imagen: "./imagenes/img6.jpeg",
    },
    {
        id:7,
        nombre:"Producto 7",
        precio: 450,
        imagen: "./imagenes/img7.png",
    },
    {
        id:8,
        nombre:"Producto 8",
        precio: 350,
        imagen: "./imagenes/img8.jpg",
    }
];

const contenedor = document.getElementById("container");
productos.forEach((producto,indice)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3")
    let html =`<img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text"> $ ${producto.precio}</p>
        <a href="#" class="btn btn-info" onClick="agregarAlCarrito(${indice})">Comprar</a>
    </div>`
    card.innerHTML= html;
    contenedor.appendChild(card);

});

let modalCarrito = document.getElementById("cart");
let totalMP = 0
const dibujarCarrito = ()=>{
    modalCarrito.className= "cart";
    modalCarrito.innerHTML="";
    if(cart.length > 0){
        cart.forEach((producto, indice) => {
            totalMP = totalMP + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito";
            carritoContainer.innerHTML=`
            <img class="car-img" src="${producto.imagen}"/>
            <div class="product-details">
            ${producto.nombre}
            </div>
            <div class="product-details"> Cantidad:${producto.cantidad}</div>
            <div class="product-details"> Precio $ ${producto.precio}</div>
            <div class="product-details"> Subtotal $ ${producto.precio * producto.cantidad} </div>
            <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
            `;
            modalCarrito.appendChild(carritoContainer);
        });
       
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${totalMP}</div>
    <button class= "btn btn-info finalizar" id="finalizar" onClick= "finalizarCompra()"> FINALIZAR COMPRA </button>`;
    modalCarrito.appendChild(totalContainer);
} else{
    modalCarrito.classList.remove("cart");
}
};
    
let cart = [];

const agregarAlCarrito=(indice) => {
const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
    return elemento.id === productos[indice].id;
});
if (indiceEncontradoCarrito === -1) {
    const productoAgregar = productos[indice];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    actualizarStorage(cart);
    dibujarCarrito();
} else {
    cart[indiceEncontradoCarrito].cantidad += 1;
    actualizarStorage(cart);
    dibujarCarrito();
}
};

const removeProduct = (indice)=>{
    cart.splice(indice,1);
    actualizarStorage(cart);
    dibujarCarrito();
}

const finalizarCompra = () => {
    const totalMP = document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> LA COMPRA YA CASI ES TUYO </p>
    <div class="datos-cliente">
    <p class=datos-parrafo"> Complete el formulario  bla bla </p>
    <button class="btn btn-info formulario" id="formulario" onClick="dibujarFormu()">FORMULARIO </button>
    </div)`
    modalCarrito.innerHTML= compraFinalizada;
};

const dibujarFormu = () => {
    modalCarrito.innerHTML = "";
    const formulario = `
    <div class="container px-5 my-2 ">
           <h2 class="fw-bolder" id="tituloServicios">Contactanos!</h2>
            <div class="row gx-5 justify-content-center" >
                <div class="col-lg-6" id="customer">
                   <form id="contactForm" style="color: rgb(255,81,0)" >
                       
                        <div class="form mb-3">

                            <label for="name">Nombre:</label>
                            <input class="form-control" id="nombrecito" type="text" placeholder="Juan Perez..." />
                        </div>    
                        
                        <div class="form  mb-3">
                            <label for="email">Email:</label>
                            <input class="form-control" id="mailcito" type="email" placeholder="Juan.Perez@example.com" />
                            
                        </div>
                                                                          
                        <div class="d-grid">
                            <button onClick="mostrarMensaje()" class="btn btn-info mt-2 mb-2 btn-outline-warning" id="" type="button">CONFIRMAR</button></div>
                    </form>
                </div>
            </div>
        </div>

    `;
    modalCarrito.innerHTML = formulario;
};

const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombrecito").value;
    const domicilioCliente = document.getElementById("mailcito").value;
    modalCarrito.innerHTML = "";
    let mensaje = `<div class = "mensaje-final"> gracias ${nombreCliente} por su compra. recibira en ${domicilioCliente} </div>`
    modalCarrito.innerHTML = mensaje;
};

const actualizarStorage = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))

}