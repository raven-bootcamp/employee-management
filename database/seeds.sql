
INSERT INTO department (name)
VALUES 
    ("Sales"), 
    ("Engineering"), 
    ("Finance"), 
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Salesperson", 80000, 1), 
    ("Sales Lead", 100000, 1), 
    ("Lead Engineer", 150000, 2), 
    ("Software Engineer", 120000, 2), 
    ("Accountant", 130000, 3), 
    ("Lawyer", 190000, 4), 
    ("Legal Team Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jon", "Snow", 3, NULL), 
    ("Homer", "Simpson", 4, 1), 
    ("Edna", "Krabapple", 6, NULL), 
    ("Sarah", "Stepheens", 2, NULL), 
    ("Max", "Power", 1, 4);