const saludar = (nombre, sexo) => {
    var mensaje = (sexo == '1') ? `Bienvenido ${nombre}!` : `Bienvenida ${nombre}!`;
    document.getElementById("mensaje").innerHTML = mensaje;
}