import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";

describe('Test in 08-imp-exp.test.js', () => {

    test('getHeroeById debe de retonar un heroe por ID ', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).not.toBe(undefined);
    });

    test('getHeroeById debe de retonar undefined si heroe no existe ', () => {

        const id = 6;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner debe retonar un arreglo con los heroes del owner DC ', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);

        heroes.forEach(heroe => {
            expect(heroe.owner).toBe(owner);
        });
    });

    test('getHeroesByOwner debe retonar un arreglo con los heroes del owner Marvel ', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

        heroes.forEach(heroe => {
            expect(heroe.owner).toBe(owner);
        });
    });

    test('getHeroesByOwner debe retonar un arreglo vacio si el owner no existe ', () => {
        const owner = 'Disney';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(0);
    });
});