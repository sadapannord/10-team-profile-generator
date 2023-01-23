const Employee = require('../lib/Employee.js');
 
test ("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toEqual("object")
});

test("Can set name via constructor arguments", () => {
    const name = "alice";
    const e = new Employee (name);
    expect (e.name).toEqual(name)
})