const Employee = require('../lib/Intern.js');
 
test ("Can instantiate Employee instance", () => {
    const e = new Intern();
    expect(typeof e).toEqual("object")
});

test("Can set name via constructor arguments", () => {
    const name = "alice";
    const e = new Intern (name);
    expect (e.name).toEqual(name)
})