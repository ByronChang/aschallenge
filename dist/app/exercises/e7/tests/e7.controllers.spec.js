"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const supertest_1 = require("supertest");
const e7_module_1 = require("../e7.module");
const system_manager_service_1 = require("../services/system-manager.service");
describe('E7 Controllers', () => {
    let app;
    let systemManagerService;
    beforeAll(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [e7_module_1.E7Module],
        }).compile();
        app = moduleFixture.createNestApplication();
        systemManagerService = moduleFixture.get(system_manager_service_1.SystemManagerService);
        await app.init();
    });
    afterAll(async () => {
        await app.close();
    });
    describe('StatusController', () => {
        it('should return the damaged system', async () => {
            jest.spyOn(systemManagerService, 'getDamagedSystem').mockReturnValue('navigation');
            const response = await (0, supertest_1.default)(app.getHttpServer()).get('/status');
            const resp = JSON.parse(JSON.stringify(response === null || response === void 0 ? void 0 : response.text));
            expect(response === null || response === void 0 ? void 0 : response.status).toBe(200);
            expect(resp).toEqual("{\"damaged_system\":\"navigation\"}");
        });
        it('should throw an error if no damaged system is found', async () => {
            jest.spyOn(systemManagerService, 'getDamagedSystem').mockReturnValue(null);
            const response = await (0, supertest_1.default)(app.getHttpServer()).get('/status');
            expect(response.status).toBe(500);
            expect(response.body.message).toBe('No damaged system found.');
        });
    });
    describe('RepairBayController', () => {
        it('should return the correct HTML for a valid system', async () => {
            jest.spyOn(systemManagerService, 'getAllSystemsData').mockReturnValue({
                navigation: 'NAV-01',
                communications: 'COM-02',
                life_support: 'LIFE-03',
                engines: 'ENG-04',
                deflector_shield: 'SHLD-05',
            });
            jest.spyOn(systemManagerService, 'getSystemCode').mockReturnValue('NAV-01');
            const response = await (0, supertest_1.default)(app.getHttpServer())
                .get('/repair-bay')
                .query({ damaged_system: 'navigation' });
            expect(response === null || response === void 0 ? void 0 : response.status).toBe(200);
            expect(response === null || response === void 0 ? void 0 : response.text).toContain('<div class="anchor-point">NAV-01</div>');
        });
        it('should throw an error for an invalid system', async () => {
            jest.spyOn(systemManagerService, 'getAllSystemsData').mockReturnValue({
                navigation: 'NAV-01',
                communications: 'COM-02',
                life_support: 'LIFE-03',
                engines: 'ENG-04',
                deflector_shield: 'SHLD-05',
            });
            const response = await (0, supertest_1.default)(app.getHttpServer())
                .get('/repair-bay')
                .query({ damaged_system: 'invalid_system' });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Invalid damaged system: invalid_system');
        });
    });
    describe('TeapotController', () => {
        it('should throw an error with HTTP 418', async () => {
            const response = await (0, supertest_1.default)(app.getHttpServer()).post('/teapot');
            expect(response.status).toBe(418);
            expect(response.body.message).toBe("I'm a teapot");
        });
    });
});
//# sourceMappingURL=e7.controllers.spec.js.map