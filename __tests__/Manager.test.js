const Employee = require('../lib/Manager.js');
 
test ("Can instantiate Employee instance", () => {
    const e = new Manager();
    expect(typeof e).toEqual("object")
});

test("Can set name via constructor arguments", () => {
    const name = "alice";
    const e = new Manager (name);
    expect (e.name).toEqual(name)
})