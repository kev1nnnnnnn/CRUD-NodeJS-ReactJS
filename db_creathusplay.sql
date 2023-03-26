-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Mar-2023 às 16:13
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_creathusplay`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_filmes`
--

CREATE TABLE `tb_filmes` (
  `id` int(11) NOT NULL,
  `autor` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `tb_filmes`
--

INSERT INTO `tb_filmes` (`id`, `autor`, `title`, `description`, `image`) VALUES
(8, 'Laurent Cantet', 'ARTHUR.RAMBO ódio nas redes.', 'Quem é Karim D.? Um jovem escritor empenhado no sucesso? Ou seu pseudônimo Arthur Rambo, que espalha mensagens de ódio em suas redes sociais?', '1679835910029_artur.png'),
(9, 'Marie-Sophie Chambon', '10 Quilos de estrela', 'Lois (Laure Duchene) tem 16 anos e um grande sonho: Tornar-se astronauta. No entanto, embora seja talentosa em física, a adolescente pesa mais de 90 kilos, uma característica da família que ela é inevitavelmente presa. Então, quando tudo parece perdi', '1679836034239_10quilos.png'),
(10, 'Jacqueline Lentzou', '66 QUESTÕÕES DA LUA', 'Após anos de distância, Artemis volta para Atenas devido ao estado de saúde frágil de seu pai. Descobrir o segredo bem guardado de seu pai permite que Artemis entenda seu pai de uma forma que ela nunca foi capaz, e portanto, amá-lo verdadeiramente pela pr', '1679836112798_Captura de tela 2023-03-26 100756.png'),
(11, 'David Michôd', 'A Caçada', 'Em um futuro próximo, os habitantes australianos vivem uma rotina perigosa, onde a criminalidade impera. Com o passar dos anos, Eric (Guy Pearce) já perdeu quase tudo o que tem, e torna-se um homem duro e impiedoso. Quando sua última possessão, seu carro,', '1679836421754_caÃ§ada.png'),
(13, 'Marilia Rocha', 'A cidade onde envelheço', 'Francisca, uma jovem emigrante portuguesa morando no Brasil, recebe em sua casa Teresa, uma antiga conhecida com quem já havia perdido contato. Teresa acaba de chegar e vive momentos de descoberta e encantamento com o novo país, enquanto Francisca anseia ', '1679836545032_cidade_envelhece.png'),
(14, 'Maya Da-Rin', 'A Febre', 'Justino, um indígena de 45 anos, trabalha como vigilante em um porto de cargas e vive em uma casa modesta na periferia de Manaus. Desde a morte da sua esposa, sua única companhia tem sido sua filha Vanessa, mas ela está de partida para estudar medicina em', '1679836591329_FEBRE.png'),
(15, 'Sérgio Andrade', 'A floresta de Jonatas', 'Jonathas vive com os pais e o irmão, Juliano, em um sítio na área rural do Amazonas. A família colhe e vende frutas regionais. Uma barraca de frutas na beira da estrada é o lugar de contato com novos amigos e as novidades do mundo. Os irmãos conhecem Mill', '1679836669553_floresta.png'),
(16, 'Marina Meliande, Felipe Bragança', 'A Fuga da Mulher Gorila', 'Duas irmãs decidem fazer uma viagem pelo interior do Rio de Janeiro a bordo de uma kombi. Elas dão carona a um ator, que deseja conhecer o estado. No caminho o trio organiza um show mambembe, no qual se transformam em gorila e ameaçam o público.', '1679836822781_fuga.png'),
(17, 'Sergio Machado', 'A luta do século', 'O documentário narra a trajetória dos pugilistas Reginaldo Holyfield e Luciano Todo Duro, que encontraram no boxe uma maneira de escapar da miséria e tornaram-se dois dos maiores ídolos do esporte nordestino. A rivalidade entre eles colocou em pé de guerr', '1679836889059_luta_seculo.png'),
(18, 'Eduardo Morotó', 'A Morte Habita à Noite', 'Aos cinquenta anos, alcoólatra e desempregado, a tábua de equilíbrio de Raul é sua paixão por Lígia, que nos últimos anos foi sua parceira de uma vida sem regras. Mas a relação entre os dois não é mais a mesma. Durante uma noite conturbada, Raul cruza com', '1679837009222_amorte.png'),
(19, 'Rodrigo Hinrichsen, Lúcia Murat', 'A Nação que não esperou por Deus', 'O documentário gira em torno da tribo indígena Kadiwéu que vive no Mato Grosso do Sul. A diretora visitou a tribo primeiramente em 1999 para gravar outro filme e agora em 2013/2014. Nesses quase 15 anos, a luz elétrica, a televisão e as igrejas evangélica', '1679837106311_a_nacao.png'),
(20, 'Ramon Porto Mota', 'A Noite Amarela', 'Um grupo de amigos viaja até uma casa de praia, situada em uma pequena ilha do nordeste brasileiro, para celebrar o fim do ensino médio. Na medida em que o tempo passa, as brincadeiras e festas são gradativamente interrompidas pela sensação de que aquele ', '1679837163923_a_noite_amarela.png'),
(23, 'Guillaume Senez', 'A Nossa Espera', 'Olivier faz o melhor que pode para combater as injustiças em seu trabalho. Mas de um dia para o outro, sua esposa Laura inesperadamente abandona a família, e ele se vê sozinho tendo que lidar com as necessidades de seus filhos pequenos, os desafios do cot', '1679837270729_a_nossa_espera.png'),
(24, 'Julia Rezende', 'A Porta ao Lado', 'Mari e Rafa vivem um relacionamento tradicional, estável e sem altos e baixos. O casamento segue tranquilo até o dia em que se muda para o apartamento ao lado o casal Isis e Fred. Os novos vizinhos vivem um relacionamento aberto, separam sexo de amor e de', '1679837316684_porta_aolado.png'),
(25, 'Gustavo Vinagre, Rodrigo Carneiro', 'A Rosa Azul de Novalis', 'Marcelo, um dândi de cerca de 40 anos, possui uma memória inigualável. Revive lembranças familiares em sua cabeça e tem recordações de suas vidas passadas. Em uma delas, foi Novalis, poeta alemão que perseguia uma rosa azul. E nessa vida atual, o que Marc', '1679837358772_rosa_azul.png'),
(26, 'Sergio Borges', 'A Torre', 'André (Enrique Diaz) é um homem recém separado, passando por uma crise de masculinidade, isolado na floresta. A força da natureza atua sobre seu corpo e entre sonhos e insônias surge um jovem sedutor de seu passado. Ele terá que enfrentar suas sombras par', '1679837413267_a_torre.png'),
(27, 'A Viagem de Pedro', 'Laís Bodanzki', '1831, Pedro, o ex imperador do Brasil, busca forças físicas e emocionais para enfrentar seu irmão que usurpou seu reino em Portugal. O filme se passa no Oceano Atlântico, a bordo de uma fragata inglesa na qual se misturam membros da corte, oficiais, servi', '1679837520865_viagem_Pedro.png'),
(28, 'Karim Ainouz', 'A vida invisível', 'Rio de Janeiro, 1950. Eurídice, 18, e Guida, 20, são duas irmãs inseparáveis que moram com os pais em um lar conservador. Ambas têm um sonho: Eurídice o de se tornar uma pianista profissional e Guida de viver uma grande história de amor. Mas elas acabam s', '1679837564564_vida_invisivel.png'),
(29, 'Maíra Buhler, Matias Mariani', 'A vida privada dos Hipopotamos', 'Um técnico de informática americano e entediado se muda para a Colômbia para conhecer os hipopótamos que Pablo Escobar deixou de legado. Lá ele conhece uma bela mulher, filha de um japonês, e uma colombiana, por quem se apaixona profundamente. Os dois com', '1679837632678_vida_privada.png'),
(30, 'José Eduardo Belmonte', 'Alemão 2', 'No complexo do Alemão, o policial civil Machado e seus comandados, Ciro e Freitas, executam uma missão secreta: a prisão de um grande líder do tráfico de drogas. Supervisionados pela delegada Amanda e seguindo as pistas de um informante, a ação sofre uma ', '1679837684868_alemao2.png'),
(31, ' Esmir Filho, Mariana Bastos', 'Alguma coisa assim', 'Caio e Mari são dois jovens adultos cujo relacionamento está além de qualquer definição. Ao longo de 10 anos, o enredo transita entre 3 momentos marcantes em que seus desejos estão em conflito e seu relacionamento é posto à prova. Entre São Paulo e Berlim', '1679837718187_alguma_coisa.png'),
(32, 'Anna Muylaert e Lô Politi', 'Alvorada', 'Na intimidade do Palácio da Alvorada, o cotidiano da presidente Dilma Rousseff, primeira e única mulher a governar o Brasil, durante o desenrolar dramático do golpe que a tirou do poder. Rodado entre julho e setembro de 2016, o filme testemunha a tensão e', '1679837865314_alvorada.png'),
(33, 'Maria Augusta Ramos', 'Amigo Secreto', 'Em 2019, um vazamento de conversas entre várias autoridades do Brasil abala a credibilidade da Operação Lava Jato. Em meio à crise, quatro jornalistas acompanham os desdobramentos do caso, numa sequência de situações que coloca a democracia brasileira em ', '1679837934527_amigo_secreto.png'),
(34, 'Kleber Mendonça Filho, Juliano Dorneles', 'Bacurau', 'Num futuro próximo, Bacurau, um povoado do sertão de Pernambuco, some misteriosamente do mapa. Quando uma série de assassinatos inexplicáveis começam a acontecer, os moradores da cidade tentam reagir. Mas como se defender de um inimigo desconhecido e impl', '1679837980394_bacurau.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_filmes`
--
ALTER TABLE `tb_filmes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_filmes`
--
ALTER TABLE `tb_filmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
