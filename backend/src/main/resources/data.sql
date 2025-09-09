-- Inserindo um post de exemplo
INSERT INTO tb_posts (title, intro) VALUES
('Tudo sobre o Java: Uma Introdução Prática', 'Neste post, vamos explorar as principais características da linguagem Java, desde a sua história até os seus recursos modernos.');

-- Inserindo subtítulos para o post "Tudo sobre o Java"
-- O post_id será 1, já que é o primeiro post que inserimos.
INSERT INTO tb_sub_titles (title, display_order, post_id) VALUES
('A História do Java',  1, 1),
('Recursos Essenciais do Java', 2, 1);

-- Inserindo parágrafos para o subtítulo "A História do Java"
-- O sub_title_id será 1 (referente ao subtítulo "A História do Java").
INSERT INTO tb_paragraphs (para_content, display_order, sub_title_id) VALUES
('A linguagem Java foi criada por James Gosling na Sun Microsystems em 1995.', 1, 1),
('O objetivo principal era criar uma linguagem que fosse independente de plataforma, usando o conceito de "escreva uma vez, rode em qualquer lugar".', 2, 1),
('Hoje, o Java é uma das linguagens mais populares e amplamente utilizadas no mundo, presente em diversos sistemas e dispositivos.', 3, 1);

-- Inserindo parágrafos para o subtítulo "Recursos Essenciais do Java"
-- O sub_title_id será 2 (referente ao subtítulo "Recursos Essenciais do Java").
INSERT INTO tb_paragraphs (para_content, display_order, sub_title_id) VALUES
('A JVM (Java Virtual Machine) é o coração do Java, responsável por interpretar o bytecode e permitir que o código seja executado em diferentes sistemas operacionais.', 1, 2),
('O Garbage Collector é um processo automático de gerenciamento de memória que libera objetos que não são mais referenciados.', 2, 2),
('O polimorfismo é um dos pilares da Programação Orientada a Objetos e permite que um objeto possa ter muitas formas, facilitando a reutilização de código.', 3, 2);