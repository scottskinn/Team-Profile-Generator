const fs = require("fs");
const {Engineer} = require("../lib/engineer.js");
const { engineer } = require("../lib/engineer.js");


jest.mock("fs");

test("creates an engineer object", () => {
    const engineer = new engineer(
      { name: "Darlene", id: "111" },
    //   engineer
    );
  
    expect(engineer.name).toEqual("Darlene");
    expect(engineer.id).toBe("111");
  });