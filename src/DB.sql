CREATE TABLE users(
id SERIAL PRIMARY KEY,
nombres VARCHAR(50) NOT NULL,
apellidos VARCHAR(50) NOT NULL,
celular VARCHAR(50) NOT NULL,
genero VARCHAR(50) NOT NULL
);


CREATE TABLE eventos(
id SERIAL PRIMARY KEY,
evento VARCHAR(50) NOT NULL,
descripcion VARCHAR(50) NOT NULL,
presentacion VARCHAR(50) NOT NULL,
fecha timestamp NULL,
realizado VARCHAR(50) NOT NULL,
codigo VARCHAR(50) NOT NULL
);