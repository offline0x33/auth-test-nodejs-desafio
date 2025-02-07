-- MySQL Script generated by MySQL Workbench
-- ter 24 dez 2024 19:53:13
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering
-- -----------------------------------------------------
-- Schema default_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `default_schema`;

USE `default_schema`;

-- -----------------------------------------------------
-- Table `default_schema`.`tb_usuarios`
-- -----------------------------------------------------
CREATE TABLE
  IF NOT EXISTS `default_schema`.`tb_usuarios` (
    `usuario_id` INT (11) NOT NULL AUTO_INCREMENT,
    `usuario_nome` VARCHAR(45) NOT NULL,
    `usuario_email` VARCHAR(240) NOT NULL,
    `usuario_senha` VARCHAR(256) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- Correção aqui: sem parênteses
    `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`usuario_id`)
  ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `default_schema`.`tb_token_blacklist`
-- -----------------------------------------------------
CREATE TABLE
  IF NOT EXISTS `default_schema`.`tb_token_blacklist` (
    `tokenblacklist_id` INT (11) NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(512) NOT NULL,
    `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`tokenblacklist_id`)
  ) ENGINE = InnoDB;