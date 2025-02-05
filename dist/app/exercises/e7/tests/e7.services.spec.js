"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const system_manager_service_1 = require("../services/system-manager.service");
const html_generator_service_1 = require("../services/html-generator.service");
const systems_1 = require("../data/systems");
describe('E7 Services', () => {
    let systemManagerService;
    let htmlGeneratorService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [system_manager_service_1.SystemManagerService, html_generator_service_1.HtmlGeneratorService],
        }).compile();
        systemManagerService = module.get(system_manager_service_1.SystemManagerService);
        htmlGeneratorService = module.get(html_generator_service_1.HtmlGeneratorService);
    });
    describe('SystemManagerService', () => {
        it('should return a random damaged system', () => {
            const damagedSystem = systemManagerService.getDamagedSystem();
            expect(damagedSystem).toBeDefined();
            expect(Object.keys(systems_1.systemsData)).toContain(damagedSystem);
        });
        it('should validate a valid system', () => {
            const validSystem = Object.keys(systems_1.systemsData)[0];
            expect(systemManagerService.isValidSystem(validSystem)).toBe(true);
        });
        it('should return false for an invalid system', () => {
            expect(systemManagerService.isValidSystem('invalid_system')).toBe(false);
        });
        it('should return the correct system code', () => {
            const validSystem = Object.keys(systems_1.systemsData)[0];
            expect(systemManagerService.isValidSystem(validSystem)).toBe(true);
        });
        it('should return UNKNOWN for invalid system code lookup', () => {
            const invalidSystem = 'invalid_system';
            expect(systemManagerService.getSystemCode(invalidSystem)).toBe('UNKNOWN');
        });
        it('should reset damaged system to null', () => {
            systemManagerService.getDamagedSystem();
            systemManagerService.resetDamagedSystem();
            expect(systemManagerService.damagedSystem).toBe(null);
        });
        it('should return all systems data', () => {
            const allSystems = systemManagerService.getAllSystemsData();
            expect(allSystems).toEqual(systems_1.systemsData);
        });
    });
    describe('HtmlGeneratorService', () => {
        it('should generate valid repair bay HTML', () => {
            const systemCode = 'TEST-01';
            const expectedHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Repair</title>
      </head>
      <body>
          <div class="anchor-point">${systemCode}</div>
      </body>
      </html>
    `;
            expect(htmlGeneratorService.generateRepairBayHtml(systemCode).trim()).toBe(expectedHtml.trim());
        });
    });
});
//# sourceMappingURL=e7.services.spec.js.map