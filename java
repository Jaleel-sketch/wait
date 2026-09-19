const db = require('./db');

const initDb = async () => {
  const schemaQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      region VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS creators (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      bio TEXT,
      location VARCHAR(100),
      is_featured BOOLEAN DEFAULT false,
      profile_image_url TEXT
    );

    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      title VARCHAR(200) NOT NULL,
      content TEXT NOT NULL,
      category VARCHAR(50),
      author_id INT REFERENCES creators(id) ON DELETE SET NULL,
      region_tag VARCHAR(50),
      published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS user_favorites (
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      creator_id INT REFERENCES creators(id) ON DELETE CASCADE,
      article_id INT REFERENCES articles(id) ON DELETE CASCADE
    );
  `;

  try {
    await db.query(schemaQuery);
    console.log('Database tables initialized successfully.');
  } catch (err) {
    console.error('Error initializing database tables:', err);
  }
};

initDb();
