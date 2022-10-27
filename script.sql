CREATE DATABASE bibsysdb

CREATE TABLE usuarios (
	id serial primary key,
	login varchar(40),
	senha text
);

CREATE TABLE livros (
	id serial primary key,
	nome text not null,
	autor varchar(100),
	editora varchar(100),
	genero varchar(100) not null,
	estoque integer default 0
);