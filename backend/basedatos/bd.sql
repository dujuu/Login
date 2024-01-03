CREATE DATABASE inicioSesion

create table usuario(
    nombre varchar(20),
    apellido varchar(20),
    correo varchar(30) UNIQUE,
    contraseña varchar(50),
    token INT,
    usuario serial primary KEY
);

DROP TABLE usuario

create table usuario(
    id serial,
    nombre varchar(20),
    apellido varchar(20),
    correo varchar(50) UNIQUE,
    contraseña varchar(20),
    token INT,
    usuario VARCHAR primary KEY
);

CREATE TABLE pedidos(
    Nombre VARCHAR(20),
    Direccion VARCHAR(30),
    Fono INT,
    IdPedido VARCHAR PRIMARY KEY
);

