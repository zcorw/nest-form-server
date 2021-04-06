// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "type": "sqlite",
  "database": process.env.DB_PATH,
  "synchronize": true,
  "logging": false,
  "entities": ["dist/**/*.entity.js"],
  "migrations": ["dist/**/*.migration.js"],
  "subscribers": ["dist/**/*.subscriber.js"]
}
