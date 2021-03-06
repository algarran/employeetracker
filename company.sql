create database company_db;

use company_db;

create table department(
id int not null auto_increment,
name varchar(30),
primary key(id)
);

create table role(
id int not null auto_increment,
title varchar(30),
salary decimal,
department_id int,
primary key(id)
);

create table employee(
id int not null auto_increment,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int not null,
manager_id int,
primary key(id)
);
