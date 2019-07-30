-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: scrumapp.hopto.org    Database: tesis
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `comment`
--
drop database `tesis`;
create database `tesis`;
use `tesis`;

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id_issue` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily`
--

DROP TABLE IF EXISTS `daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `sprint` int(11) DEFAULT NULL,
  `id_project` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily`
--

LOCK TABLES `daily` WRITE;
/*!40000 ALTER TABLE `daily` DISABLE KEYS */;
INSERT INTO `daily` VALUES (1,'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg','2019-05-06 00:00:00','Leandro','Cocchi','lecocchi',1,3),(2,'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg','2019-05-11 00:00:00','Leandro','Cocchi','lecocchi',2,0),(3,'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg','2019-05-12 00:00:00','Leandro','Cocchi','lecocchi',3,5),(5,'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg','2019-07-26 03:00:00','admin','admin','admin',7,3),(6,'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg','2019-07-26 03:00:00','admin','admin','admin',9,4);
/*!40000 ALTER TABLE `daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_item`
--

DROP TABLE IF EXISTS `daily_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `today` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) NOT NULL,
  `yesterday` varchar(255) DEFAULT NULL,
  `daily_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK39actcvpw6dss0ahktik1691h` (`daily_id`),
  CONSTRAINT `FK39actcvpw6dss0ahktik1691h` FOREIGN KEY (`daily_id`) REFERENCES `daily` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_item`
--

LOCK TABLES `daily_item` WRITE;
/*!40000 ALTER TABLE `daily_item` DISABLE KEYS */;
INSERT INTO `daily_item` VALUES (1,NULL,'2019-05-06 00:00:00','admin','admin','','admin','',1),(2,NULL,'2019-05-06 00:00:00','Leandro','Cocchi','','lecocchi','',1),(3,NULL,'2019-05-06 00:00:00','Fernando','Calviño','','fcalvino','',1),(4,NULL,'2019-05-11 00:00:00','admin','admin','','admin','',2),(5,NULL,'2019-05-11 00:00:00','Leandro','Cocchi','','lecocchi','',2),(6,NULL,'2019-05-12 00:00:00','Leandro','Cocchi','Espero que salga bien','lecocchi','Es una prueba',3),(10,NULL,'2019-07-26 03:00:00','admin','admin','fdafsdaf','admin','fdafs',5),(11,NULL,'2019-07-26 03:00:00','Leandro','Cocchi','fdafasfs','lecocchi','fdafas',5),(12,NULL,'2019-07-26 03:00:00','Fernando','Calviño','','fcalvino','',5),(13,NULL,'2019-07-26 03:00:00','Fernando','Calviño','','fcalvino','',6),(14,NULL,'2019-07-26 03:00:00','Esteban','Gimenez','','Egimenez','',6);
/*!40000 ALTER TABLE `daily_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_user`
--

DROP TABLE IF EXISTS `daily_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `daily_id` int(11) NOT NULL,
  `today` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `yesterday` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_user`
--

LOCK TABLES `daily_user` WRITE;
/*!40000 ALTER TABLE `daily_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assignee` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `backlog` bit(1) NOT NULL,
  `created` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `estimated` int(11) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `phase` varchar(255) DEFAULT NULL,
  `planned_end` datetime DEFAULT NULL,
  `planned_start` datetime DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `remaining` int(11) DEFAULT NULL,
  `reporter` varchar(255) DEFAULT NULL,
  `resolved` datetime DEFAULT NULL,
  `id_sprint` int(11) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `updated` datetime NOT NULL,
  `version` varchar(255) DEFAULT NULL,
  `id_watcher` int(11) DEFAULT NULL,
  `id_project` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
INSERT INTO `issue` VALUES (1,'admin admin',NULL,_binary '\0','2019-05-13 08:53:33','Se creará el módulo correspondiente a la administración del backlog',_binary '',5,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-13 16:11:23',1,'FINALIZADO','Crear Backlog','2019-05-13 16:11:23','1.0.1',NULL,0),(2,'admin admin',NULL,_binary '\0','2019-05-13 08:56:58','Se desarrollará la función para la creación de issues en el backlog',_binary '',8,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-13 16:11:42',1,'FINALIZADO','Creación de issues en Backlog','2019-05-13 16:11:42','1.0.1',NULL,0),(3,'admin admin',NULL,_binary '\0','2019-05-13 08:58:40','Se desarrollará las funcionalidades para modificar un issue que está en el backlog',_binary '',8,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-13 16:12:14',1,'FINALIZADO','Modificación de issues en Backlog ','2019-05-13 16:12:14','1.0.2',NULL,0),(4,'admin admin',NULL,_binary '\0','2019-05-13 08:59:56','Se desarrollará un menú para enviar un issue al Sprint activo',_binary '',3,NULL,NULL,NULL,NULL,'BAJA',NULL,'admin admin','2019-05-13 16:12:29',1,'FINALIZADO','Creación del menú para enviar un issue a sprint','2019-05-13 16:12:29','1.0.2',NULL,0),(5,'admin admin',NULL,_binary '\0','2019-05-13 09:00:57','Se desarrollará una funcionalidad para eliminar un issue desde el Backlog',_binary '',5,NULL,NULL,NULL,NULL,'BAJA',NULL,'admin admin','2019-05-13 16:12:56',1,'FINALIZADO','Eliminar un issue en Backlog','2019-05-13 16:12:56','1.0.1',NULL,0),(6,'admin admin',NULL,_binary '\0','2019-05-13 16:29:30','Creación del módulo de Sprint',_binary '',8,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-13 16:35:20',2,'FINALIZADO','Crear Sprint','2019-05-13 16:35:20','1.0.1',NULL,0),(7,'admin admin',NULL,_binary '','2019-05-13 16:30:55','Se desarrollará la creación de issues en el sprint activo',_binary '',5,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-13 16:35:41',NULL,'CREADO','Creación de issues en el Sprint activo','2019-07-27 04:24:23','1.0.1',NULL,1),(8,'admin admin',NULL,_binary '\0','2019-05-13 16:32:05','Se desarrollará para la modificación del issue en el Sprint activo',_binary '',5,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-13 16:36:04',2,'FINALIZADO','Modificación de issues en el Sprint activo','2019-05-13 16:36:04','1.0.1',NULL,0),(9,'admin admin',NULL,_binary '\0','2019-05-13 16:33:08','Se desarrollará el menú para enviar un issue al backlog',_binary '',3,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-13 16:38:20',2,'FINALIZADO','Creación del menú para enviar un issue al backlog','2019-05-13 16:38:20','1.0.1',NULL,0),(10,'admin admin',NULL,_binary '\0','2019-05-13 16:34:12','Se desarrollará para poder eliminar un issue del Sprint activo',_binary '',3,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-13 16:38:41',2,'FINALIZADO','Eliminar un issue en el Sprint activo','2019-05-13 16:38:41','1.0.1',NULL,0),(11,'admin admin',NULL,_binary '\0','2019-05-13 16:44:32','Se creará el módulo para la creación de Dailies',_binary '',8,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-13 16:49:03',3,'FINALIZADO','Crear módulo de daily','2019-05-13 16:49:03','1.0.2',NULL,0),(12,'admin admin',NULL,_binary '\0','2019-05-13 16:46:10','Se desarrollará la funcionalidad para cargar usuarios a una daily',_binary '',5,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-13 16:49:25',3,'FINALIZADO','Cargar usuarios a la daily','2019-05-13 16:49:25','1.0.2',NULL,0),(13,'admin admin',NULL,_binary '\0','2019-05-13 16:47:44','Se creará la funcionalidad para cargar los campos de lo que se hizo ayer y lo que se va a hacer hoy',_binary '',5,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-13 16:49:50',3,'FINALIZADO','Cargar los que se hizo ayer y lo de hoy','2019-05-13 16:49:50','1.0.2',NULL,0),(14,'admin admin',NULL,_binary '\0','2019-05-14 08:56:31','Se desarrollará el módulo reportes',_binary '',8,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-14 09:00:14',4,'FINALIZADO','Creación del módulo Reportes','2019-05-14 09:00:14','1.0.2',NULL,0),(15,'admin admin',NULL,_binary '\0','2019-05-14 08:57:41','Se desarrollará el reporte para mostrar el Velocity chart de los diferentes Sprints',_binary '',5,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-14 09:02:38',4,'FINALIZADO','Creación del reporte Velocity Chart','2019-05-14 09:02:38','1.0.2',NULL,0),(16,'admin admin',NULL,_binary '\0','2019-05-14 08:58:55','Se desarrollará el reporte correspondiente al Sprint Report',_binary '',5,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-14 09:02:56',4,'FINALIZADO','Creación del reporte Sprint Report','2019-05-14 09:02:56','1.0.2',NULL,0),(17,'admin admin',NULL,_binary '\0','2019-05-14 09:11:07','Se desarrollará un módulo para mostrar los datos de mi perfil.',_binary '',5,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-14 09:12:46',5,'FINALIZADO','Creación del módulo Mi Perfil','2019-05-14 09:12:46','1.0.1',NULL,0),(18,'admin admin',NULL,_binary '\0','2019-05-14 09:12:06','Se creará un módulo para la administración de las diferentes versiones',_binary '',5,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-14 09:13:04',5,'FINALIZADO','Creación del módulo de Versiones','2019-05-14 09:13:04','1.0.1',NULL,0),(19,'admin admin',NULL,_binary '\0','2019-05-14 09:14:51','Se desarrollará el módulo de usuarios',_binary '',5,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin','2019-05-14 09:17:11',6,'FINALIZADO','Creación del módulo de Usuarios','2019-05-14 09:17:11','1.0.5',NULL,0),(20,'admin admin',NULL,_binary '\0','2019-05-14 09:15:40','Se desarrollará el alta de usuarios',_binary '',5,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-14 09:17:32',6,'FINALIZADO','Alta de Usuarios','2019-05-14 09:17:32','1.0.5',NULL,0),(21,'admin admin',NULL,_binary '\0','2019-05-14 09:16:29','Se desarrollará la baja de usuarios',_binary '',3,NULL,NULL,NULL,NULL,'MEDIA',NULL,'admin admin','2019-05-14 09:18:14',6,'FINALIZADO','Baja de Usuario','2019-05-14 09:18:14','1.0.5',NULL,0),(22,NULL,NULL,_binary '\0','2019-06-03 10:43:19',NULL,_binary '',2,NULL,NULL,NULL,NULL,'ALTA',NULL,'admin admin',NULL,10,'CREADO','Primer issue','2019-07-27 03:38:53','1.1.3',NULL,3);
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_daily`
--

DROP TABLE IF EXISTS `member_daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_daily` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_daily` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `today` varchar(255) DEFAULT NULL,
  `yesterday` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_daily`
--

LOCK TABLES `member_daily` WRITE;
/*!40000 ALTER TABLE `member_daily` DISABLE KEYS */;
/*!40000 ALTER TABLE `member_daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phase`
--

DROP TABLE IF EXISTS `phase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phase`
--

LOCK TABLES `phase` WRITE;
/*!40000 ALTER TABLE `phase` DISABLE KEYS */;
/*!40000 ALTER TABLE `phase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `priority`
--

DROP TABLE IF EXISTS `priority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `priority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `priority`
--

LOCK TABLES `priority` WRITE;
/*!40000 ALTER TABLE `priority` DISABLE KEYS */;
INSERT INTO `priority` VALUES (1,'2019-02-17 12:48:06','Prioridad ALTA','ALTA'),(2,'2019-02-17 12:48:17','Prioridad MEDIA','MEDIA'),(3,'2019-02-17 12:49:21','Prioridad BAJA','BAJA');
/*!40000 ALTER TABLE `priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `current_sprint` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'DaVinci Tesis','DaVinci Tesis proyecto',2),(2,'Banco Comafi','Proyecto Banco Comafi',2);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'2019-02-15 09:46:26','DESARROLLADOR','DESARROLADOR'),(2,'2019-02-15 09:47:34','SCRUM MASTER','SCRUM MASTER'),(3,'2019-02-15 09:47:53','ADMINISTRADOR','ADMINISTRADOR');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sprint`
--

DROP TABLE IF EXISTS `sprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sprint` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `date_from` datetime NOT NULL,
  `date_to` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id_project` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sprint`
--

LOCK TABLES `sprint` WRITE;
/*!40000 ALTER TABLE `sprint` DISABLE KEYS */;
INSERT INTO `sprint` VALUES (1,'2019-05-13 08:50:38','2019-01-13 00:00:00','2019-01-26 00:00:00',NULL,_binary '',_binary '\0','Sprint 1',1),(3,'2019-05-13 16:42:39','2019-02-10 00:00:00','2019-02-23 00:00:00',NULL,_binary '',_binary '\0','Sprint 2',1),(4,'2019-05-14 08:59:30','2019-02-24 00:00:00','2019-03-16 00:00:00',NULL,_binary '',_binary '\0','Sprint 1',2),(5,'2019-05-14 09:07:00','2019-03-17 00:00:00','2019-04-06 00:00:00',NULL,_binary '',_binary '\0','Sprint 2',2);
/*!40000 ALTER TABLE `sprint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'2019-02-17 12:53:30','Estado CREADO','CREADO'),(2,'2019-02-17 12:53:49','Estado EN PROGRESO','EN PROGRESO'),(3,'2019-02-17 12:54:02','Estado BLOQUEADO','BLOQUEADO'),(4,'2019-02-17 12:54:18','Estado FINALIZADO','FINALIZADO');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_task`
--

DROP TABLE IF EXISTS `sub_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `id_assignee` int(11) DEFAULT NULL,
  `id_phase` int(11) DEFAULT NULL,
  `id_reporter` int(11) DEFAULT NULL,
  `id_state` int(11) DEFAULT NULL,
  `id_task` int(11) DEFAULT NULL,
  `resolved` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_task`
--

LOCK TABLES `sub_task` WRITE;
/*!40000 ALTER TABLE `sub_task` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `is_network` bit(1) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_rol` int(11) NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,'2019-02-17 20:31:22',12345678,'admin',_binary '','admin',_binary '\0','admin','admin',3,'2019-07-27 05:27:31','admin'),(2,NULL,'2019-05-05 19:45:36',NULL,'leju1712@gmail.com',_binary '','Leandro',_binary '','Cocchi','',3,'2019-05-05 23:02:05','lecocchi'),(3,NULL,'2019-05-06 00:56:28',NULL,'fernando.calvinio@gmail.com',_binary '','Fernando',_binary '','Calviño','',2,'2019-05-06 00:56:28','fcalvino'),(4,NULL,'2019-05-11 14:44:07',NULL,'estebanngimenez@gmail.com',_binary '','Esteban',_binary '','Gimenez','',3,'2019-05-11 14:44:07','Egimenez'),(5,NULL,'2019-05-11 14:51:55',NULL,'cgonzalez@gmail.com',_binary '','Camilo',_binary '\0','Gonzalez','1234',2,'2019-05-11 14:52:10','Cgonzalez');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_project`
--

DROP TABLE IF EXISTS `user_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_project`
--

LOCK TABLES `user_project` WRITE;
/*!40000 ALTER TABLE `user_project` DISABLE KEYS */;
INSERT INTO `user_project` VALUES (17,2,1),(18,2,2),(44,5,1),(45,5,2),(46,3,1),(47,3,2),(83,1,1);
/*!40000 ALTER TABLE `user_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `version`
--

DROP TABLE IF EXISTS `version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `version` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `id_project` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `version`
--

LOCK TABLES `version` WRITE;
/*!40000 ALTER TABLE `version` DISABLE KEYS */;
INSERT INTO `version` VALUES (2,'2019-05-13 16:27:27','Versión 1.0.1','1.0.1',0),(3,'2019-05-13 16:48:33','Versión 1.0.2','1.0.2',0),(5,'2019-05-14 09:03:33','Versión 1.0.4','1.0.4',0),(7,'2019-07-27 01:53:13','1.1.1','1.1.1',0),(8,'2019-07-27 01:54:23','1.1.2','1.1.2',0),(12,'2019-07-27 04:24:03','Version 1.0.1','1.0.1',1),(13,'2019-07-27 04:24:13','Version 1.02','1.0.2',1),(14,'2019-07-27 04:28:56','Version 1.0.1','1.0.1',2),(15,'2019-07-27 04:29:09','Version 1.0.2','1.0.2',2);
/*!40000 ALTER TABLE `version` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-27  2:29:49
