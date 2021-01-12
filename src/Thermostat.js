class Thermostat {
  constructor(){
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  turnUp() {
    if (this.powerSavingMode === true)
      if (this.temperature < 25)
        this.temperature++;
      else
        this.temperature = 25
    else if (this.powerSavingMode === false)
      if (this.temperature < 32)
        this.temperature++;
      else
        this.temperature = 32
  };

  turnDown() {
    if (this.temperature > 10)
      this.temperature--;
    else
      this.temperature = 10;
  };

  togglePowerSavingMode() {
    if (this.powerSavingMode === true)
      return this.powerSavingMode = false
    else if (this.powerSavingMode === false)
      return this.powerSavingMode = true
  };
};