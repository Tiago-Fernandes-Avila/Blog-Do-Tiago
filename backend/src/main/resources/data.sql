-- Inserindo usuários na tabela tb_users
INSERT INTO tb_users (user_name, email, password, description, profile_image_path) VALUES
('João Silva', 'joao.silva@email.com', 'senha123', 'Apaixonado por tecnologia e escrita.', '/images/profiles/joao.jpg'),
('Maria Oliveira', 'maria.oliveira@email.com', 'senha456', 'Bióloga e entusiasta de viagens.', '/images/profiles/maria.jpg'),
('Pedro Santos', 'pedro.santos@email.com', 'senha789', NULL, '/images/profiles/pedro.jpg');

-- Inserindo posts na tabela tb_posts
INSERT INTO tb_posts (title, intro, post_image_path, users_id, created_at) VALUES
('Introdução à Inteligência Artificial', 'Explorando os conceitos básicos de IA e suas aplicações.', 'https://media.istockphoto.com/id/1439425791/pt/foto/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=O0hf86Zl6sxV-uV-GmoyRiz_tfe_7LQ6V0XKz-hrxOA=', 1, '2025-09-01'),
('As Belezas da Amazônia', 'Uma jornada pela maior floresta tropical do mundo.', 'https://live.staticflickr.com/4097/4909683043_f104dfd86a_c.jpg', 2, '2025-09-05'),
('Dicas de Programação em Python', 'Melhores práticas para escrever código limpo em Python.', 'https://media.istockphoto.com/id/1439425791/pt/foto/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=O0hf86Zl6sxV-uV-GmoyRiz_tfe_7LQ6V0XKz-hrxOA=', 1, '2025-09-10'),
('Viagem ao Deserto do Atacama', 'Descubra as maravilhas de um dos lugares mais áridos do planeta.', 'https://live.staticflickr.com/2094/5816249422_05eb7dc255_b.jpg', 2, '2025-09-15');

-- Inserindo subtítulos na tabela tb_sub_titles
INSERT INTO tb_sub_titles (title, display_order, post_id) VALUES
-- Subtítulos para o post 1 (Introdução à Inteligência Artificial)
('O que é Inteligência Artificial?', 1, 1),
('Aplicações da IA no Dia a Dia', 2, 1),
-- Subtítulos para o post 2 (As Belezas da Amazônia)
('A Biodiversidade da Floresta', 1, 2),
('Os Rios da Amazônia', 2, 2),
-- Subtítulos para o post 3 (Dicas de Programação em Python)
('Escrevendo Código Limpo', 1, 3),
('Boas Práticas em Python', 2, 3),
-- Subtítulos para o post 4 (Viagem ao Deserto do Atacama)
('Paisagens Únicas', 1, 4),
('Dicas para Viajantes', 2, 4);

-- Inserindo parágrafos na tabela tb_paragraphs
INSERT INTO tb_paragraphs (para_content, display_order, sub_title_id) VALUES
-- Parágrafos para o subtítulo 1 (O que é Inteligência Artificial?)
('Inteligência Artificial refere-se ao desenvolvimento de sistemas que podem realizar tarefas que normalmente requerem inteligência humana.', 1, 1),
('Esses sistemas utilizam algoritmos para aprender a partir de dados.', 2, 1),
-- Parágrafos para o subtítulo 2 (Aplicações da IA no Dia a Dia)
('A IA está presente em assistentes virtuais como Siri e Alexa.', 1, 2),
('Também é usada em recomendações de filmes em plataformas de streaming.', 2, 2),
-- Parágrafos para o subtítulo 3 (A Biodiversidade da Floresta)
('A Amazônia abriga milhões de espécies de plantas e animais.', 1, 3),
('Muitas dessas espécies ainda não foram catalogadas.', 2, 3),
-- Parágrafos para o subtítulo 4 (Os Rios da Amazônia)
('O Rio Amazonas é o maior rio do mundo em volume de água. ', 1, 4),
('Os rios da região são essenciais para a vida local.', 2, 4),
('<img class="post-content-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLBc7Rsp6CkCtq_FyvNr16G2wJIRPu5RVDw&s" alt="imagem da amazonia"> <br> ola isso tem que funcionar! <br> de novo tem que funcionar', 3, 4),
-- Parágrafos para o subtítulo 5 (Escrevendo Código Limpo)
('Código limpo é fácil de entender e manter.', 1, 5),
('Use nomes descritivos para variáveis e funções.', 2, 5),
-- Parágrafos para o subtítulo 6 (Boas Práticas em Python)
('Evite repetição de código utilizando funções reutilizáveis.  ', 1, 6),
('Utilize comentários para explicar o propósito do código.', 2, 6),
-- Parágrafos para o subtítulo 7 (Paisagens Únicas)
('O Atacama é conhecido por seus vales lunares e salares.', 1, 7),
('A paisagem parece de outro planeta.', 2, 7),
-- Parágrafos para o subtítulo 8 (Dicas para Viajantes)
('Leve roupas leves e proteção solar.', 1, 8),
('Planeje sua viagem com antecedência para evitar imprevistos.', 2, 8);

--generate by IA