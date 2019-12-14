import request from 'supertest';
import app from '../src/server';

describe('server', () => {
  afterEach(() => app.close());

  describe('GET /', () => {
    it('responds with 200', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
});
