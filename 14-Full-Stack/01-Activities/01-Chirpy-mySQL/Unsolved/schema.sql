CREATE DATABASE chirpy;
USE chirpy;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	chirp BOOLEAN DEFAULT false,
  ts1 timestamp null default null,
	PRIMARY KEY (id)
);