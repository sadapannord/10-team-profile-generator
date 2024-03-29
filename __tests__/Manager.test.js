const Manager = require('../lib/Manager.js');
 
test ("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof e).toEqual("object")
});

test("Can set name via constructor arguments", () => {
    const name = "alice";
    const e = new Manager (name);
    expect (e.name).toEqual(name)
})