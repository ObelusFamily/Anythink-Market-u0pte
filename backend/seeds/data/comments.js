const { faker } = require("@faker-js/faker");


const fakeData = Array.from({ length: 101 }, () => ({
  body: faker.lorem.sentence(25),
}));
module.exports = fakeData;
