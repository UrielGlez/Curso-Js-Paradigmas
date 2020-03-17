const hacerTarea = (tarea, callback) => {
    setTimeout(() => {
        callback();
    }, 3000);
    console.log(`Haciendo la tarea ${tarea}`)
}

hacerTarea("base de datos", () => {
    console.log("salir de antro");
})


