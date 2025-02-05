import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { E9Module } from '../e9.module';

describe('E9 Controller (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [E9Module],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/diagram (GET) - Valid Pressure', async () => {
    const response = await request(app.getHttpServer()).get('/diagram?pressure=10');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      specific_volume_liquid: 0.0035,
      specific_volume_vapor: 0.0035,
    });
  });

  it('/diagram (GET) - Invalid Pressure', async () => {
    const response = await request(app.getHttpServer()).get('/diagram?pressure=20');

    expect(response.status).toBe(400); // Asegurar que coincide con el controlador
    expect(response.body.message).toContain('Pressure out of range');
  });

  it('/diagram (GET) - Missing Pressure Parameter', async () => {
    const response = await request(app.getHttpServer()).get('/diagram');
  
    expect(response.status).toBe(400);
    expect(response.body.message).toContain('The "pressure" parameter is required.'); // Corregido
  });

  it('/diagram (GET) - Non-numeric Pressure', async () => {
    const response = await request(app.getHttpServer()).get('/diagram?pressure=invalid');
  
    expect(response.status).toBe(400);
    expect(response.body.message).toContain('The "pressure" parameter must be a valid number.'); // Corregido
  });
});
