-- phpMyAdmin SQL Dump
-- version 5.0.4deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 14-Jun-2022 às 09:14
-- Versão do servidor: 10.5.12-MariaDB-0+deb11u1-log
-- versão do PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `auxilio_cultural`
--

--
-- Extraindo dados da tabela `opcoes`
--

INSERT INTO `opcoes` (`id`, `label`, `tipo`) VALUES
(1, 'AudioVisual', 1),
(2, 'Livro', 1),
(3, 'Audio', 1),
(4, 'Evento', 1),
(5, 'Exposição', 1),
(6, 'Single', 2),
(7, 'Album', 2),
(8, 'Album Interprete', 2),
(9, 'Ep', 2),
(10, 'Livro', 3),
(11, 'Curta-Metragem', 4),
(12, 'Documentários', 4),
(13, 'Shows', 4),
(14, 'Documento', 10),
(15, 'Link', 10),
(16, 'Foto de Artista', 10),
(17, 'Foto de Evento', 10),
(18, 'Foto de Local', 10),
(19, 'Demo', 30),
(20, 'Teaser', 30),
(21, 'Banner', 30),
(22, 'Autor(a)', 20),
(23, 'Ilustrador(a)', 20),
(24, 'Diretor(a)', 20),
(25, 'Cantor(a)', 20),
(26, 'Acadêmico e científico', 40),
(27, 'Artesanato', 40),
(28, 'Casa e estilo de vida', 40),
(29, 'Cinema e fotografia', 40),
(30, 'Desenvolvimento pessoal', 40),
(31, 'Design, métricas e produtos digitais', 40),
(32, 'Direito e legislação', 40),
(33, 'Empreendedorismo, negócios e inovação', 40),
(34, 'Esportes', 40),
(35, 'Games e geek', 40),
(36, 'Gastronomia, comidas e bebidas', 40),
(37, 'Governo e política', 40),
(38, 'Informática, tecnologia e programação', 40),
(39, 'Marketing e vendas', 40),
(40, 'Moda e belez', 40),
(41, 'Música', 40),
(42, 'Outro', 40),
(43, 'Religião', 40),
(44, 'Saúde, nutrição e bem-estar', 40),
(45, 'Sociedade e cultura', 40),
(46, 'Teatro, stand up e dança', 40),
(47, 'Competição ou torneio', 50),
(48, 'Corrida', 50),
(49, 'Curso, aula, treinamento ou workshop', 50),
(50, 'Drive-in', 50),
(51, 'Espetáculos', 50),
(52, 'Feira, festival ou exposição', 50),
(53, 'Festa, festival o show', 50),
(54, 'Meetup ou evento de networking', 50),
(55, 'Missa ou culto', 50),
(56, 'Outro', 50),
(57, 'Palestra, congresso ou seminário', 50),
(58, 'Passeios, excursões ou tour', 50),
(59, 'Retiro ou acampamento', 50),
(60, 'Não informado', 60),
(61, 'Lei ALdir Blanc', 60),
(62, 'Funcart', 60),
(63, 'Próprio', 60),
(64, 'Federal', 60),
(65, 'Municipal', 60),
(66, 'Estadual', 60),
(67, 'Outro Patrocínio', 60),
(68, 'Evento presencial', 2),
(69, 'Live', 2),
(70, 'Videoconferência', 2),
(71, 'Desafio virtual esportivo', 2),
(72, 'Conteúdo digital', 2),
(73, 'Patrocínio Empresas', 60),
(74, 'Patrocínio Empresas e Governo', 60);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
