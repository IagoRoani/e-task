create database E_Task;
use E_Task;

create table Cliente (
id_Cliente INT PRIMARY KEY IDENTITY(1,1),
email VARCHAR(50) UNIQUE,
nome VARCHAR(20) NOT NULL,
sobrenome VARCHAR(40) NOT NULL,
senha VARCHAR(16) NOT NULL
);

create table Maquina(
id_Maquina INT PRIMARY KEY IDENTITY(1,1),
nome_Maquina VARCHAR(30) NOT NULL,
sistema_Operacional VARCHAR(35) NOT NULL,
tipo_sistema VARCHAR(10) NOT NULL,

cpu_modelo VARCHAR(50) NOT NULL,
memoria_ram_total DECIMAL(5,1) NOT NULL,
memoria_ram_utilizavel DECIMAL(5,1) NOT NULL,
tipo_memoria_ram VARCHAR(15),
velocidade_memoria_ram decimal(5,1),

hd_modelo VARCHAR(50) NOT NULL,
hd_disco VARCHAR(50) NOT NULL,
hd_e_tipo VARCHAR(15) NOT NULL,
hd_utilizavel INT NOT NULL,
hd_disponivel INT NOT NULL,

modelo_gpu VARCHAR(50) NOT NULL,
memoria_gpu DECIMAL(5,1) NOT NULL,
version_gpu VARCHAR(25) NOT NULL,
fk_Cliente INT,
foreign key (fk_Cliente) references Cliente(id_Cliente)
);

create table Dashboard (
id_Registro INT PRIMARY KEY IDENTITY(1,1),
data_Registro VARCHAR(100) NOT NULL,

desempenho_cpu INT NOT NULL,
velocidade_cpu DECIMAL(5,1),
threands INT NOT NULL,
processos INT NOT NULL,

desempenho_ram INT NOT NULL,
disponivel_ram DECIMAL(5,1),

ocupado_hd INT NOT NULL,
tempo_hd INT NOT NULL,

desempenho_GPU INT NOT NULL,

fk_Maquina INT,
foreign key (fk_Maquina) references Maquina(id_Maquina)
);

create table Jogos (
id_Jogo INT PRIMARY KEY IDENTITY(1,1),
nome_Jogo VARCHAR(60) NOT NULL,
ano_Lanc INT,
preco DECIMAL(10,2) NOT NULL,
fk_Cliente INT,
foreign key (fk_Cliente) references Cliente(id_Cliente)
);