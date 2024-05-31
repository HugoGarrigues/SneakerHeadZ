-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 31 mai 2024 à 10:09
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sneakerhead`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `IdAvis` int NOT NULL AUTO_INCREMENT,
  `Contenu` text CHARACTER SET latin1 COLLATE latin1_bin,
  `Date` date DEFAULT NULL,
  `IdUtilisateur` int DEFAULT NULL,
  `IdSneaker` int DEFAULT NULL,
  PRIMARY KEY (`IdAvis`),
  KEY `IdUtilisateur` (`IdUtilisateur`),
  KEY `IdSneaker` (`IdSneaker`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `IdUtilisateur` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `Prenom` varchar(255) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `MotDePasse` varbinary(255) NOT NULL,
  PRIMARY KEY (`IdUtilisateur`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Structure de la table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
CREATE TABLE IF NOT EXISTS `wishlist` (
  `IdWishlist` int NOT NULL AUTO_INCREMENT,
  `IdUtilisateur` int NOT NULL,
  `IdSneaker` int NOT NULL,
  PRIMARY KEY (`IdWishlist`),
  KEY `fk_wishlist_utilisateur` (`IdUtilisateur`),
  KEY `idx_wishlist_sneaker` (`IdSneaker`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`IdUtilisateur`) REFERENCES `utilisateur` (`IdUtilisateur`),
  ADD CONSTRAINT `avis_ibfk_2` FOREIGN KEY (`IdSneaker`) REFERENCES `wishlist` (`IdSneaker`);

--
-- Contraintes pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`IdUtilisateur`) REFERENCES `utilisateur` (`IdUtilisateur`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
