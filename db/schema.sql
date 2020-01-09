CREATE DATABASE ecommerce_db;
USE ecommerce_db;

DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS customers;

DROP TABLE IF EXISTS orders;

DROP TABLE IF EXISTS orderdetails;

CREATE TABLE customers
(
    customerID INT(10) NOT NULL
    AUTO_INCREMENT,
  customerName varchar
    (50) NOT NULL,
  contactLastName varchar
    (50) NOT NULL,
  contactFirstName varchar
    (50) NOT NULL,
  phone varchar
    (50) NOT NULL,
  addressLine1 varchar
    (50) NOT NULL,
  addressLine2 varchar
    (50) DEFAULT NULL,
  city varchar
    (50) NOT NULL,
  state varchar
    (50) DEFAULT NULL,
  postalCode varchar
    (15) DEFAULT NULL,
  country varchar
    (50) NOT NULL,
  PRIMARY KEY
    (customerID)
);


    CREATE TABLE orders
    (
        orderID int(11) NOT NULL
        AUTO_INCREMENT,
  orderDate date NOT NULL,
  shippedDate date DEFAULT NULL,
  comments text,
  customerID int
        (11) NOT NULL,
  PRIMARY KEY
        (orderID),
  KEY customerID
        (customerID),
  FOREIGN KEY
        (customerID) REFERENCES customers
        (customerID)
  
);

        CREATE TABLE products
        (
            productCode varchar(15) NOT NULL
            AUTO_INCREMENT,
  productName varchar
            (70) NOT NULL,
  productCategory varchar
            (50) NOT NULL,
  productDescription text NOT NULL,
  quantityInStock smallint
            (6) NOT NULL,
  price decimal
            (10,2) NOT NULL,
  PRIMARY KEY
            (productCode),
  KEY productCategory
            (productCategory),
  FOREIGN KEY
            (productCode) REFERENCES orderdetails
            (productCode)
) ;

            CREATE TABLE orderdetails
            (
                orderID int(11) NOT NULL,
                productCode varchar(15) NOT NULL,
                quantityOrdered int(11) NOT NULL,
                priceEach decimal(10,2) NOT NULL,
                PRIMARY KEY (orderID,productCode),
                KEY productCode
                (productCode)
);