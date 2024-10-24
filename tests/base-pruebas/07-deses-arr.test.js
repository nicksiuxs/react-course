import { retornaArreglo } from "../../src/base-pruebas/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.test.js', () => {

    test('Debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toEqual('ABC');
        expect(numbers).toEqual(123);

        expect(typeof letters).toEqual('string');
        expect(typeof numbers).toEqual('number');

        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));
    });
});