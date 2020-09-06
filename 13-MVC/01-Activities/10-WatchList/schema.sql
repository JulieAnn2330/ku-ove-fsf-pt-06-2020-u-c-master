    1. Make a database called moviePlannerDB

    2. Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.


-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS moviePlannerDB;

-- Created the DB "moviePlannerDB" (only works on local connections)
CREATE DATABASE moviePlannerDB;

-- Use the moviePlannerDB for all the rest of the script
USE moviePlannerDB;

-- Created the table "movies"
CREATE TABLE movies (
  id int AUTO_INCREMENT NOT NULL primary key,
  movies varchar(100) NOT NULL,
 );
