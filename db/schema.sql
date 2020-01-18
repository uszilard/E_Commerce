CREATE DATABASE ecommerce_db;
USE ecommerce_db;

DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS customers;

DROP TABLE IF EXISTS orders;

DROP TABLE IF EXISTS orderdetails;

CREATE TABLE customers (
    customerID INT(10) NOT NULL AUTO_INCREMENT,
    contactLastName VARCHAR(50) NOT NULL,
    contactFirstName VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    addressLine1 VARCHAR(50) NOT NULL,
    addressLine2 VARCHAR(50) DEFAULT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) DEFAULT NULL,
    postalCode VARCHAR(15) DEFAULT NULL,
    country VARCHAR(50) NOT NULL,
    PRIMARY KEY (customerID)
);

CREATE TABLE products (
    productID int NOT NULL AUTO_INCREMENT,
    productName VARCHAR(70) NOT NULL,
    productCategory VARCHAR(50) NOT NULL,
    productDescription TEXT NOT NULL,
    quantityInStock SMALLINT(6) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    PRIMARY KEY (productID)
);


CREATE TABLE orders (
    orderID INT(11) NOT NULL AUTO_INCREMENT,
    orderDate DATE NOT NULL,
    shippedDate DATE DEFAULT NULL,
    comments TEXT,
    customerID INT(11) NOT NULL,
    PRIMARY KEY (orderID)
);

CREATE TABLE orderdetails (
    orderID INT(11) NOT NULL,
    productID int NOT NULL,
    quantityOrdered INT(11) NOT NULL,
    priceEach DECIMAL(10 , 2 ) NOT NULL
);



