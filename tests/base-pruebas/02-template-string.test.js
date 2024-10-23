import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('Pruebas en el archivo 02-template-string.test.js', () => {

    test('Prueba en el método getSaludo', () => {
        const name = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
})