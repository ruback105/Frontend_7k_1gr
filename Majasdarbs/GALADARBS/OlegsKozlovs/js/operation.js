class Operation {
    constructor() {
      this.init();
    }
    init() {
      this.operand1 = 0;
      this.operand2 = 0;
      this.action = "";
      this.isNewNumber = true;
      this.actionOnEquals = "";
    }
    getOperand1() {
      return this.operand1;
    }
    getOperand2() {
      return this.operand2;
    }
    getAction() {
      return this.action;
    }
    getIsNewNumber() {
      return this.isNewNumber;
    }
    getActionOnEquals() {
      return this.actionOnEquals;
    }
    setOperand1(value) {
      this.operand1 = value;
    }
    setOperand2(value) {
      this.operand2 = value;
    }
    setAction(value) {
      this.action = value;
    }
    setIsNewNumber(value) {
      this.isNewNumber = value;
    }
    setActionOnEquals(value) {
      this.actionOnEquals = value;
    }
    calculate() {
      try {
        // Calculation result is multiplied by 1 for trailed zeros suppression
        if (this.action === "+") {
          return (parseFloat(this.operand1) + parseFloat(this.operand2)).toFixed(10) * 1;
        }
        if (this.action === "-") {
          return (parseFloat(this.operand1) - parseFloat(this.operand2)).toFixed(10) * 1;
        }
        if (this.action === "*") {
          return (parseFloat(this.operand1) * parseFloat(this.operand2)).toFixed(10) * 1;
        }
        if (this.action === "/") {
          return (parseFloat(this.operand1) / parseFloat(this.operand2)).toFixed(10) * 1;
        }
      } catch (error) {
        return "Error";
      }
    }
}