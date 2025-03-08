CREATE TABLE IF NOT EXISTS products (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    category VARCHAR(255),
    price INT,
    image TEXT,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  permission TEXT NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "deletedAt" TIMESTAMP NULL
);


INSERT INTO products VALUES 
('c035d662-bf76-41a5-9850-f992568cd1e0','Nike SB','O design renovado inclui atualizações na boca e no calcanhar para um ajuste aprimorado, mantendo o conforto e o desempenho que você espera de um Nike SB.','Tênis',28990,'https://imgnike-a.akamaihd.net/1300x1300/014591BR.jpg','2022-09-12 20:38:39','2022-09-18 19:36:26'),
('3fab3a21-a9bd-4acc-a7e7-f6e86d304796','Adidas Lite Racer','O tênis perfeito para te acompanhar na hora dos exercícios físicos ao ar livre, academia e até mesmo no dia a dia. O Lite Racer possui tecnologia CloudFoam que promove leveza e absorção de impactos e a PRIMGREEN que é uma ação sustentável da marca.','Tênis',19990,'https://cf.shopee.com.br/file/55ea620fa2e72dcf21b6be63890cff51','2022-09-13 00:06:46','2022-09-18 19:36:29'),
('b659e803-a4b2-4d33-a27e-0b6d02f982b5','Calça Corinthians Treino 21/22 Nike','Corinthians minha vida, minha história, meu amor! Fazendo parte do enxoval do lançamento do novo uniforme 3 do Timão, o modelo da linha de treino é produzido com tecido leve e respirável predominantemente preto com brasão do clube paulista em dourado.','Calça',32990,'https://static.shoptimao.com.br/produtos/calca-corinthians-treino-2122-nike-masculina/84/2IC-3681-384/2IC-3681-384_zoom1.jpg?ts=1632735426','2022-09-14 16:25:25','2022-09-18 19:36:18'),
('fda2155b-855f-45d1-b00a-24d17cbf5878','Camisa Seleção Brasileira I 22/23','A Coleção da Seleção Brasileira de 2022 combina a icônica estampa da onça-pintada com design inovador que mantém seu corpo seco mesmo no auge da empolgação. Uma homenagem ao Brasil e ao seu povo, esta coleção foi feita para mostrar a sua garra.','Camisa',24990,'https://imgnike-a.akamaihd.net/1300x1300/0226390L.jpg','2022-09-17 12:59:29','2022-09-17 13:26:04'),
('d2e20c87-defa-496b-9606-fed173c5bb49','Camisa Seleção Brasileira II 22/23','Com a base azul, o grande destaque da camisa reserva (II) da Seleção Brasileira para 2022-2023 fica por conta, novamente, da pele da onça-pintada, agora nas mangas, em um degrade para o verde.','Camisa',24990,'https://d3ugyf2ht6aenh.cloudfront.net/stores/946/221/products/camisa-selecao-brasileira-ii-2022-torcedor-nike-masculina-azul-11-b3bb0773f9b500d9d616599885361586-1024-1024.jpg','2022-09-17 13:15:08','2022-09-17 13:26:09'),
('6f1e18d7-7709-4cb2-8e98-069f38296cc3','Camiseta Vans','Confeccionada em material leve e resistente, oferece conforto e bem-estar duradouro. A camiseta possui mangas curtas e gola careca o que possibilita um ótimo caimento. Além disso, o logo da marca em tamanho ampliado, confere todo padrão Vans no produto.','Camiseta',11990,'https://imgcentauro-a.akamaihd.net/900x900/967482KM/camiseta-vans-manga-curta-flying-v-crew-feminina-img.jpg','2022-09-17 13:42:44','2022-09-18 19:36:01'),
('c997014c-c476-480b-899f-3d110e6091c7','Camiseta Adidas','Uma peça versátil para usar nas diversas ocasiões e te deixar cheio de estilo é a Camiseta adidas Manga Curta Logo.  A camiseta adidas masculina é de gola careca com tira interna em tecido que ajuda a diminuir o atrito de contato com a costura.','Camiseta',9990,'https://static.netshoes.com.br/produtos/camiseta-adidas-logo-skt-masculina/06/FB8-0959-006/FB8-0959-006_zoom1.jpg?ts=1662403283&ims=326x','2022-09-18 16:34:05','2022-09-18 19:36:56');

INSERT INTO users VALUES 
('f71950f4-7ba9-4751-8140-b7cbad241fb2','Paulo Admin','admin@admin.com','admin123','ADMIN','2022-09-09 18:17:19','2022-09-16 01:06:41'),
('79da2408-ec9b-4008-a297-8524911f250a', 'Paulo Sérgio', 'paulo@sergio.com', 'paulo123', 'USER', '2025-03-06 13:40:22.884', '2025-03-06 13:58:17.344');
