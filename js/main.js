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