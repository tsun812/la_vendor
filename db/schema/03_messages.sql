-- Drop and recreate messages table 

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  message_sent TEXT NOT NULL,
  sender INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
)