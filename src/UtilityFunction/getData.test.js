const axios = require('axios');
const getData = require('./getData');

const mockPosts = [{
  Author: 'Sidney Sheldon',
  id: 120,
  Name: 'Rage of Angels',
  rating: 3.92,
}];

describe('getData () :', () => {
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => Promise.resolve(mockPosts));
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should return an array', async (done) => {
    const blogData = await getData('http://localhost:8080/books');
    expect(blogData).toEqual(mockPosts);
    done();
  });
});
