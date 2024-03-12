const request = require('supertest');
const app = require('./server'); 

describe('GET /drivers', () => {
    it('debería devolver una lista de conductores', async () => {
      const response = await request(app).get('/drivers');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0); 
    });
  
    it('debería devolver datos de conductor válidos', async () => {
      const response = await request(app).get('/drivers');
      const driver = response.body[0]; // observamos al primer driver que tenga las siguientes propiedades
      expect(driver).toHaveProperty('description');
      expect(driver).toHaveProperty('teams');
      expect(driver).toHaveProperty('id');
    });
  });
  

  describe('GET /teams', () => {
    it('debería devolver una lista de Equipos', async () => {
      const response = await request(app).get('/teams');
      expect(Array.isArray(response.body.teams)).toBe(true);
      expect(response.body.teams.length).toBeGreaterThan(0);
      expect(response.body.teams[0]).toHaveProperty('nombre');
    });
  });