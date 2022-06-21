const { faker } = require("@faker-js/faker");


const adminUser = {
  username: "bla",
  email: "bla@gmail.com",
  password: "123",
  role: "admin",
};
const fakeData = Array.from({ length: 101 }, () => ({
  username: faker.name.findName().replaceAll(" ", "").replaceAll(".", ""),
  email: faker.internet.email(),
  password: "123",
  role: "user",
}));

fakeData.push(adminUser);

module.exports = fakeData;
