create database eTask;
use eTask;

create table Cliente (
idCliente int primary key auto_increment,
nome varchar(20),
sobrenome varchar(40),
eMail varchar(50),
senha varchar(16),
qtd_Maquinas int
); 

create table Dashboard (
nºMaquina int primary key auto_increment,
nome_Do_Usuario varchar(25),
fk_Cliente int,
foreign key (fk_Cliente) references idCliente(Cliente)
);

create table Maquinas (
idMaquina int,
nome_Maquina varchar(30),
sistema_Operacional varchar(35),
dados_CPU decimal(5,2),
memoria_RAM decimal(5,2),
memoria_HD decimal(5,2),
fk_Dashboard int,
foreign key (idMaquinas, fk_Dashboard) references nºMaquina(Dashboard)
);