-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: leandro.hopto.org    Database: jym604qy2slbxiy6
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `ISSUE`
--

LOCK TABLES `ISSUE` WRITE;
/*!40000 ALTER TABLE `ISSUE` DISABLE KEYS */;
/*!40000 ALTER TABLE `ISSUE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `daily`
--

LOCK TABLES `daily` WRITE;
/*!40000 ALTER TABLE `daily` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (7,'Etiqueta 1','Etiqueta 1','2018-05-17 12:16:35'),(8,'Etiqueta 2','Etiqueta 2','2018-05-17 12:16:45');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `member_day`
--

LOCK TABLES `member_day` WRITE;
/*!40000 ALTER TABLE `member_day` DISABLE KEYS */;
/*!40000 ALTER TABLE `member_day` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phase`
--

LOCK TABLES `phase` WRITE;
/*!40000 ALTER TABLE `phase` DISABLE KEYS */;
INSERT INTO `phase` VALUES (7,'Fase 1','Fase 1','2018-05-17 12:17:02'),(8,'Fase 2','Fase 2','2018-05-17 12:17:13');
/*!40000 ALTER TABLE `phase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `priority`
--

LOCK TABLES `priority` WRITE;
/*!40000 ALTER TABLE `priority` DISABLE KEYS */;
INSERT INTO `priority` VALUES (7,'Prioridad 1','Prioridad 1','2018-05-17 12:17:26'),(8,'Prioridad 2','Prioridad 2','2018-05-17 12:17:39');
/*!40000 ALTER TABLE `priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (7,'Rol 1','Rol 1','2018-05-17 12:18:25'),(8,'Rol 2','Rol 2','2018-05-17 12:18:33');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sprint`
--

LOCK TABLES `sprint` WRITE;
/*!40000 ALTER TABLE `sprint` DISABLE KEYS */;
/*!40000 ALTER TABLE `sprint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (7,'Estado 1','Estado 1','2018-05-17 12:18:49'),(8,'Estado 2','Estado 2','2018-05-17 12:18:58');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `substask`
--

LOCK TABLES `substask` WRITE;
/*!40000 ALTER TABLE `substask` DISABLE KEYS */;
/*!40000 ALTER TABLE `substask` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `version`
--

LOCK TABLES `version` WRITE;
/*!40000 ALTER TABLE `version` DISABLE KEYS */;
INSERT INTO `version` VALUES (7,'Version 1','Version 1','2018-05-17 12:15:30'),(8,'Version 2','Version 2','2018-05-17 12:15:48');
/*!40000 ALTER TABLE `version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `watcher-issue`
--

LOCK TABLES `watcher-issue` WRITE;
/*!40000 ALTER TABLE `watcher-issue` DISABLE KEYS */;
/*!40000 ALTER TABLE `watcher-issue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-17 12:22:30
