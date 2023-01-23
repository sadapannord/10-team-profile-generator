const Employee = require('../lib/Engineer.js');
 
test ("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof e).toEqual("object")
});

test("Can set name via constructor arguments", () => {
    const name = "alice";
    const e = new Engineer (name);
    expect (e.name).toEqual(name)
})