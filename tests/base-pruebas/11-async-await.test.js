import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await";

describe('Test in 11-async-await.test.js', () => {

    test('getImagen debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });

});