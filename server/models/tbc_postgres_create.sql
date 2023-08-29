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
	"product_name" varchar(100) NOT NULL,
	"category" varchar(50) NOT NULL,
	"min_order_units" integer NOT NULL,
	"price" decimal(6,2) NOT NULL,
	"status" varchar(30) NOT NULL,
	"unit_type" varchar NOT NULL,
	"date_added" date NOT NULL,
	"date_removed" date,
	PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

--
-- TOC entry 4124 (class 0 OID 4163875)
-- Dependencies: 229
-- Data for Name: products; Type: TABLE DATA; Schema:  Owner: -
--



 INSERT INTO products VALUES (10001, 'apple', 'produce', 1, 1.55, 'active', 'unit', '2023-01-01');
  INSERT INTO products VALUES (10002, 'banana', 'produce', 1, 0.37, 'active', 'unit', '2023-01-01');