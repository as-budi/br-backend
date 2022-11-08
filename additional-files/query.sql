-- Active: 1660753862719@@127.0.0.1@3306@bike_rent_db

ALTER TABLE user MODIFY COLUMN password varchar(255);

CREATE DATABASE bike_rent_db;

USE bike_rent_db;

DROP TABLE user;

CREATE TABLE user (
     id INT PRIMARY KEY AUTO_INCREMENT,
     user_name VARCHAR(40),
     user_email VARCHAR(40),
     password VARCHAR(255),
     refresh_token VARCHAR(255),
     balance INT,
     createdAt DATETIME,
     updatedAt DATETIME
);

CREATE TABLE transaction (
     id INT PRIMARY KEY AUTO_INCREMENT,
     type INT,
     amount INT,
     createdAt DATETIME,
     updatedAt DATETIME
);

CREATE TABLE parking_lot (
     id INT PRIMARY KEY AUTO_INCREMENT,
     location INT,
     status BOOLEAN,
     createdAt DATETIME,
     updatedAt DATETIME
);

CREATE TABLE deposit (
     transaction_id INT,
     user_id INT,
     PRIMARY KEY(transaction_id, user_id),
     FOREIGN KEY(transaction_id) REFERENCES transaction(id) ON DELETE CASCADE,
     FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE bike (
     id INT PRIMARY KEY AUTO_INCREMENT,
     parking_lot_id INT,
     createdAt DATETIME,
     updatedAt DATETIME,
     FOREIGN KEY(parking_lot_id) REFERENCES parking_lot(id) ON DELETE CASCADE
);

CREATE TABLE lot_history (
     id INT PRIMARY KEY AUTO_INCREMENT,
     lot_id INT,
     status BOOLEAN,
     user_id INT,
     createdAt DATETIME,
     updatedAt DATETIME,
     FOREIGN KEY(lot_id) REFERENCES parking_lot(id) ON DELETE CASCADE,
     FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE rent (
     id INT PRIMARY KEY AUTO_INCREMENT,
     bike_id INT,
     user_id INT,
     started_at DATETIME,
     finished_at DATETIME,
     FOREIGN KEY(bike_id) REFERENCES bike(id) ON DELETE CASCADE,
     FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE payment (
     transaction_id INT,
     rent_id INT,
     PRIMARY KEY(transaction_id, rent_id),
     FOREIGN KEY(transaction_id) REFERENCES transaction(id) ON DELETE CASCADE,
     FOREIGN KEY(rent_id) REFERENCES rent(id) ON DELETE CASCADE
);
