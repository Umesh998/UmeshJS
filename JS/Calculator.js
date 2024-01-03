function addition() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of the two numbers is: " + sum;
}

function multiplication() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let product = num1 * num2;
    document.getElementById("result").innerHTML = "The product of the two numbers is: " + product;
}
function division() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num2 == 0) {
        document.getElementById("result").innerHTML = "Error: Division by zero is not allowed.";
    } else {
        var quotient = num1 / num2;
        document.getElementById("result").innerHTML = "The quotient of the two numbers is: " + quotient;
    }
}

function subtraction() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let difference = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of the two numbers is: " + difference;
}