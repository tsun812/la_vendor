-- Users table seeds here (Example)
-- id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   admin_status BOOLEAN DEFAULT FALSE
INSERT INTO users (name, email, password, admin_status) VALUES('Matt Kim', 'mk@email.com', '123', TRUE);
INSERT INTO users (name, email, password, admin_status) VALUES('Roderick Nuque', 'rn@email.com', '456', TRUE);
INSERT INTO users (name, email, password, admin_status) VALUES('Yan Sun', 'ys@email.com', '789', TRUE);
INSERT INTO users (name, email, password) VALUES('username1', 'username1@email.com', 'username1');
INSERT INTO users (name, email, password) VALUES('username2', 'username2@email.com', 'username2');



