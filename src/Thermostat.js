class Thermostat {
  constructor(){
    this.temperature = 20;
  };

  turnUp() {
    this.temperature++;
  }

  turnDown() {
    this.temperature--;
  }
};