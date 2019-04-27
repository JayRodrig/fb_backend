DROP DATABASE if exists financialdb;
CREATE DATABASE financialdb;

\c financialdb

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  avatar_url VARCHAR,
  income INT NULL,
  firebase_token VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE statements
(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  user_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE goals
(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  target INT NOT NULL,
  user_id INT REFERENCES users(id),
  balance INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses
(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  fixed boolean,
  amount INT,
  user_id INT REFERENCES users(id),
  statement_id INT REFERENCES statements(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
