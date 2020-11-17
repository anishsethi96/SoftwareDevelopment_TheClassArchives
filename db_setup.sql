CREATE TABLE Departments (
	dept_code CHAR(4) PRIMARY KEY,
	dept_name VARCHAR(127) NOT NULL,
	school_name VARCHAR(127) NOT NULL
);

CREATE TABLE Students (
	rcs_id VARCHAR(7) PRIMARY KEY,
	first_name VARCHAR(127) NOT NULL,
	last_name VARCHAR(127) NOT NULL,
	dept_code CHAR(4),
	FOREIGN KEY (dept_code) REFERENCES Departments(dept_code)
);

CREATE TABLE Courses (
	course_id INT PRIMARY KEY,
	course_name VARCHAR(127),
	dept_code CHAR(4),
	FOREIGN KEY (dept_code) REFERENCES Departments(dept_code),
	semester_year INT NOT NULL,
	semester_season INT NOT NULL
);

CREATE TABLE Papers (
	course_id INT,
	FOREIGN KEY (course_id) REFERENCES Courses(course_id),
	rcs_id VARCHAR(127),
	FOREIGN KEY (rcs_id) REFERENCES Students(rcs_id),
	title_name VARCHAR(127) NOT NULL,
	type_name VARCHAR(127) NOT NULL,
	grade_percentage decimal,
	professor_first_name VARCHAR(127) NOT NULL,
	professor_last_name VARCHAR(127) NOT NULL,
	paper_year INT NOT NULL,
	doc_link VARCHAR(127) NOT NULL
);

INSERT INTO departments VALUES ('ITWS', 'Information Technology & Web Science', 'Science');
INSERT INTO departments VALUES ('CSCI', 'Computer Science', 'Science');
INSERT INTO departments VALUES ('COGS', 'Cognitive Science', 'HASS');
INSERT INTO departments VALUES ('COMM', 'Communication', 'HASS');
INSERT INTO departments VALUES ('PHYS', 'Physics', 'Science');
INSERT INTO departments VALUES ('CHEM', 'Chemistry', 'Science');

INSERT INTO courses VALUES (43694, 'INTRO TO IT & WEB SCIENCE', 'ITWS', 2021, 1);
INSERT INTO courses VALUES (42833, 'PRINCIPLES OF SOFTWARE', 'CSCI', 2021, 1);
INSERT INTO courses VALUES (40136, 'PHYSICS 1', 'PHYS', 2021, 1);