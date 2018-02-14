##Schema

CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE pizzas (
    id int NOT NULL AUTO_INCREMENT,
    pizza_name VARCHAR(50) NOT NULL,
    devoured TINYINT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);