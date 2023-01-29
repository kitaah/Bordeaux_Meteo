SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `receiver`;
CREATE TABLE IF NOT EXISTS `receiver` (
  `Id_ReceiverIMEI` int NOT NULL,
  `Nom_Receiver` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Adresse_Receiver` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Mac_Receiver` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateCreation_Receiver` date NOT NULL,
  PRIMARY KEY (`Id_ReceiverIMEI`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `releve`;
CREATE TABLE IF NOT EXISTS `releve` (
  `Id_Releve` int NOT NULL AUTO_INCREMENT,
  `SignalRSSI_Releve` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `H_Releve` float NOT NULL,
  `T_Releve` float NOT NULL,
  `Batterie_Releve` float NOT NULL,
  `Date_Releve` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Heure_Releve` int DEFAULT NULL,
  `Nom_Sensor` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_Releve`),
  KEY `Releve_Sensor_FK` (`Nom_Sensor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `releve` (`Id_Releve`, `SignalRSSI_Releve`, `H_Releve`, `T_Releve`, `Batterie_Releve`, `Date_Releve`, `Heure_Releve`, `Nom_Sensor`) VALUES
(2, '75', 82, 16, 3.664, '2022-11-10 16:26:48', NULL, '62182233'),
(3, '67', 82, -11.6, 3.467, '2022-11-10 16:26:48', NULL, '06182660');

DROP TABLE IF EXISTS `sensor`;
CREATE TABLE IF NOT EXISTS `sensor` (
  `ID_Sensor` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateCreation_Sensor` date DEFAULT NULL,
  `Id_ReceiverIMEI` int DEFAULT NULL,
  PRIMARY KEY (`ID_Sensor`),
  KEY `Sensor_Receiver_FK` (`Id_ReceiverIMEI`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `sensor` (`ID_Sensor`, `DateCreation_Sensor`, `Id_ReceiverIMEI`) VALUES
('06182660', NULL, NULL),
('06190484', NULL, NULL),
('62182233', NULL, NULL);

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Id_Utilisateur` int NOT NULL AUTO_INCREMENT,
  `Nom_Utilisateur` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom_Utilisateur` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `AdresseMail_Utilisateur` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Adresse_Utilisateur` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password_Utilisateur` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_Utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `releve`
  ADD CONSTRAINT `Releve_Sensor_FK` FOREIGN KEY (`Nom_Sensor`) REFERENCES `sensor` (`ID_Sensor`);

ALTER TABLE `sensor`
  ADD CONSTRAINT `Sensor_Receiver_FK` FOREIGN KEY (`Id_ReceiverIMEI`) REFERENCES `receiver` (`Id_ReceiverIMEI`);
COMMIT;
