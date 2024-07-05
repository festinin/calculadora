class calculator {
    constructor(elmento1, elemento2) {
        this.elmento1 = elemento1;
        this.elemento2 = elemento2;
        this.clear();

    }
    clear() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operand = "";
        this.updateUI();

    }
}