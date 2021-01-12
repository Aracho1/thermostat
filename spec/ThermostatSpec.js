describe('Thermostat', function() {
  it("initializes with 20 degrees", function() {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("'up'", function() {
    it("turns up the temperature", function() {
      let thermostat = new Thermostat();
      console.log(thermostat.temperature)
      thermostat.turnUp();
      console.log(thermostat.temperature)
      expect(thermostat.temperature).toEqual(21);
    })
  })

  describe("'down'", function() {
    it("turns down the temperature", function() {
      let thermostat = new Thermostat();
      thermostat.turnDown();
      expect(thermostat.temperature).toEqual(19);
    })
  })

  describe("'minimum temperature'", function() {
    it("has a minimum temperature of 10", function() {
      let thermostat = new Thermostat();
      var times = 10;
      for(var i=0; i <= 10; i++){
        thermostat.turnDown();
      }
      expect(thermostat.temperature).toEqual(10);
    })
  })
  
  describe("'Maximum temperature'", function() {
    it("has a max temperature of 25 with PSM on", function() {
      let thermostat = new Thermostat();
      var times = 5;
      for(var i=0; i <= times; i++){
        thermostat.turnUp();
      }
      expect(thermostat.temperature).toEqual(25);
    })
  })

  describe("'Maximum temperature'", function() {
    it("has a max temperature of 32 with PSM off", function() {
      let thermostat = new Thermostat();
      thermostat.togglePowerSavingMode()
      var times = 12;
      for(var i=0; i <= times; i++){
        thermostat.turnUp();
      }
      expect(thermostat.temperature).toEqual(32);
    })
  })

});