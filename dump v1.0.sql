-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `discreption` text,
  `titleFont` text,
  `URL` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `userId` int NOT NULL,
  `comment` text,
  `parentId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_users_fk_idx` (`userId`) USING BTREE,
  KEY `comments_posts_fk_idx` (`postId`) USING BTREE,
  KEY `coments_comments_fk_idx` (`parentId`) USING BTREE,
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`parentId`) REFERENCES `comments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postreacts`
--

DROP TABLE IF EXISTS `postreacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postreacts` (
  `reactId` int NOT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`reactId`,`userId`,`postId`),
  KEY `reacts_users_fk_idx` (`userId`) USING BTREE,
  KEY `reacts_posts_fk_idx` (`postId`) USING BTREE,
  CONSTRAINT `postreacts_ibfk_1` FOREIGN KEY (`reactId`) REFERENCES `reacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `postreacts_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `postreacts_ibfk_3` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postreacts`
--

LOCK TABLES `postreacts` WRITE;
/*!40000 ALTER TABLE `postreacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `postreacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `title` varchar(2048) DEFAULT NULL,
  `featured` varchar(512) DEFAULT NULL,
  `isPrivate` tinyint(1) DEFAULT NULL,
  `body` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `pinned` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `posts_users_fk_idx` (`userId`) USING BTREE,
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (5,7,'awdawd',NULL,NULL,'<p>wadwad</p>','2022-05-16 16:56:43','2022-05-16 16:56:43',0),(6,14,'First Post (for real this time)','uploads\\file-1652797509485.png',NULL,'<p>Hello, turtles.&nbsp;</p>\n<p>this is my first post. and I can\'t even view it since there is no \"view post webpage\".&nbsp;</p>\n<p>I am about to give up.</p>\n<p>bye.</p>','2022-05-17 14:25:09','2022-05-17 16:48:29',1),(7,14,'My first 3D game!','uploads\\file-1652799467717.png',NULL,'<p><strong>That\'s it, guys!</strong></p>\n<p>This is my first game</p>\n<p><em>I\'ve made it using Pyopengl and python</em></p>\n<p>I\'ve had a lot of fun coding it from scratch, faced a lot of problems, but at the end it was fun!</p>','2022-05-17 14:57:47','2022-05-17 16:48:06',1),(8,7,'That\'s it!','uploads\\file-1652801641662.jpeg',NULL,'<p>I\'m gonna watch it all go to dust while drinking my morning coffee!</p>\n<p>I did my best and now it\'s time to say farewell!</p>','2022-05-17 15:34:01','2022-05-17 16:48:21',1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postscategories`
--

