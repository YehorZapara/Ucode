let input = document.querySelector('.input');
let power = "";

function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent = input.textContent + num;
    } else input.textContent = input.textContent + num;
}

function clean() {
    input.textContent = "0";
}

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}

function percent() {
    input.textContent = eval(input.textContent) / 100;
}

function plusmn() {
    input.textContent = eval(input.textContent) * (-1);
}

function operation(name) {
    if (name == "sqrt")
    input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }

}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
    input.textContent = factorial(+eval(input.textContent));
}

function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += Math.PI.toFixed(8);
    if (name == "e")
        input.textContent += Math.E.toFixed(8);
}