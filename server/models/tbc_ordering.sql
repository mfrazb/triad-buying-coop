--CREATE TABLES 
CREATE TABLE members (
	_id serial NOT NULL PRIMARY KEY,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL, 
	email varchar(50) NOT NULL
);

ALTER TABLE members ALTER COLUMN _id SET DEFAULT 200;

CREATE TABLE vendors (
	_id SERIAL PRIMARY KEY,
	company_name varchar(50) NOT NULL,
	location_name varchar(50) NOT NULL,
	tbc_member_status INTEGER NOT NULL
	);
	
ALTER TABLE vendors ALTER COLUMN _id SET DEFAULT 500;


CREATE TABLE products (
	_id serial PRIMARY KEY,
	product_code varchar(5) NOT NULL,
	product_name varchar(100) NOT NULL,
	category varchar(50) NOT NULL,
	vendor_id INTEGER NOT NULL,
	organic boolean NOT NULL,
	local_status varchar(50) DEFAULT 'none',
	price_per_unit decimal(19,4) NOT NULL,
	unit_quantity decimal(6,2) NOT NULL,
	unit_type varchar(50) NOT NULL,
	min_order_quantity integer NOT NULL DEFAULT 1,
	product_quantity integer NOT NULL CHECK ("product_quantity" > 0),
	date_added DATE NOT NULL DEFAULT CURRENT_DATE,
	status varchar(30) NOT NULL DEFAULT 'active',
	FOREIGN KEY (vendor_id) REFERENCES vendors (_id)
);

ALTER TABLE products ALTER COLUMN _id SET DEFAULT 1000;

CREATE TABLE orders (
	_id SERIAL PRIMARY KEY,
	post_date DATE NOT NULL DEFAULT CURRENT_DATE,
	transaction_amt DECIMAL(19, 4) NOT NULL, 
	member_id INT NOT NULL,
	FOREIGN KEY (member_id) REFERENCES members (_id)
);

ALTER TABLE orders ALTER COLUMN _id SET DEFAULT 100000;

ALTER TABLE vendors ALTER COLUMN tbc_member_status DROP NOT NULL;


INSERT INTO vendors (company_name, location_name)
VALUES ('Harmony Ridge', 'Tobaccoville, NC');

ALTER TABLE vendors ALTER COLUMN location_name DROP NOT NULL;
ALTER TABLE vendors ADD COLUMN full_company_name varchar(100);
ALTER TABLE vendors ADD COLUMN company_description varchar(150);

ALTER TABLE vendors ALTER COLUMN _id DROP DEFAULT;

UPDATE vendors 
SET full_company_name = 'Harmony Ridge'
WHERE company_name = 'Harmony Ridge';

UPDATE vendors 
SET company_description = 'Pasture raised poultry and pork, sustainably raised produce in season'
WHERE company_name = 'Harmony Ridge';

INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (501, 'Zacha', 'Zacha', 'Home garden growing in-season produce', 'Winston-Salem, NC');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (503, 'ECO', 'Happy Dirt', 'National produce distributor partnering with hundreds of farmers and making organic more relatable', 'Durham, NC');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (504, 'Vernon', 'Vernon Produce', 'Local distributor of non-local organic and conventional fruits and vegetables', 'Winston-Salem, NC');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (505, 'Massey', 'Massey Creek Farms', 'Small family farm specializing in sustainably grown, grass-fed meats and eggs', 'Madison, NC');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (506, 'United', 'United Natural Foods', 'National grocery distributor providing organic, natural, conventional, and specialty grocery items', 'National');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (507, 'Sungold', 'Sungold Farm', 'We grow an assortment of vegetables and herbs for folks in Winston-Salem, NC', 'Winston-Salem, NC');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (508, 'Homeland', 'Homeland Creamery', 'Family owned and operated farm and retail shop selling milk, cheese & ice cream', 'Julian, NC');
INSERT INTO vendors (_id, company_name, full_company_name, company_description, location_name)
VALUES (502, 'TBC', 'Triad Buying Co-op', 'We are a food co-op and local, natural, non-commercial alternative to grocery stores for retail shopping','Winston-Salem, NC');

