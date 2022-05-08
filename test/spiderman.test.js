const spiderman = require("./../app/spiderman")

describe("Unit test for spiderman class", () => {
    test('1) create an spiderman object', () => {

        //aqui escribimos el codigo que queremos usar tal cual
        //quiero poder instanciar un objeto spiderman con esta informacion
        const andrewGarfield = new spiderman("spiderman", 31, "Andrew Garfield",2,"sony")
       
        // validamos que este codigo funcione de la forma esperada
        expect(andrewGarfield.name).toBe("spiderman")
        
    });
  })