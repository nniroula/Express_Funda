-- data base sql statements and creating the table

DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

\c users_db;

DROP TABLE IF EXISTS users;
CREATE TABTLE users(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    type text NOT NULL
);

INSERT INTO users(name, type)
VALUES('Juanita', 'admin');

INSERT INTO users(name, type)
VALUES('Naby', 'user');
