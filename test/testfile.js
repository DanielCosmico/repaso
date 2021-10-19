const sumar = require("../app");
const assert = require("assert");
//Asserts = afirmacion
describe("Probar la suma de dos numeros", ()=>{
    //Afirmamos que 5+7=12
    it("Cinco mas siete son 12", ()=>{
        assert.equal(12, sumar(5,7));
    });

    //Afirmamos que 5+7 != 57
    it("Cinco mas siete no son 57", ()=>{
        assert.notEqual("57",sumar(5,7));
    });
});

