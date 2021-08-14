# SCRIPT
create database yiiDatabase character set UTF8mb4 collate utf8mb4_bin;

use yiiDatabase;

create table registrations (
	_id int(11) primary key auto_increment,
    name varchar(100) not null,
    email varchar(255) not null,
    cpf varchar(11) not null,
    registrationNumber varchar(11) not null,
    birthDate datetime not null,
    creteadAt  datetime not null,
    updateAt datetime null
);

# DATA
INSERT INTO `yiidatabase`.`registrations` (`name`, `email`, `cpf`, `registrationNumber`, `birthDate`, `creteadAt`) VALUES ('Teste', 'teste@email.com', '01234567890', '01234567890', '1990-10-20', '2021-08-14');
