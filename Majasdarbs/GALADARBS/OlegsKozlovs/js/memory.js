class Memory {
    constructor() {
      this.init();
    }
    init() {
      this.memoryValue = 0;
    }
    getMemoryValue() {
      return this.memoryValue;
    }
    setMemoryValue(value) {
      this.memoryValue = value;
    }
    addToMemoryValue(value) {
      try {
        // Calculation result is multiplied by 1 for trailed zeros suppression
        this.memoryValue = (
          parseFloat(this.memoryValue) + parseFloat(value)
        ).toFixed(10) * 1;   
      } catch (error) {
        alert("Error occurred adding value to the memory value. Memory value is set to 0.");
        this.init();
      }
    }
    subtractFromMemoryValue(value) {
      try {
        // Calculation result is multiplied by 1 for trailed zeros suppression
        this.memoryValue = (
          parseFloat(this.memoryValue) - parseFloat(value)
        ).toFixed(10) * 1;     
      } catch (error) {
        alert("Error occurred subtracting value from the memory value. Memory value is set to 0.");
        this.init();
      }
    }
    displayMemoryValue() {
      alert(`Value in memory is: ${this.memoryValue}`);
    }
}