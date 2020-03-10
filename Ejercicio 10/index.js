var originalList = [];
ul = document.getElementById("lista");

addElement = () => {
    var nombre = document.getElementById("first_name").value;
    ul.innerHTML = '';
    originalList.push(nombre);
    console.log(originalList);
    imprimirValores();
}

clearArray = () => {
    originalList = [];
    ul.innerHTML = '';
}

imprimirValores = () => originalList.forEach((element) => {
    var list = document.createElement('li');
    list.innerHTML += element;
    ul.appendChild(list);
})





