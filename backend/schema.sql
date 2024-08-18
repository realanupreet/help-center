-- Drop the table if it exists to ensure a clean slate
-- DROP TABLE IF EXISTS help_center;

-- Create a db named help_center
CREATE DATABASE IF NOT EXISTS help_center;

use help_center;
-- Create the todos table
CREATE TABLE IF NOT EXISTS help_center (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    data TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);