INSERT INTO products VALUES (10001, 4132, 'apple', 'produce', 500, true, 'NC', 1.55, 1, 'apple', 1, 40, '2023-01-01', 'active');
INSERT INTO products VALUES (10002, 4132, 'cranberries', 'produce', 500, false, 'NC', 4.00, 1, 'lbs', 1, 20, '2023-01-01', 'active');
INSERT INTO products VALUES (10003,1012,'Black turtle beans','bulk', 502,TRUE, 'no', 2.02,1.00,'lbs',1,13,'2023-08-19','active');
INSERT INTO products VALUES (10004,1015,'Garbanzo (chickpeas)','bulk',502,TRUE, 'no',2.20,1.00,'lbs',1,13,'2023-08-19','active');
INSERT INTO products VALUES (10005,1019,'Black beans - canned','grocery',506,TRUE,'no',2.13,15.00,'oz',1,12,'2023-08-19','active');
INSERT INTO products VALUES (10006,1231,'red cabbage','produce',503,TRUE,'NC',0.94,1.00,'lbs',1,45,'2023-08-01','active');
INSERT INTO products VALUES (10007,1411,'slicing cucumbers','produce',501,TRUE,'Triad',2.14,1.00,'lbs',1,5,'2023-08-19','active');
INSERT INTO products VALUES (10008,1614,'eggplant','produce',501,TRUE,'Triad',2.75,1.00,'lbs',1,5,'2023-07-01','active');
INSERT INTO products VALUES (10009,1842,'salted butter roll','dairy',503,FALSE,'Ashe County',6.42,1.00,'lbs',1,8,'2023-08-01','active');
INSERT INTO products VALUES (10010,1858,'Loose Spinach','produce',503,FALSE,'no',1.56,0.25,'lbs',1,3,'2023-06-01','active');
INSERT INTO products VALUES (10011,2031,'Parsley Italian Flat','produce',504,TRUE,'no',1.71,1.00,'bunch',1,10,'2023-08-01','active');
INSERT INTO products VALUES (10012,2206,'Spring Mix clamshell-Earthbound','produce',504,TRUE,'no',2.90,1.00,'clamshell',1,6,'2023-04-01','active');
INSERT INTO products VALUES (10013,2401,'garlic 3-head mesh tube','produce',504,TRUE,'no',1.92,1.00,'unit',1,24,'2023-03-01','active');
INSERT INTO products VALUES (10014,2463,'red candy onion','produce',507,TRUE,'no',2.68,1.00,'lbs',1,15,'2023-08-19','active');
INSERT INTO products VALUES (10015,2601,'Red Bliss Potatoes','produce',504,FALSE, 'no',0.82,1.00,'lbs',1,50,'2023-07-01','active');
INSERT INTO products VALUES (10016,3012,'Mountain sharp cheddar','dairy',503,FALSE,'Ashe County',4.76,8.00,'oz',1,25,'2023-06-01','active');
INSERT INTO products VALUES (10017,3203,'Carrots','produce',504,TRUE,'no',2.04,2.00,'lbs',1,24,'2023-09-01','active');
INSERT INTO products VALUES (10018,4259,'Large eggs','dairy',505,FALSE,'Triad',4.78,1.00,'dozen',1,20,'2023-08-19','active');
INSERT INTO products VALUES (10019,5273,'Charlie Oxygen (non-chlorine) Bleach','grocery',506,FALSE,'no',11.10,2.64,'lbs',1,6,'2023-08-19','active');

INSERT INTO members (_id, first_name, last_name, email) 
VALUES (200, 'Sarah', 'Sharp', 'sarahsharp@sarahsharp.com');

INSERT INTO members (_id, first_name, last_name, email) 
VALUES (201, 'Doug', 'Doddard', 'dougdoddard@dougdoddard.com');

INSERT INTO members (_id, first_name, last_name, email) 
VALUES (202, 'Lorna', 'Lenley', 'lornalenley@lornalenley.com');

INSERT INTO orders (	_id, transaction_amt, member_id) 
VALUES (100001, 32.29, 202);
INSERT INTO orders (	_id, transaction_amt, member_id) 
VALUES (100002, 105.12, 201);
INSERT INTO orders (	_id, transaction_amt, member_id) 
VALUES (100003, 51.80, 200);

CREATE TABLE ordered_items (
	_id serial NOT NULL PRIMARY KEY,
	ordered_quantity INTEGER NOT NULL,
	ordered_status varchar(50) NOT NULL, 
	member_id INTEGER NOT NULL,
	product_id INTEGER NOT NULL,
	FOREIGN KEY (member_id) REFERENCES members (_id),
	FOREIGN KEY (product_id) REFERENCES products (_id)
);

INSERT INTO ordered_items (ordered_quantity, ordered_status, member_id, product_id) 
VALUES (5, 'reserved', 200, 10001);
INSERT INTO ordered_items (ordered_quantity, ordered_status, member_id, product_id) 
VALUES (2, 'reserved', 200, 10005);
INSERT INTO ordered_items (ordered_quantity, ordered_status, member_id, product_id) 
VALUES (2, 'reserved', 200, 10006);
INSERT INTO ordered_items (ordered_quantity, ordered_status, member_id, product_id) 
VALUES (1, 'reserved', 200, 10010);
INSERT INTO ordered_items (ordered_quantity, ordered_status, member_id, product_id) 
VALUES (1, 'reserved', 200, 10016);