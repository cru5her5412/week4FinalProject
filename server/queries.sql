CREATE TABLE week4FinalProject(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   name varchar(255),
   favnum INT, 
   favcolour varchar(10), 
   additionalInfo varchar(255)
  );

INSERT INTO week4finalproject (name,favnum,favcolour,additionalinfo) values('Bob',404,'#0000ff','Error 404 :P')
-- changed values in values() to add different values
ALTER TABLE week4finalproject ALTER COLUMN favcolour SET DATA TYPE varchar(7) 
--Used to change length restriction of colour to be 7, to ensure data accuracy
INSERT INTO week4finalproject (favcolour) values('123456789') 
--used to confirm previous query functioned correctly, returned an error due to input having 9 chars and column requiring 7 or less
--added a new column using the website UI (tried to use ADD COLUMN with ALTER TABLE but was throwing an error)