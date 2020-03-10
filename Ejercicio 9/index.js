var reverse = () => {
    var originalText = document.getElementById("text").value;
    var res = originalText.split("").reverse().join("");
    document.getElementById("res").innerHTML = res;
}