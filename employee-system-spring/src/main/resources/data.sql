INSERT INTO department (name) VALUES ('Software Engineering');
SELECT @department_id := SCOPE_IDENTITY(); -- can't just do SET @department_id = SCOPE_IDENTITY() for some screwy reason.
INSERT INTO employee (first_name, last_name, email_address, department_id)
    VALUES ('Helena', 'Lawrence', 'helena.lawrence@corp.com', @department_id);
INSERT INTO employee (first_name, last_name, email_address, department_id)
    VALUES ('Wilford', 'Banik', 'wilford.banik@corp.com', @department_id);
INSERT INTO employee (first_name, last_name, email_address, department_id)
    VALUES ('Krasimir', 'Millhouse', 'krasimir.millhouse@corp.com', @department_id);

INSERT INTO department (name) VALUES ('Human Resources');
SELECT @department_id := SCOPE_IDENTITY();
INSERT INTO employee (first_name, last_name, email_address, department_id)
    VALUES ('Daireann', 'Shibuya', 'daireann@corp.com', @department_id);
