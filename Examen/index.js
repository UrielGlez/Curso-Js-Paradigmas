var button;
var image;
var initTime;
var finalTime;
var finalCost;
const pricePerHour = 50;

const buyProduct = (id, idProduct) => {
    initState(id);
    var product = document.getElementById(`product${idProduct}`).innerText;
    var coste = finalCost.innerText;
    product = product.substr(1, product.length);

    finalCost.innerText = `$${updatePrice(product, coste)}`;
}

const updatePrice = (xPrice, totalCoste) => {
    totalCoste = totalCoste.substr(1, totalCoste.length);
    var finalPrice = parseFloat(xPrice) + parseFloat(totalCoste);
    return finalPrice.toFixed(2); 
}

const start = (id) => {
    initState(id);
    var activeCard = (button.innerText == "START");

    if (activeCard) {
        activeStyleChanges();
        timeInicial = new Date();
        initTime.innerHTML = getActualTime();
    } else {
        inactiveStyleChanges();
        finalTime.innerHTML = getActualTime();
        finalCost.innerHTML = `$${updatePrice(getCost(), finalCost.innerText)}`;  //`$${getCost()}`;   
    }
}

const initState = (id) => {
    button = document.getElementById(`btnT${id}`);
    image = document.getElementById(`imageT${id}`);
    initTime = document.getElementById(`startTimeT${id}`);
    finalTime = document.getElementById(`finalTimeT${id}`);
    finalCost = document.getElementById(`finalCostT${id}`);
    liveTime = document.getElementById(`liveTimeT${id}`);
}

const getCost = () => {
    var date1 = getDateOf(initTime);
    var date2 = getDateOf(finalTime);

    var difSec = 0;
    difSec = (date2.getTime() - date1.getTime()) / 1000;
    var cost = (difSec * pricePerHour) / 3600;

    return cost;
}

const getDateOf = (xTime) => {
    var d1 = xTime.innerText;
    var avoidPmOrAm = d1.indexOf(" ");
    d1 = d1.substr(0, avoidPmOrAm);
    var arr = d1.split(":");

    var date = new Date();
    date.setHours(arr[0]);
    date.setMinutes(arr[1]);
    date.setSeconds(arr[2]);

    return date;
}

const inactiveStyleChanges = () => {
    button.innerText = "START";
    button.style.color = "rgb(51, 255, 0)";
    image.src = "src/mesaOn2.jpg";
}

const activeStyleChanges = () => {
    button.innerText = "STOP";
    button.style.color = "red";
    image.src = "src/mesaOff.jpg";
    finalTime.innerHTML = "---";
    finalCost.innerHTML = "$0";
}

const stopLiveTimeScreen = () => {
    if (isMarch == true) {
        clearInterval(controller);
        isMarch = false;
    }
}

const startLiveTimeScreen = () => {
    if (isMarch == false) {
        timeInicial = new Date();
        controller = setInterval(cronometro, 1000);
        isMarch = true;
    }
}

const getActualTime = () => {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    amOrpm = (hour >= 12) ? 'P.M' : 'A.M';
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;

    return `${hour}:${minute}:${second} ${amOrpm}`;
}