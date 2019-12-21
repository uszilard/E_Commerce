USE ecommerce_db;

CREATE TABLE products (
id int NOT NULL AUTO_INCREMENT,
productName VARCHAR(70) NOT NULL,
quantity SMALLINT(10) NOT NULL,
productDescription VARCHAR(100),
imgURL MEDIUMBLOB
)

