insert  into customers (customerID,contactLastName,contactFirstName,phone,addressLine1,addressLine2,city,state,postalCode,country) values 

(103,'Atelier graphique','Schmitt','Carine ','40.32.2555','54, rue Royale',NULL,'Nantes',NULL,'44000','France'),

(112,'Signal Gift Stores','King','Jean','7025551838','8489 Strong St.',NULL,'Las Vegas','NV','83030','USA'),

(114,'Australian Collectors, Co.','Ferguson','Peter','03 9520 4555','636 St Kilda Road','Level 3','Melbourne','Victoria','3004','Australia');

insert  into products (productID,productName,productCategory,productDescription,quantityInStock,price) values 

('101678','1969 Harley Davidson Ultimate Chopper','Motorcycles','This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.',7933,'48.81'),

('101949','1952 Alpine Renault 1300','Classic Cars','Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.',7305,'98.58'),

('102016','1996 Moto Guzzi 1100i','Motorcycles','Official Moto Guzzi logos and insignias, saddle bags located on side of motorcycle, detailed engine, working steering, working suspension, two leather seats, luggage rack, dual exhaust pipes, small saddle bag located on handle bars, two-tone paint with chrome accents, superior die-cast detail , rotating wheels , working kick stand, diecast metal with plastic parts and baked enamel finish.',6625,'68.99');

insert  into orders (orderID,orderDate,shippedDate,comments,customerID) values 

(10100,'2003-01-06','2003-01-10',NULL,363),

(10101,'2003-01-09','2003-01-11','Check on availability.',128),

(10102,'2003-01-10','2003-01-14',NULL,181);


insert  into orderdetails (orderID,productID,quantityOrdered,priceEach) values 

(10100,'181749',30,'136.00'),

(10100,'182248',50,'55.09'),

(10100,'184409',22,'75.46');

SELECT productID FROM products WHERE productID