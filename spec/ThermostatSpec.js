describe('Thermostat', function() {
  it("initializes with 20 degrees", function() {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("'up'", function() {
    it("turns up the temperature", function() {
      let thermostat = new Thermostat();
      thermostat.turnUp();
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
});