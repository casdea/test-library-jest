let app = require("../app");

describe("Operacoes Matematicas", () => {
    test("Deve retornar 10 ao somar 5 + 5", () => {
        let resultado = app.soma(5, 5);
    
        expect(resultado).toEqual(10);
    })
    
    test("Deve retornar 10 ao multiplicar 5 x 2", () => {
        let resultado = app.multiplica(5, 2);
    
        expect(resultado).toEqual(10);
    })
})

