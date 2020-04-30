let edad = prompt('Escribe tu edad');

const revisarEdad = (edadX) => {
    let msg;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isNaN(edadX)) reject('digito incorrecto');
            msg = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
            resolve(msg);
        }, 4000)
    })
}

revisarEdad(edad)
    .then(msg => {
        alert(msg);
    })
    .catch(error => {
        alert(error);
    })

