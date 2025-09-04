CREATE TABLE week4FinalProject(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   name varchar(255),
   favnum INT, 
   favcolour varchar(10), 
   additionalInfo varchar(255)
  );

INSERT INTO week4finalproject (name,favnum,favcolour,additionalinfo) values('Bob',404,'#0000ff','Error 404 :P')
-- changed values in values() to add different values