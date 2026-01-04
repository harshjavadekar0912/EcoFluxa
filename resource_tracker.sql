CREATE DATABASE resource_tracker;
USE resource_tracker;

CREATE TABLE readings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reading_date DATE,
  water_usage FLOAT,
  electricity_usage FLOAT
);