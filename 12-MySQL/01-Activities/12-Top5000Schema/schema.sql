DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;


SELECT * FROM top5000 WHERE artist='Jennifer Lopez';

SELECT artist, COUNT(*) FROM top5000 GROUP BY artist
HAVING COUNT(*) > 1;

SELECT * FROM top5000 WHERE position BETWEEN 20 AND 25;

SELECT * FROM top5000 WHERE song='Lose Yourself';



