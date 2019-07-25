const jest = require('jest');
const request = require('supertest');
const uuid = require('uuid/v4');

jest.mock('../models/rsvp');
const app = require('../app');

// Test valid/invalid GET requests
describe('Test expected paths', () => {
  test('Root Path returns 200', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  })
  
  test('Bad path returns 404', () => {
    return request(app).get('/blerg').then(response => {
      expect(response.statusCode).toBe(404);
    });
  })
})

// Tests around creating RSVPs
describe('Test create RSVP', () => {
  test('Good request returns valid user', () => {
    return request(app)
      .post('/api/rsvp')
      .send({
        name: 'Guest1',
        email: 'guest1@abc.com',
        meal: 'Chicken',
        isComing: true
      })
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.body.message).not.toBeNull();
        expect(response.body.message).toEqual(expect.stringContaining('RSVP created'))
        expect(response.statusCode).toBe(200);

    });
  })
  
  test('Failed create returns a 500', () => {
    return request(app)
      .post('/api/rsvp')
      .send({
        name: 'BadGuest',
        email: 'badguest@abc.com',
        meal: 'bugs',
        isComing: false
      })
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(500);

    });
  })

  test('Missing param returns 400', () => {
    return request(app)
      .post('/api/rsvp')
      .send({name: 'john'})
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(400);
    });
  })
})
