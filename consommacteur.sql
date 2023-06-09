-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: consommacteur
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `areas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `houseId` int DEFAULT NULL,
  `parentAreaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `houseId` (`houseId`),
  KEY `parentAreaId` (`parentAreaId`),
  CONSTRAINT `areas_ibfk_1` FOREIGN KEY (`houseId`) REFERENCES `houses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `areas_ibfk_2` FOREIGN KEY (`parentAreaId`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (1,'Cuisine','2023-05-02 18:17:11','2023-05-02 18:17:11',1,NULL),(2,'Salle ├á manger','2023-05-02 18:17:26','2023-05-02 18:17:26',1,NULL),(3,'Salon','2023-05-02 18:17:32','2023-05-02 18:17:32',1,NULL),(4,'Chambre Lisa','2023-05-02 18:18:44','2023-05-02 18:18:44',1,NULL),(5,'Chambre Bart','2023-05-02 18:18:51','2023-05-02 18:18:51',1,NULL),(6,'Chambre parents','2023-05-02 18:19:12','2023-05-02 18:19:12',1,NULL),(7,'Chambre Maggie','2023-05-02 18:19:18','2023-05-02 18:19:18',1,NULL),(8,'Jardin','2023-05-02 18:24:13','2023-05-02 18:24:13',2,NULL),(9,'Terrasse','2023-05-02 18:24:18','2023-05-02 18:24:18',2,NULL),(10,'Chambre parents','2023-05-02 18:24:45','2023-05-02 18:24:45',2,NULL),(12,'Chambre enfants','2023-05-02 18:25:57','2023-05-02 18:25:57',2,NULL),(13,'Cuisine','2023-05-02 18:26:04','2023-05-02 18:26:04',2,NULL),(14,'Cuisine','2023-05-02 18:31:32','2023-05-02 18:31:32',3,NULL),(15,'Garage','2023-05-02 18:31:37','2023-05-02 18:31:37',3,NULL),(16,'Chambre Malcolm','2023-05-02 18:31:50','2023-05-02 18:31:50',3,NULL),(17,'Chambre parents','2023-05-02 18:31:54','2023-05-02 18:31:54',3,NULL),(18,'Jardin','2023-05-02 18:32:01','2023-05-02 18:32:01',3,NULL);
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `houses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `houses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` VALUES (1,'Maison Simpson','2023-05-02 18:08:58','2023-05-02 18:08:58',1),(2,'Maison White','2023-05-02 18:09:05','2023-05-02 18:09:05',1),(3,'Maison Malcolm','2023-05-02 18:09:13','2023-05-02 18:09:13',1);
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `measurements`
--

DROP TABLE IF EXISTS `measurements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `measurements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `unit` varchar(255) NOT NULL,
  `value` float NOT NULL,
  `type` varchar(255) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sensorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sensorId` (`sensorId`),
  CONSTRAINT `measurements_ibfk_1` FOREIGN KEY (`sensorId`) REFERENCES `sensors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measurements`
--

LOCK TABLES `measurements` WRITE;
/*!40000 ALTER TABLE `measurements` DISABLE KEYS */;
/*!40000 ALTER TABLE `measurements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scenarios`
--

DROP TABLE IF EXISTS `scenarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `scenarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'stopped',
  `startedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `scenarios_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scenarios`
--

