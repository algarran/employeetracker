

INSERT INTO role_id (title, department_id)
VALUE ("Service Department", 1),
	  ("Production Department", 2),
	  ("Sales Department", 3);
      
      
INSERT INTO employee (first_name, last_name, salary, role_id)
VALUE ("Harry", "Douglas", 50000, 1),
("Scott", "Man", 60000, 1),
("Joe", "Huels", 60000, 1),
("Tom", "Brady", 60000, 1),
("Lolie", "Sea", 60000, 2),
("Mecole", "Hardman", 60000, 2),
("Shade", "Thrower", 60000, 2),
("Spice", "Master", 80000, 3),
("Samantha", "Broke", 80000, 3),
("Kelsey", "Grammer", 80000, 3),
("Jolie", "Addy", 80000, 3);

TRUNCATE department;