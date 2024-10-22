
describe('Pruebas en el archivo demo.test.js', () => {

    test('Esta prueba no debe de fallar', () => {
        // 1. Inicializacion
        const message = 'Hola Mundo';
        // 2. estímulo
        const message2 = message.trim();
        // 3. Observar el comportamiento.. esperado

        expect(message).toBe(message2);
    });

});