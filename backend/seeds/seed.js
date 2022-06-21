require("dotenv").config();
const seeder = require("mongoose-seed");
const userSeed = require("./data/user");
const itemSeed = require("./data/item");
const commentSeed = require("./data/comments");

if (!process.env.MONGODB_URI) {
  console.warn("error");
}
const seedPaths = [
  "./models/User.js",
  "./models/Item.js",
  "./models/Comment.js",
];
const seedModels = ["User", "Item", "Comment"];
const seedData = [
  {
    model: "User",
    documents: userSeed,
  },
  {
    model: "Item",
    documents: itemSeed,
  },
  {
    model: "Comment",
    documents: commentSeed,
  },
];

seeder.connect(process.env.MONGODB_URI, () => {
  seeder.loadModels(seedPaths);
  seeder.clearModels(seedModels, () => {
    seeder.populateModels(seedData, () => {
      seeder.disconnect();
    });
  });
});
