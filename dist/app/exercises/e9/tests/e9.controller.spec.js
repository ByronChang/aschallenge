"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const supertest_1 = require("supertest");
const e9_module_1 = require("../e9.module");
describe('E9 Controller (e2e)', () => {
    let app;
    beforeAll(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [e9_module_1.E9Module],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    afterAll(async () => {
        await app.close();
    });
    it('/diagram (GET) - Valid Pressure', async () => {
        const response = await (0, supertest_1.default)(app.getHttpServer()).get('/diagram?pressure=10');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            specific_volume_liquid: 0.0035,
            specific_volume_vapor: 0.0035,
        });
    });
    it('/diagram (GET) - Invalid Pressure', async () => {
        const response = await (0, supertest_1.default)(app.getHttpServer()).get('/diagram?pressure=20');
        expect(response.status).toBe(400);
        expect(response.body.message).toContain('Pressure out of range');
    });
    it('/diagram (GET) - Missing Pressure Parameter', async () => {
        const response = await (0, supertest_1.default)(app.getHttpServer()).get('/diagram');
        expect(response.status).toBe(400);
        expect(response.body.message).toContain('The "pressure" parameter is required.');
    });
    it('/diagram (GET) - Non-numeric Pressure', async () => {
        const response = await (0, supertest_1.default)(app.getHttpServer()).get('/diagram?pressure=invalid');
        expect(response.status).toBe(400);
        expect(response.body.message).toContain('The "pressure" parameter must be a valid number.');
    });
});
//# sourceMappingURL=e9.controller.spec.js.map