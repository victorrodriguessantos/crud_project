create database cadClient;
use cadClient;

create table Produtos(
    id_produto int primary key auto_increment,
    name_produto varchar(50) not null,
    descricao varchar(100)
);

create table Clientes(
    id_cliente int primary key auto_increment,
    id_produto int,
    name_empresa varchar(50),
    name_cliente varchar(50) not null,
    cpf_cnpj varchar(20) not null,
    email varchar(20),
    phone varchar(10),
    endereco varchar(100),
    status_user boolean not null

    CONSTRAINT fk_id_produto FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);

create table Usuarios(
    id_usuario int primary key auto_increment,
    name_usuario varchar(20) not null,
    user varchar(20) not null,
    pass varchar(20) not null,
);