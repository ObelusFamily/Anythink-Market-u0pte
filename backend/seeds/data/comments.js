const { faker } = require("@faker-js/faker");


const fakeData = Array.from({ length: 100 }, () => ({
  body: faker.lorem.sentence(25),
}));
module.exports = fakeData;
