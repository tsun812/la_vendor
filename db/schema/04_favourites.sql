-- Drop and recreate favourites table 

DROP TABLE IF EXISTS favourites CASCADE;
CREATE TABLE favourites (
 id SERIAL PRIMARY KEY NOT NULL,
 user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
 product_Id INTEGER REFERENCES products(id) ON DELETE CASCADE
)