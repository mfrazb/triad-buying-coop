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
	"date_added" date NOT NULL,
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
/*
  COPY products("_id", "product_code", "product_name", "category", "vendor", "organic", "local", "price_per_unit", "unit_quantity", "unit_type", "min_order_quantity","product_quantity", "date_added", "status") 
  FROM '/Users/meredithb
  ritt/Library/CloudStorage/Dropbox/design_mfb/projects-design/tbc-design-files/tbc_data_tables/tbc_products.csv'
  DELIMITER ','
  CSV HEADER
  */