LOCK TABLES `scenarios` WRITE;
/*!40000 ALTER TABLE `scenarios` DISABLE KEYS */;
INSERT INTO `scenarios` VALUES (1,'Homer cuisine un donuts','stopped',NULL,'2023-05-02 18:10:08','2023-05-02 18:10:08',1),(2,'Walter nettoie sa piscine','stopped',NULL,'2023-05-02 18:10:47','2023-05-02 18:10:47',1),(3,'Malcolm pr├®pare une b├¬tise ','stopped',NULL,'2023-05-02 18:16:50','2023-05-02 18:16:50',1);
/*!40000 ALTER TABLE `scenarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scenariosteps`
--

DROP TABLE IF EXISTS `scenariosteps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `scenariosteps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `executedAt` datetime DEFAULT NULL,
  `executionSecondDelay` int DEFAULT NULL,
  `unit` varchar(255) NOT NULL,
  `value` float NOT NULL DEFAULT '0',
  `type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `scenarioId` int DEFAULT NULL,
  `sensorId` int DEFAULT NULL,
  `nextStepId` int DEFAULT NULL,
  `previousStepId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `scenarioId` (`scenarioId`),
  KEY `sensorId` (`sensorId`),
  KEY `nextStepId` (`nextStepId`),
  KEY `previousStepId` (`previousStepId`),
  CONSTRAINT `scenariosteps_ibfk_1` FOREIGN KEY (`scenarioId`) REFERENCES `scenarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `scenariosteps_ibfk_2` FOREIGN KEY (`sensorId`) REFERENCES `sensors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `scenariosteps_ibfk_3` FOREIGN KEY (`nextStepId`) REFERENCES `scenariosteps` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `scenariosteps_ibfk_4` FOREIGN KEY (`previousStepId`) REFERENCES `scenariosteps` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scenariosteps`
--

LOCK TABLES `scenariosteps` WRITE;
/*!40000 ALTER TABLE `scenariosteps` DISABLE KEYS */;
INSERT INTO `scenariosteps` VALUES (1,NULL,0,'kwh',0,'consumption','2023-05-02 18:50:59','2023-05-02 18:51:26',1,13,2,NULL),(2,NULL,0,'kwh',3,'consumption','2023-05-02 18:51:26','2023-05-02 18:51:38',1,14,3,1),(3,NULL,0,'kwh',0,'consumption','2023-05-02 18:51:38','2023-05-02 18:51:54',1,15,4,2),(4,NULL,0,'kwh',0,'consumption','2023-05-02 18:51:54','2023-05-02 18:52:00',1,12,5,3),(5,NULL,0,'kwh',0,'consumption','2023-05-02 18:52:00','2023-05-02 18:56:52',1,17,6,4),(6,NULL,0,'kwh',0,'consumption','2023-05-02 18:56:52','2023-05-02 18:57:00',1,11,7,5),(7,NULL,0,'kwh',0,'consumption','2023-05-02 18:57:00','2023-05-02 18:57:49',1,18,8,6),(8,NULL,0,'kwh',0,'consumption','2023-05-02 18:57:49','2023-05-02 18:58:32',1,16,9,7),(9,NULL,0,'kwh',2,'consumption','2023-05-02 18:58:32','2023-05-02 18:58:50',1,13,10,8),(10,NULL,10,'kwh',4,'consumption','2023-05-02 18:58:50','2023-05-02 18:59:05',1,14,11,9),(11,NULL,10,'kwh',3,'consumption','2023-05-02 18:59:05','2023-05-02 18:59:26',1,14,12,10),(12,NULL,5,'kwh',4,'consumption','2023-05-02 18:59:26','2023-05-02 18:59:40',1,15,13,11),(13,NULL,10,'kwh',0,'consumption','2023-05-02 18:59:40','2023-05-02 19:00:01',1,13,14,12),(14,NULL,15,'kwh',2,'consumption','2023-05-02 19:00:01','2023-05-02 19:00:12',1,11,15,13),(15,NULL,5,'kwh',2,'consumption','2023-05-02 19:00:11','2023-05-02 19:00:37',1,18,16,14),(16,NULL,120,'kwh',2,'consumption','2023-05-02 19:00:37','2023-05-02 19:00:48',1,13,17,15),(17,NULL,10,'kwh',0,'consumption','2023-05-02 19:00:48','2023-05-02 19:01:13',1,15,18,16),(18,NULL,10,'kwh',2,'consumption','2023-05-02 19:01:13','2023-05-02 19:01:25',1,12,19,17),(19,NULL,0,'kwh',3,'consumption','2023-05-02 19:01:25','2023-05-02 19:01:25',1,17,NULL,18),(20,NULL,0,'kwh',1,'consumption','2023-05-02 19:15:30','2023-05-02 19:15:54',2,25,21,NULL),(21,NULL,0,'kwh',0,'consumption','2023-05-02 19:15:54','2023-05-02 19:16:22',2,22,22,20),(22,NULL,0,'kwh',0,'consumption','2023-05-02 19:16:22','2023-05-02 19:16:27',2,20,23,21),(23,NULL,0,'kwh',0,'consumption','2023-05-02 19:16:27','2023-05-02 19:16:40',2,19,24,22),(24,NULL,0,'kwh',0,'consumption','2023-05-02 19:16:40','2023-05-02 19:17:02',2,26,25,23),(25,NULL,10,'kwh',0,'consumption','2023-05-02 19:17:02','2023-05-02 19:19:13',2,25,26,24),(26,NULL,20,'kwh',1,'consumption','2023-05-02 19:19:13','2023-05-02 19:19:25',2,22,27,25),(27,NULL,0,'kwh',1,'consumption','2023-05-02 19:19:25','2023-05-02 19:19:36',2,19,28,26),(28,NULL,0,'kwh',4,'consumption','2023-05-02 19:19:36','2023-05-02 19:19:51',2,20,29,27),(29,NULL,120,'kwh',0,'consumption','2023-05-02 19:19:51','2023-05-02 19:19:59',2,20,30,28),(30,NULL,0,'kwh',0,'consumption','2023-05-02 19:19:59','2023-05-02 19:20:20',2,19,31,29),(31,NULL,10,'kwh',0,'consumption','2023-05-02 19:20:20','2023-05-02 19:20:54',2,22,32,30),(32,NULL,20,'kwh',1,'consumption','2023-05-02 19:20:54','2023-05-02 19:21:23',2,26,33,31),(33,NULL,20,'kwh',0,'consumption','2023-05-02 19:21:23','2023-05-02 19:21:23',2,26,NULL,32),(34,NULL,0,'kwh',0,'consumption','2023-05-02 19:33:04','2023-05-02 19:33:17',3,31,35,NULL),(35,NULL,0,'kwh',0,'consumption','2023-05-02 19:33:17','2023-05-02 19:33:27',3,34,36,34),(36,NULL,0,'kwh',0,'consumption','2023-05-02 19:33:27','2023-05-02 19:33:48',3,36,37,35),(37,NULL,0,'kwh',0,'consumption','2023-05-02 19:33:48','2023-05-02 19:33:54',3,42,38,36),(38,NULL,0,'kwh',0,'consumption','2023-05-02 19:33:54','2023-05-02 19:34:01',3,44,39,37),(39,NULL,0,'kwh',0,'consumption','2023-05-02 19:34:01','2023-05-02 19:34:09',3,45,40,38),(40,NULL,0,'kwh',0,'consumption','2023-05-02 19:34:09','2023-05-02 19:34:14',3,40,41,39),(41,NULL,0,'kwh',0,'consumption','2023-05-02 19:34:14','2023-05-02 19:34:19',3,41,42,40),(42,NULL,0,'kwh',0,'consumption','2023-05-02 19:34:19','2023-05-02 19:36:28',3,39,43,41),(43,NULL,5,'kwh',4,'consumption','2023-05-02 19:36:28','2023-05-02 19:36:37',3,31,44,42),(44,NULL,5,'kwh',4,'consumption','2023-05-02 19:36:37','2023-05-02 19:36:50',3,34,45,43),(45,NULL,10,'kwh',4,'consumption','2023-05-02 19:36:50','2023-05-02 19:40:07',3,36,46,44),(46,NULL,10,'kwh',1,'consumption','2023-05-02 19:40:07','2023-05-02 19:40:52',3,36,47,45),(47,NULL,10,'kwh',1,'consumption','2023-05-02 19:40:52','2023-05-02 19:41:01',3,42,48,46),(48,NULL,10,'kwh',4,'consumption','2023-05-02 19:41:01','2023-05-02 19:41:07',3,44,49,47),(49,NULL,10,'kwh',4,'consumption','2023-05-02 19:41:07','2023-05-02 19:41:25',3,45,50,48),(50,NULL,0,'kwh',1,'consumption','2023-05-02 19:41:25','2023-05-02 19:41:31',3,40,51,49),(51,NULL,0,'kwh',1,'consumption','2023-05-02 19:41:31','2023-05-02 19:41:40',3,41,52,50),(52,NULL,5,'kwh',1,'consumption','2023-05-02 19:41:40','2023-05-02 19:41:40',3,39,NULL,51);
/*!40000 ALTER TABLE `scenariosteps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sensors`
--

DROP TABLE IF EXISTS `sensors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `sensors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `areaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `areaId` (`areaId`),
  CONSTRAINT `sensors_ibfk_1` FOREIGN KEY (`areaId`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensors`
--

LOCK TABLES `sensors` WRITE;
/*!40000 ALTER TABLE `sensors` DISABLE KEYS */;
INSERT INTO `sensors` VALUES (1,'Lampe de chevet','2023-05-02 18:19:41','2023-05-02 18:19:41',4),(2,'Lampe principale','2023-05-02 18:19:50','2023-05-02 18:19:50',4),(3,'Lampe de chevet','2023-05-02 18:20:02','2023-05-02 18:20:02',5),(4,'Lampe principale','2023-05-02 18:20:08','2023-05-02 18:20:08',5),(5,'Lampe principale','2023-05-02 18:20:15','2023-05-02 18:20:15',6),(6,'Lampe de chevet Marge','2023-05-02 18:20:21','2023-05-02 18:20:21',6),(7,'Lampe de chevet Homer','2023-05-02 18:20:25','2023-05-02 18:20:25',6),(8,'TV','2023-05-02 18:20:38','2023-05-02 18:20:38',6),(9,'Lampe principale','2023-05-02 18:20:46','2023-05-02 18:20:46',7),(10,'Lampe de berceau','2023-05-02 18:20:53','2023-05-02 18:20:53',7),(11,'Lumi├¿re principale','2023-05-02 18:21:07','2023-05-02 18:21:07',2),(12,'Lumi├¿re principale','2023-05-02 18:21:09','2023-05-02 18:21:09',3),(13,'Lumi├¿re principale','2023-05-02 18:21:12','2023-05-02 18:21:12',1),(14,'R├®frig├®rateur','2023-05-02 18:21:25','2023-05-02 18:21:25',1),(15,'Four','2023-05-02 18:21:36','2023-05-02 18:21:36',1),(16,'Plaques de cuisson','2023-05-02 18:22:05','2023-05-02 18:22:05',1),(17,'TV','2023-05-02 18:22:11','2023-05-02 18:22:11',3),(18,'Cha├«ne HIFI','2023-05-02 18:22:27','2023-05-02 18:22:27',2),(19,'Lumi├¿res piscine','2023-05-02 18:26:20','2023-05-02 18:26:20',8),(20,'Pompe piscine','2023-05-02 18:26:33','2023-05-02 18:26:33',8),(21,'Lumi├¿re ext├®rieure','2023-05-02 18:26:45','2023-05-02 18:26:45',8),(22,'Lumi├¿re','2023-05-02 18:26:57','2023-05-02 18:26:57',9),(23,'Barbecue electrique','2023-05-02 18:27:05','2023-05-02 18:27:05',9),(24,'Lampe de chevet','2023-05-02 18:27:16','2023-05-02 18:27:16',10),(25,'Lumi├¿re principale','2023-05-02 18:27:22','2023-05-02 18:27:22',10),(26,'Lumi├¿re principale','2023-05-02 18:27:34','2023-05-02 18:27:34',13),(27,'Four','2023-05-02 18:27:40','2023-05-02 18:27:40',13),(28,'R├®frig├®rateur','2023-05-02 18:27:54','2023-05-02 18:27:54',13),(29,'Lampe de chevet','2023-05-02 18:29:23','2023-05-02 18:29:23',12),(30,'Radio-r├®veil','2023-05-02 18:30:07','2023-05-02 18:30:07',12),(31,'Four','2023-05-02 18:33:41','2023-05-02 18:33:41',14),(32,'Lumi├¿re','2023-05-02 18:34:08','2023-05-02 18:34:08',14),(33,'Plaques chauffantes','2023-05-02 18:34:26','2023-05-02 18:34:26',14),(34,'Cafeti├¿re','2023-05-02 18:34:32','2023-05-02 18:34:32',14),(35,'Porte automatique','2023-05-02 18:34:41','2023-05-02 18:34:41',15),(36,'Lumi├¿re','2023-05-02 18:35:14','2023-05-02 18:35:14',15),(37,'Lumi├¿re','2023-05-02 18:36:38','2023-05-02 18:36:38',16),(38,'Lampe de chevet','2023-05-02 18:36:46','2023-05-02 18:36:46',16),(39,'Lumi├¿re','2023-05-02 18:36:52','2023-05-02 18:36:52',17),(40,'Lampe de chevet droite','2023-05-02 18:37:00','2023-05-02 18:37:00',17),(41,'Lampe de chevet gauche','2023-05-02 18:37:03','2023-05-02 18:37:03',17),(42,'Lumi├¿res all├®e','2023-05-02 18:37:10','2023-05-02 18:37:10',18),(44,'Barbecue ├®lectrique','2023-05-02 18:39:15','2023-05-02 18:39:15',18),(45,'Tondeuse ├®lectrique','2023-05-02 18:39:22','2023-05-02 18:39:22',18);
/*!40000 ALTER TABLE `sensors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'walter.white@heisenberg.com','Walter','White','$2b$10$RSoaQu2Tx3R8XFqg48yLmutieingJuc3HqDaNuzSMKEfPARgu5Fmq','2023-05-02 18:01:25','2023-05-02 18:01:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02 22:04:02
