-- Drop and recreate products table 

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  price MONEY NOT NULL,
  description TEXT NOT NULL,
  url_photo VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date_posted DATE NOT NULL,
  available_status BOOLEAN DEFAULT TRUE
)