var array = [];
var array2 = [];
var array3 = [];


const addElement = (id) => {
    var textBox = document.getElementById(`text${id}`);
    var num = parseInt(textBox.value);
    if(!isNaN(num)) {
        if(id == '1') {
            array.push(num);
            document.getElementById(`buildingArray${id}`).innerHTML = `[${array}]`;
        }
        else if(id == '2') {
            array2.push(num);
            document.getElementById(`buildingArray${id}`).innerHTML = `[${array2}]`;
        }
        else {
            array3.push(num);
            document.getElementById(`buildingArray${id}`).innerHTML = `[${array3}]`;
        }
        
    }
    textBox.value = "";
}

const map = (id) => {
    var arrayForMap = array.map(e => Math.pow(e, 3));
    printResult(id, arrayForMap);
}

const filter = (id) => {
    var arrayForFilter = array2.filter(e => e > 2);
    printResult(id, arrayForFilter);
}

const reduce = (id) => {
    var resultForReduce = array3.reduce((a, b) => a - b);
    printResult(id, resultForReduce);
}

const printResult = (id, arrayResult) => {
    var tag = document.getElementById(`result${id}`);
    tag.innerHTML = `result: [${arrayResult}]`;
}