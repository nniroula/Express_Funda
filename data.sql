-- data base sql statements and creating the table

DROP DATABASE IF EXISTS usersdb;
CREATE DATABASE usersdb;

\c usersdb;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    type text NOT NULL
);

INSERT INTO users(name, type)
VALUES('Juanita', 'admin');

INSERT INTO users(name, type)
VALUES('Naby', 'user');
