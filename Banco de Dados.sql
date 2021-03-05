CREATE DATABASE IF NOT EXISTS teste;

CREATE TABLE IF NOT EXISTS `teste`.`eventos` (
  `hostid` INT(11) NOT NULL,
  `clock` INT(30) NOT NULL,
  `name` TEXT(250) NOT NULL,
  `severity` INT(11) NOT NULL);