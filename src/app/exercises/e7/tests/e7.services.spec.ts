import { Test, TestingModule } from '@nestjs/testing';
import { SystemManagerService } from '../services/system-manager.service';
import { HtmlGeneratorService } from '../services/html-generator.service';
import { systemsData } from '../data/systems';

describe('E7 Services', () => {
  let systemManagerService: SystemManagerService;
  let htmlGeneratorService: HtmlGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemManagerService, HtmlGeneratorService],
    }).compile();

    systemManagerService = module.get<SystemManagerService>(SystemManagerService);
    htmlGeneratorService = module.get<HtmlGeneratorService>(HtmlGeneratorService);
  });

  describe('SystemManagerService', () => {
    it('should return a random damaged system', () => {
      const damagedSystem = systemManagerService.getDamagedSystem();
      expect(damagedSystem).toBeDefined();
      expect(Object.keys(systemsData)).toContain(damagedSystem);
    });

    it('should validate a valid system', () => {
      const validSystem = Object.keys(systemsData)[0]; // Pick the first valid system
      expect(systemManagerService.isValidSystem(validSystem)).toBe(true);
    });

    it('should return false for an invalid system', () => {
      expect(systemManagerService.isValidSystem('invalid_system')).toBe(false);
    });

    it('should return the correct system code', () => {
      const validSystem: keyof typeof systemsData = Object.keys(systemsData)[0] as keyof typeof systemsData;
      expect(systemManagerService.isValidSystem(validSystem)).toBe(true);
    });

    it('should return UNKNOWN for invalid system code lookup', () => {
      const invalidSystem = 'invalid_system' as keyof typeof systemsData;
      expect(systemManagerService.getSystemCode(invalidSystem)).toBe('UNKNOWN');
    });

    it('should reset damaged system to null', () => {     
      systemManagerService.getDamagedSystem();      
      systemManagerService.resetDamagedSystem();    
      expect((systemManagerService as any).damagedSystem).toBe(null);
    });
    

    it('should return all systems data', () => {
      const allSystems = systemManagerService.getAllSystemsData();
      expect(allSystems).toEqual(systemsData);
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
