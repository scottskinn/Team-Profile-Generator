const fs = require("fs");
const {Manager} = require("../lib/Manager.js");
const { manager } = require("../lib/manager.js");


jest.mock("fs");

test("creates an manager object", () => {
    const manager = new manager(
      { name: "Darlene", id: "111" },
    //   manager
    );
  
    expect(manager.name).toEqual("Darlene");
    expect(manager.id).toBe("111");
  });