DROP TABLE IF EXISTS `postscategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postscategories` (
  `postId` int NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`postId`,`categoryId`),
  KEY `postsCategories_categories_fk_idx` (`categoryId`) USING BTREE,
  KEY `postsCategories_posts_fk_idx` (`postId`) USING BTREE,
  CONSTRAINT `postscategories_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `postscategories_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postscategories`
--

LOCK TABLES `postscategories` WRITE;
/*!40000 ALTER TABLE `postscategories` DISABLE KEYS */;
/*!40000 ALTER TABLE `postscategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reacts`
--

DROP TABLE IF EXISTS `reacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `react` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reacts`
--

LOCK TABLES `reacts` WRITE;
/*!40000 ALTER TABLE `reacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `reacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `displayName` varchar(45) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(1024) DEFAULT NULL,
  `gender` enum('m','f') DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `isPremium` tinyint(1) DEFAULT NULL,
  `avatar` text,
  `github` text,
  `bio` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `pinned` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'Mohamed Nagy',NULL,NULL,'mo@dgdi.com','$2b$10$7yHs/vU2q0bu7G6HOqDWE.QbpQ6oSM.OB1nMbZ98SCumxt8dJ3iHu',NULL,1,0,NULL,NULL,NULL,'2022-04-25 20:02:35','2022-04-25 20:02:35',NULL),(2,NULL,'Mohamed Nagy',NULL,NULL,'mo@ddgdi.com','$2b$10$ffOGvGVa.FlQQQZmvp.4F.lqna5pYc002zzhFPHVFeMnAkcfUTPKK',NULL,0,0,NULL,NULL,NULL,'2022-04-25 20:03:33','2022-04-25 20:03:33',NULL),(3,NULL,'Mohamed Nagy',NULL,NULL,'mo@dddgdi.com','$2b$10$po8Wp19biOXYaM/C04Tyie6wyII.7w8LdS/kF.Rp1xXn3gmg/wyE6',NULL,0,0,NULL,NULL,NULL,'2022-04-25 20:03:43','2022-04-25 20:03:43',NULL),(4,NULL,'Mohamed Nagy',NULL,NULL,'mo@dddgwddi.com','$2b$10$NwDN0Ryty0yzELmn.wFdoeHUblvMZdjgFAU8rFjcQozIJhECwDYQm',NULL,0,0,NULL,NULL,NULL,'2022-04-25 20:03:49','2022-04-25 20:03:49',NULL),(5,NULL,'Mohamed Nagy',NULL,NULL,'mo@ddagwddi.com','$2b$10$45nAeVs91NSKxJjhEU4nI.7LyLlx3Qf7cvSEVQwER2bBKZJeOsP32',NULL,0,0,NULL,NULL,NULL,'2022-04-25 20:03:54','2022-04-25 20:03:54',NULL),(6,NULL,'Mohamed Nagy',NULL,NULL,'mo@ddagwhjddi.com','$2b$10$mMelGLnUsUsQn2ewxfwS7uN9v.P1n/53RbRZIondX3Juabr1Uvw8q',NULL,1,0,NULL,NULL,NULL,'2022-04-25 20:06:02','2022-04-25 20:06:02',NULL),(7,NULL,'Mohamed','Abouagour',NULL,'mo.aggour@gmail.com','$2b$10$ovmxM8ajHcqCM7hamYNrh.RyoMPq/3Q12PpGcOJKT4eOt/ft15q1O',NULL,1,0,NULL,NULL,NULL,'2022-05-16 15:32:46','2022-05-16 15:32:46',NULL),(8,NULL,'Mohamed','Abouagour',NULL,'mo.aggdour@gmail.com','$2b$10$x9BZO6DXtUaiDNjnmHjX8uRubq5rajPzIAgfYbHkAMXyjJdsCIZhq',NULL,0,0,NULL,NULL,NULL,'2022-05-16 17:49:15','2022-05-16 17:49:15',NULL),(9,NULL,'awd','awd',NULL,'daw@gmail.com','$2b$10$LkVhvzdV8VyT1hG1p7UrhutUtgUELnTApC2b8QtkuO4as6AhQCvXi',NULL,0,0,NULL,NULL,NULL,'2022-05-16 17:50:59','2022-05-16 17:50:59',NULL),(10,NULL,'Omar','Nagy',NULL,'mo.aggoeefsfur@gmail.com','$2b$10$K4Xrt.v3R7eDtpfWkD/qQ.J/3oQHXYhI7Jw81qln8oFiW8K2K0Zlu',NULL,0,0,NULL,NULL,NULL,'2022-05-16 17:54:49','2022-05-16 17:54:49',NULL),(11,NULL,'Omar','Nagy',NULL,'mo.aggwdour@gmail.com','$2b$10$v8jCt0GnH6Shs1ZeMOKT.umhsdk2kGKR4C7z9d6TDo5Dlg1WlyUZu',NULL,0,0,NULL,NULL,NULL,'2022-05-16 17:57:30','2022-05-16 17:57:30',NULL),(12,NULL,'Omar','Nagy',NULL,'mo.aggddour@gmail.com','$2b$10$rrL9hIHEe100/MGxxhZZKO2MLSxODInu2CZLs/KJAea/jDi.Ox866',NULL,0,0,'uploads\\file-1652724063289.png',NULL,NULL,'2022-05-16 18:01:03','2022-05-16 18:01:03',NULL),(13,NULL,'Omar','Nagy',NULL,'mo.agdgour@gmail.com','$2b$10$M5XyuwjlpdtuYhl96PY7hObOLpIsPEg4jBngcL.24ZmKf/E58cyAy',NULL,0,0,'uploads\\file-1652724285052.png',NULL,NULL,'2022-05-16 18:04:45','2022-05-16 18:04:45',NULL),(14,NULL,'Mohamed','Abouagour',NULL,'mo.aggtgour@gmail.com','$2b$10$ykA6QPPCx/ETuHqHYUO3lur.eqHtt6y9ui2XMq7ZsPcoflP1hnDHO',NULL,0,0,NULL,NULL,NULL,'2022-05-17 14:22:17','2022-05-17 14:22:17',NULL),(15,NULL,'Mohamed','Abouagour',NULL,'mo.aggour222@gmail.com','$2b$10$4aHGTVQ33z48WsMODqBqxe6y70EVW/lW4ANsYSnB1YW1Q7R3XhUPC',NULL,0,0,'uploads\\file-1652801913248.jpeg',NULL,NULL,'2022-05-17 15:38:33','2022-05-17 15:38:33',NULL),(16,NULL,'Mohamed','Abouagour',NULL,'mo.aggour222@gmail.comd','$2b$10$c1X/C4qLrKWcraL1cECBEuFhfQEVs7862zuhAF5rSjT5jLXang71W',NULL,0,0,'uploads\\file-1652802987460.jpeg',NULL,NULL,'2022-05-17 15:56:27','2022-05-17 15:56:27',NULL);
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

-- Dump completed on 2022-05-17 23:14:20
