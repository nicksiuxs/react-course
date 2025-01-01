import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('Test in 09-promesas.js', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe.id).toBe(id);
            done();
        })
    });

    test('getHeroeByIdAsync debe obtener un erro si heroe no existe', (done) => {

        const id = 132;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});
