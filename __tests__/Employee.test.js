const fs = require("fs");
const {Employee} = require("../lib/Employee.js");
const { employee } = require("../lib/Employee.js");


jest.mock("fs");

test("creates an Employee object", () => {
    const employee = new Employee(
      { name: "Darlene", id: "111" },
    //   employee
    );
  
    expect(Employee.name).toEqual("Darlene");
    expect(Employee.id).toBe("111");
  });