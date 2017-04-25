### Schema

CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers
(
	`id` int NOT NULL AUTO_INCREMENT,
	`burger_name` varchar(50) NOT NULL,
	`devoured` TINYINT NOT NULL,
	`date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
	
);
