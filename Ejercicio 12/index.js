var myVar;

const myFunction = () => {
  myVar = setTimeout(() => alert("Hello World!") , 3000);
}

const myStopFunction = () => {
  clearTimeout(myVar);
}

myFunction();