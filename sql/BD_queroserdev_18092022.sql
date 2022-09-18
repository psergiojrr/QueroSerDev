CREATE DATABASE  IF NOT EXISTS `queroserdev_paulo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `queroserdev_paulo`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: queroserdev_paulo
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Nike SB','O design renovado inclui atualizações na boca e no calcanhar para um ajuste aprimorado, mantendo o conforto e o desempenho que você espera de um Nike SB.','Tênis',289.9,'https://imgnike-a.akamaihd.net/1300x1300/014591BR.jpg','2022-09-12 20:38:39','2022-09-18 19:36:26'),(4,'Adidas Lite Racer','O tênis perfeito para te acompanhar na hora dos exercícios físicos ao ar livre, academia e até mesmo no dia a dia. O Lite Racer possui tecnologia CloudFoam que promove leveza e absorção de impactos e a PRIMGREEN que é uma ação sustentável da marca.','Tênis',199.9,'https://cf.shopee.com.br/file/55ea620fa2e72dcf21b6be63890cff51','2022-09-13 00:06:46','2022-09-18 19:36:29'),(9,'Calça Corinthians Treino 21/22 Nike','Corinthians minha vida, minha história, meu amor! Fazendo parte do enxoval do lançamento do novo uniforme 3 do Timão, o modelo da linha de treino é produzido com tecido leve e respirável predominantemente preto com brasão do clube paulista em dourado.','Calça',329.9,'https://static.shoptimao.com.br/produtos/calca-corinthians-treino-2122-nike-masculina/84/2IC-3681-384/2IC-3681-384_zoom1.jpg?ts=1632735426','2022-09-14 16:25:25','2022-09-18 19:36:18'),(34,'Camisa Seleção Brasileira I 22/23','A Coleção da Seleção Brasileira de 2022 combina a icônica estampa da onça-pintada com design inovador que mantém seu corpo seco mesmo no auge da empolgação. Uma homenagem ao Brasil e ao seu povo, esta coleção foi feita para mostrar a sua garra.','Camisa',249.9,'https://imgnike-a.akamaihd.net/1300x1300/0226390L.jpg','2022-09-17 12:59:29','2022-09-17 13:26:04'),(35,'Camisa Seleção Brasileira II 22/23','Com a base azul, o grande destaque da camisa reserva (II) da Seleção Brasileira para 2022-2023 fica por conta, novamente, da pele da onça-pintada, agora nas mangas, em um degrade para o verde.','Camisa',249.9,'https://d3ugyf2ht6aenh.cloudfront.net/stores/946/221/products/camisa-selecao-brasileira-ii-2022-torcedor-nike-masculina-azul-11-b3bb0773f9b500d9d616599885361586-1024-1024.jpg','2022-09-17 13:15:08','2022-09-17 13:26:09'),(36,'Camiseta Vans','Confeccionada em material leve e resistente, oferece conforto e bem-estar duradouro. A camiseta possui mangas curtas e gola careca o que possibilita um ótimo caimento. Além disso, o logo da marca em tamanho ampliado, confere todo padrão Vans no produto.','Camiseta',119.9,'https://imgcentauro-a.akamaihd.net/900x900/967482KM/camiseta-vans-manga-curta-flying-v-crew-feminina-img.jpg','2022-09-17 13:42:44','2022-09-18 19:36:01'),(38,'Camiseta Adidas','Uma peça versátil para usar nas diversas ocasiões e te deixar cheio de estilo é a Camiseta adidas Manga Curta Logo.  A camiseta adidas masculina é de gola careca com tira interna em tecido que ajuda a diminuir o atrito de contato com a costura.','Camiseta',99.9,'https://static.netshoes.com.br/produtos/camiseta-adidas-logo-skt-masculina/06/FB8-0959-006/FB8-0959-006_zoom1.jpg?ts=1662403283&ims=326x','2022-09-18 16:34:05','2022-09-18 19:36:56');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220909211121-create-users.js'),('20220912194520-create-produtos.js'),('20220912195814-create-produtos.js'),('20220912202655-create-products.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@admin.com','admin123',1,'2022-09-09 18:17:19','2022-09-16 01:06:41'),(6,'Paulo Sérgio','paulo@paulo.com','paulo123',0,'2022-09-12 19:38:15','2022-09-18 15:10:24'),(11,'lucas','lucas@lucas.com','1234',0,'2022-09-12 23:57:08','2022-09-12 23:57:08'),(12,'Felipe','felipe@felipe.com','felipe123',0,'2022-09-18 14:59:11','2022-09-18 14:59:11'),(13,'Josué','josue@josue.com','josue123',0,'2022-09-18 15:00:07','2022-09-18 15:00:07'),(14,'Francisca','fran@fran.com','fran123',0,'2022-09-18 16:35:56','2022-09-18 16:35:56');
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

-- Dump completed on 2022-09-18 16:37:43
