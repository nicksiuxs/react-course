import { usContext } from '../../src/base-pruebas/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj.test.js', () => {

    test('should return an object with the correct structure and values', () => {
        const user = {
            clave: 'Ironman',
            nombre: 'Tony Stark',
            edad: 45
        };

        const context = usContext(user);

        expect(context).toEqual({
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});