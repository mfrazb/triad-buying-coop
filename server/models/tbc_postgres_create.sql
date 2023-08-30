--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Ubuntu 11.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-11 16:56:10 PDT

/*
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

*/ 

CREATE TABLE products (
	"_id" serial NOT NULL,
	"product_code" varchar(5) NOT NULL,
	"product_name" varchar(100) NOT NULL,
	"category" varchar(50) NOT NULL,
	"vendor" varchar(50) NOT NULL,
	"organic" boolean NOT NULL,
	"local" varchar(50),
	"price_per_unit" decimal(6,2) NOT NULL,
	"unit_quantity" decimal(6,2) NOT NULL,
	"unit_type" varchar(50) NOT NULL,
	"min_order_quantity" integer NOT NULL DEFAULT 1,
	"product_quantity" integer NOT NULL CHECK ("product_quantity" > 0),
	"date_added" date,
	"status" varchar(30) NOT NULL,
	PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

--
-- TOC entry 4124 (class 0 OID 4163875)
-- Dependencies: 229
-- Data for Name: products; Type: TABLE DATA; Schema:  Owner: -
--



 INSERT INTO products VALUES (10001, 4132, 'apple', 'produce', 'Harmony Ridge', true, 'NC', 1.55, 1, 'apple', 1, 40, '2023-01-01', 'active');
 INSERT INTO products VALUES (10002, 4132, 'cranberries', 'produce', 'Harmony Ridge', false, 'NC', 4.00, 1, 'lbs', 1, 20, '2023-01-01', 'active');

INSERT INTO products VALUES (10003,1012,'Black turtle beans','bulk','TBC',TRUE, 'no', 2.02,1.00,'lbs',1,13,'2023-08-19','active')

INSERT INTO products VALUES (10004,1015,'Garbanzo (chickpeas)','bulk','TBC',TRUE, 'no',2.20,1.00,'lbs',1,13,2023-08-19,'active');
INSERT INTO products VALUES (10005,1019,'Black beans - canned','grocery','United',TRUE,'no',2.13,15.00,'oz',1,12,,'active');
INSERT INTO products VALUES (10006,1231,'red cabbage','produce','ECO',TRUE,'NC',0.94,1.00,'lbs',1,45,'2023-08-01','active');
INSERT INTO products VALUES (10007,1411,'slicing cucumbers','produce','Zacha',TRUE,'Triad',2.14,1.00,'lbs',1,5,'2023-08-19','active');
INSERT INTO products VALUES (10008,1614,'eggplant','produce','Zacha',TRUE,'Triad',2.75,1.00,'lbs',1,5,'2023-07-01','active');
INSERT INTO products VALUES (10009,1842,'salted butter roll','dairy','ECO',FALSE,'Ashe County',6.42,1.00,'lbs',1,8,'2023-08-01','active');
INSERT INTO products VALUES (10010,1858,'Loose Spinach','produce','ECO',FALSE,'no',1.56,0.25,'lbs',1,3,'2023-06-01','active');
INSERT INTO products VALUES (10011,2031,'Parsley Italian Flat','produce','Vernon',TRUE,'no',1.71,1.00,'bunch',1,10,'2023-08-01','active');
INSERT INTO products VALUES (10012,2206,'Spring Mix clamshell-Earthbound','produce','Vernon',TRUE,'no',2.90,1.00,'clamshell',1,6,'2023-04-01','active');
INSERT INTO products VALUES (10013,2401,'garlic 3-head mesh tube','produce','Vernon',TRUE,'no',1.92,1.00,'unit',1,24,'2023-03-01','active');
INSERT INTO products VALUES (10014,2463,'red candy onion','produce','Sungold',TRUE,'no',2.68,1.00,'lbs',1,15,'2023-08-19','active');
INSERT INTO products VALUES (10015,2601,'Red Bliss Potatoes','produce','Vernon',FALSE, 'no',0.82,1.00,'lbs',1,50,'2023-07-01','active');
INSERT INTO products VALUES (10016,3012,'Mountain sharp cheddar','dairy','ECO',FALSE,'Ashe County',4.76,8.00,oz,1,25,'2023-06-01','active');
INSERT INTO products VALUES (10017,3203,'Carrots','produce','Vernon',TRUE,'no',2.04,2.00,'lbs',1,24,'2023-09-01','active');
INSERT INTO products VALUES (10018,4259,'Large eggs','dairy','Massey',FALSE,'Triad',4.78,1.00,'dozen',1,20,'2023-08-19','active');
INSERT INTO products VALUES (10019,5273,'Charlie Oxygen (non-chlorine) Bleach','grocery','United',FALSE,'no',11.10,2.64,'lbs',1,6,'2023-08-19','active');

/*
  COPY products("_id", "product_code", "product_name", "category", "vendor", "organic", "local", "price_per_unit", "unit_quantity", "unit_type", "min_order_quantity","product_quantity", "date_added", "status") 
  FROM '/Users/meredithb
  ritt/Library/CloudStorage/Dropbox/design_mfb/projects-design/tbc-design-files/tbc_data_tables/tbc_products.csv'
  DELIMITER ','
  CSV HEADER;
  */
