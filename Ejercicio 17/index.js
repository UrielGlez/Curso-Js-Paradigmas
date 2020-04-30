const pagarComida = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.race([paypal, tarjeta]).then(proveedorPago => {
                resolve(resolve({ done: true, proveedorPago, clienteId: 45613 }))
            })
        }, 3000)
    })
}


const paypal = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Paypal")
    }, 12000)
})

const tarjeta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Tarjeta")
    }, 5000)
})

const enviarComida = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.race([repartirdor1, repartirdor2, repartirdor3]).then(repartirdor => {
                resolve(resolve(repartirdor))
            })
        }, 10000)
    })
}

const repartirdor1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ repartidorId: 4561, distancia: 10 })
    }, 10000)
})

const repartirdor2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ repartidorId: 4562, distancia: 9 })
    }, 9000)
})

const repartirdor3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ repartidorId: 4563, distancia: 9.5 })
    }, 9500)
})

const pedirComida = async () => {
    const pagar = pagarComida();
    const enviar = enviarComida();
    const proceso = Promise.all([pagar, enviar]);

    return proceso;
}

pedirComida()
    .then(proceso => {
        console.log(proceso);
    })
    .catch(error => {
        console.error(error);
    })