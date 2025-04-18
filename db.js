const Database = require('better-sqlite3');
const db = new Database('profiles.db');

// Initialize table
db.exec(`
CREATE TABLE IF NOT EXISTS profiles (
  id TEXT PRIMARY KEY,
  name TEXT,
  real INTEGER,
  braSize TEXT,
  height TEXT,
  age INTEGER,
  bust REAL,
  waist REAL,
  hips REAL,
  photoURL TEXT,
  sourceURL TEXT,
  notes TEXT,
  social TEXT  -- JSON string of social links
);
`);

module.exports = db;