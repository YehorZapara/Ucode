function Calculator() {
    this.result = 0;
    this.init = (i) => {
        this.result = i;
        return this;
    };

    this.add = (i) => {
        this.result += i;
        return this;
    };

    this.sub = (i) => {
        this.result -= i;
        return this;
    };

    this.mul = (i) => {
        this.result *= i;
        return this;
    };

    this.div = (i) => {
        this.result /= i;
        return this;
    };

    this.alert = () => {
        setTimeout(function () { alert(calc.result) }, 5000);
    }
}




const calc = new Calculator();

console.log(
    calc
        .init(2)
        .add(2)
        .mul(3)
        .div(4)
        .sub(2).result // 1
);

calc.alert();
