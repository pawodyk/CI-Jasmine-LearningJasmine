Calculator = function() {
    this.value = 0;

}

Calculator.prototype.add = function add(number) {
    if (typeof (number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }

}