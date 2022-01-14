--   id SERIAL PRIMARY KEY NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   price MONEY NOT NULL,
--   description TEXT NOT NULL,
--   url_photo VARCHAR(255) NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   date_posted DATE NOT NULL,
--   available_status BOOLEAN DEFAULT TRUE

INSERT INTO products (title, price, description, url_photo, user_id, date_posted, available_status) VALUES('Mona Lisa', 2000000, 'Mona Lisa Description', 'https://cdn.pixabay.com/photo/2013/01/05/21/02/art-74050_1280.jpg', 1,  '2018-08-24', FALSE);
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('V Campi', 1800000, 'V Campi Description', 'https://cdn.pixabay.com/photo/2020/04/16/20/27/vincenzo-campi-5052245_960_720.jpg', 2, '2020-12-25');
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('Face Paint', 180, 'Face paint description', 'https://cdn.pixabay.com/photo/2017/10/13/16/06/face-painting-2848057_960_720.jpg', 3, '2019-10-30');
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('Last Dance', 225, 'Last dance description', 'https://cdn.pixabay.com/photo/2016/02/06/23/08/street-art-1183812_960_720.jpg', 4, '2021-12-01');
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('A Einstein', 225, 'Einstein description', 'https://cdn.pixabay.com/photo/2019/06/16/01/27/genius-4276759_960_720.jpg', 5, '2018-01-01');
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('Woman', 180, 'woman description', 'https://cdn.pixabay.com/photo/2017/05/16/08/53/art-2317256_960_720.jpg', 1, '2019-01-01');
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('Kid with Bear', 160, 'Kid with bear description', 'https://cdn.pixabay.com/photo/2017/08/04/01/31/teddy-2578812_960_720.jpg', 2, '2020-01-01');
INSERT INTO products (title, price, description, url_photo, user_id, date_posted) VALUES('Festival in Peru', 120, 'Festival in Peru description', 'https://cdn.pixabay.com/photo/2017/11/02/22/47/peru-2912854_960_720.jpg', 3, '2019-01-13');

