const fs = require("fs");
const {Intern} = require("../lib/Intern.js");
const { intern } = require("../lib/intern.js");


jest.mock("fs");

test("creates an intern object", () => {
    const intern = new intern(
      { name: "Darlene", id: "111" },
    //   intern
    );
  
    expect(intern.name).toEqual("Darlene");
    expect(intern.id).toBe("111");
  });