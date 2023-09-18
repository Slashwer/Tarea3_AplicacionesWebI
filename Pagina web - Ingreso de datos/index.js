const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", Imprimir);

function Imprimir(e){
    e.preventDefault();

    const Nombre = document.querySelector("#Nombre").value
    const Correo = document.querySelector("#Correo").value
    const Domicilio = document.querySelector("#Domicilio").value
    const Numero = document.querySelector("#Numero").value 
    const Pro = document.querySelector("#Pro").value
    const Notas = document.querySelector("#Notas").value

    window.alert("Dezlice hacia abajo");
    document.querySelector('p').innerHTML = `Datos ingresados: <br/><br/>
    Nombre: ${Nombre}<br/><br/>
    Correo: ${Correo}<br/><br/>
    Domicilio: ${Domicilio}<br/><br/>
    Numero: ${Numero}<br/><br/>
    Profesion: ${Pro}<br/><br/>
    Anotaciones: ${Notas}<br/>`;
}