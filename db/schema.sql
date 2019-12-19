/*
*********************************************************************
http://www.mysqltutorial.org
*********************************************************************
Name: MySQL Sample Database classicmodels
Link: http://www.mysqltutorial.org/mysql-sample-database.aspx
Version 3.1
+ changed data type from DOUBLE to DECIMAL for amount columns
Version 3.0
+ changed DATETIME to DATE for some colunmns
Version 2.0
+ changed table type from MyISAM to InnoDB
+ added foreign keys for all tables 
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE product_db;
USE product_db;

DROP TABLE IF EXISTS `products`;

/*Table structure for table `customers` */

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers`
(
  `customerNumber` int
(11) NOT NULL,
  `customerName` varchar
(50) NOT NULL,
  `contactLastName` varchar
(50) NOT NULL,
  `contactFirstName` varchar
(50) NOT NULL,
  `phone` varchar
(50) NOT NULL,
  `addressLine1` varchar
(50) NOT NULL,
  `addressLine2` varchar
(50) DEFAULT NULL,
  `city` varchar
(50) NOT NULL,
  `state` varchar
(50) DEFAULT NULL,
  `postalCode` varchar
(15) DEFAULT NULL,
  `country` varchar
(50) NOT NULL,
  `salesRepEmployeeNumber` int
(11) DEFAULT NULL,
  `creditLimit` decimal
(10,2) DEFAULT NULL,
  PRIMARY KEY
(`customerNumber`),
  KEY `salesRepEmployeeNumber`
(`salesRepEmployeeNumber`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY
(`salesRepEmployeeNumber`) REFERENCES `employees`
(`employeeNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `customers` */

insert  into `customers`(`
customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone
`,`addressLine1`,`addressLine2`,`city`,`state`,`postalCode`,`country`,`salesRepEmployeeNumber`,`creditLimit`) values


/*Table structure for table `orderdetails` */

DROP TABLE IF EXISTS `orderdetails`;

CREATE TABLE `orderdetails`
(
  `orderNumber` int
(11) NOT NULL,
  `productCode` varchar
(15) NOT NULL,
  `quantityOrdered` int
(11) NOT NULL,
  `priceEach` decimal
(10,2) NOT NULL,
  `orderLineNumber` smallint
(6) NOT NULL,
  PRIMARY KEY
(`orderNumber`,`productCode`),
  KEY `productCode`
(`productCode`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY
(`orderNumber`) REFERENCES `orders`
(`orderNumber`),
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY
(`productCode`) REFERENCES `products`
(`productCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `orderdetails` */

insert  into `orderdetails`(`
orderNumber`,`productCode
`,`quantityOrdered`,`priceEach`,`orderLineNumber`) values


/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders`
(
  `orderNumber` int
(11) NOT NULL,
  `orderDate` date NOT NULL,
  `requiredDate` date NOT NULL,
  `shippedDate` date DEFAULT NULL,
  `status` varchar
(15) NOT NULL,
  `comments` text,
  `customerNumber` int
(11) NOT NULL,
  PRIMARY KEY
(`orderNumber`),
  KEY `customerNumber`
(`customerNumber`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY
(`customerNumber`) REFERENCES `customers`
(`customerNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `orders` */

insert  into `orders`(`
orderNumber`,`orderDate
`,`requiredDate`,`shippedDate`,`status`,`comments`,`customerNumber`) values


/*Table structure for table `payments` */

DROP TABLE IF EXISTS `payments`;

CREATE TABLE `payments`
(
  `customerNumber` int
(11) NOT NULL,
  `checkNumber` varchar
(50) NOT NULL,
  `paymentDate` date NOT NULL,
  `amount` decimal
(10,2) NOT NULL,
  PRIMARY KEY
(`customerNumber`,`checkNumber`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY
(`customerNumber`) REFERENCES `customers`
(`customerNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `payments` */

insert  into `payments`(`
customerNumber`,`checkNumber
`,`paymentDate`,`amount`) values


/*Table structure for table `productlines` */

DROP TABLE IF EXISTS `productlines`;

CREATE TABLE `productlines`
(
  `productLine` varchar
(50) NOT NULL,
  `textDescription` varchar
(4000) DEFAULT NULL,
  `htmlDescription` mediumtext,
  `image` mediumblob,
  PRIMARY KEY
(`productLine`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `productlines` */

insert  into `productlines`(`
productLine`,`textDescription
`,`htmlDescription`,`image`) values


/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products`
(
  `productCode` varchar
(15) NOT NULL,
  `productName` varchar
(70) NOT NULL,
  `productLine` varchar
(50) NOT NULL,
  `productScale` varchar
(10) NOT NULL,
  `productVendor` varchar
(50) NOT NULL,
  `productDescription` text NOT NULL,
  `quantityInStock` smallint
(6) NOT NULL,
  `buyPrice` decimal
(10,2) NOT NULL,
  `MSRP` decimal
(10,2) NOT NULL,
  PRIMARY KEY
(`productCode`),
  KEY `productLine`
(`productLine`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY
(`productLine`) REFERENCES `productlines`
(`productLine`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `products` */

insert  into `products`(`
productCode`,`productName
`,`productLine`,`productScale`,`productVendor`,`productDescription`,`quantityInStock`,`buyPrice`,`MSRP`) values 


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;