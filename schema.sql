DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
	id int unsigned auto_increment, 
	firstname varchar(255) not null,
	lastname varchar(255) not null,
	password varchar(255) not null,
	email varchar(255) not null,
	date_joined datetime not null,
	primary key(id)

);


INSERT INTO Users (firstname, lastname, email, password, date_joined) VALUES ('Jonah', 'Hill', 'admin@bugme.com', md5('password123'), '2020-11-27');

DROP TABLE IF EXISTS Issues;
CREATE TABLE Issues (
	id int unsigned auto_increment,
	title varchar(255) not null,
	description text(65535) not null, 
	type varchar(255) not null,
	priority varchar(255) not null,
	status varchar(255) not null, 
	assigned_to(255) not null,
	created_by(255) not null,
	created(255) not null,
	updated(255) not null,
	primary key(id)
);

--- INSERT INTO Issues (title, description, type, priority, status, assigned_to, created_by, created, updated) VALUES ()