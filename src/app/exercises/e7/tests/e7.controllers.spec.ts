import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpException } from '@nestjs/common';
import request from 'supertest';
import { E7Module } from '../e7.module';
import { SystemManagerService } from '../services/system-manager.service';

describe('E7 Controllers', () => {
  let app: INestApplication;
  let systemManagerService: SystemManagerService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [E7Module],
    }).compile();

    app = moduleFixture.createNestApplication();
    systemManagerService = moduleFixture.get<SystemManagerService>(SystemManagerService);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('StatusController', () => {
    it('should return the damaged system', async () => {
      jest.spyOn(systemManagerService, 'getDamagedSystem').mockReturnValue('navigation');
      const response = await request(app.getHttpServer()).get('/status');
      const resp=JSON.parse(JSON.stringify(response?.text))
      expect(response?.status).toBe(200);      
      expect(resp).toEqual("{\"damaged_system\":\"navigation\"}");
    });

    it('should throw an error if no damaged system is found', async () => {
      jest.spyOn(systemManagerService, 'getDamagedSystem').mockReturnValue(null);
      const response = await request(app.getHttpServer()).get('/status');
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
      const response = await request(app.getHttpServer())
        .get('/repair-bay')
        .query({ damaged_system: 'navigation' });

      expect(response?.status).toBe(200);
      expect(response?.text).toContain('<div class="anchor-point">NAV-01</div>');
    });

    it('should throw an error for an invalid system', async () => {
      jest.spyOn(systemManagerService, 'getAllSystemsData').mockReturnValue({
        navigation: 'NAV-01',
        communications: 'COM-02',
        life_support: 'LIFE-03',
        engines: 'ENG-04',
        deflector_shield: 'SHLD-05',
      });
      const response = await request(app.getHttpServer())
        .get('/repair-bay')
        .query({ damaged_system: 'invalid_system' });
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Invalid damaged system: invalid_system');
    });
  });

  describe('TeapotController', () => {
    it('should throw an error with HTTP 418', async () => {
      const response = await request(app.getHttpServer()).post('/teapot');
      expect(response.status).toBe(418);
      expect(response.body.message).toBe("I'm a teapot");
    });
  });
});
