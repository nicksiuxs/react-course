import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones.test.js", () => {
    test("getUser debe de retornar un objeto", () => {
        const testUser = { uid: "ABC123", username: "El_Papi1502" };

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test("getUsuarioActivo debe de retornar un objeto e", () => {

        const name = "Juan";
        const testUser = { uid: "ABC567", username: name };

        const user = getUsuarioActivo(name);

        expect(testUser).toEqual(user);

    });
});
