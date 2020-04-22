const limpiarCuarto = () => {
    return new Promise((resolve, reject) => {
        console.log('1. Limpiando Cuarto...')
        setTimeout(function() { 
            resolve(hacerTarea());
        }, 2500);
    });
}

const hacerTarea = () => {
    return new Promise((resolve, reject) => {
        console.log('2. Haciendo Tarea...');
        setTimeout(function() { 
            resolve(salirDeAntro());
        }, 4000);
    });
}

const salirDeAntro = () => {
    return new Promise((resolve, reject) => {
        console.log('3. Saliendo de Antro...');
        setTimeout(function() { 
            resolve('FIN.');
            reject('algo salió mal');
        }, 2000);
    });
}

limpiarCuarto()
    .then((res) => {
        return res;
    }).then((res) => {
        return res;
    }).then((res) => {
        console.log(res);
    }).catch((rej) => {
        console.log(rej);
    });