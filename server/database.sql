CREATE DATABASE vote_database;

CREATE TABLE votes(
    ID SERIAL PRIMARY KEY,
    voter_name VARCHAR(255) NOT NULL,
    voting_choice Boolean NOT NULL,
    casted_at VARCHAR(255) NOT NUll 
);