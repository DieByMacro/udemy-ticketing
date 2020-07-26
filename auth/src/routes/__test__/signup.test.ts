import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtest.com',
      password: 'password'
    })
    .expect(400);
})

it("returns a 400 with a short password", async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(400);
})

it("returns a 400 with missing email and password", async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'abc'
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'a'
    })
    .expect(400);
})

it('disallow duplicated email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
})

it("sets a cookie after successfully signup", async () => {
  const resp = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);

  expect(resp.get('Set-Cookie')).toBeDefined();
})