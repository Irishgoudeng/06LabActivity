
var num1, num2, operator;


function sum() {
    operator = "+"
    num1 = document.getElementById("input").value;
    console.log(num1);
    document.getElementById("input").value = "";
}

function difference() {
    operator = "-"
    num1 = document.getElementById("input").value;
    console.log(num1);
    document.getElementById("input").value = "";
}

function product() {
    operator = "*"
    num1 = document.getElementById("input").value;
    console.log(num1);
    document.getElementById("input").value = "";
}

function quotient() {
    operator = "/"
    num1 = document.getElementById("input").value;
    console.log(num1);
    document.getElementById("input").value = "";
}


function calculate() {

    var result = document.getElementById("result");
    num2 = document.getElementById("input").value;
    console.log(num2);

    if (operator === "+") {

        if(result.innerHTML == "None"){
            result.innerHTML = parseFloat(num1) + parseFloat(num2);
        }
        else{
            result.innerHTML = result.value + parseFloat(num2);
        }
    }

    else if (operator === "-") {
        if(result.innerHTML == "None"){
            result.innerHTML -= parseFloat(num1) - parseFloat(num2);
        }
        else{
            num1 = result.innerHTML;
            result.innerHTML -= parseFloat(num1) - parseFloat(num2);
        }
    }

    else if (operator === "*") {
        if(result.innerHTML == "None"){
            result.innerHTML = parseFloat(num1) * parseFloat(num2);
        }
        else{
            num1 = result.innerHTML;
            result.innerHTML *= parseFloat(num1) + parseFloat(num2);
        }
    }

    else if (operator === "/") {
        if(result.innerHTML == "None"){
            result.innerHTML = parseFloat(num1) / parseFloat(num2);
        }
        else{
            num1 = result.innerHTML;
            result.innerHTML /= parseFloat(num1) / parseFloat(num2);
        }
    }

}

function clear() {
    document.getElementById("input").value = " ";
}