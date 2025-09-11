CREATE TABLE IF NOT EXISTS tb_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    intro TEXT,

    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

    FOREIGN KEY (user_id)
    REFERENCES tb_users(id)
);

CREATE TABLE IF NOT EXISTS tb_sub_titles (
    id INT AUTO_INCREMENT  PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    display_order INT NOT NULL,
    post_id INT NOT NULL,

    

    FOREIGN KEY (post_id) 
    REFERENCES tb_posts(id)

   
    );

CREATE TABLE IF NOT EXISTS tb_paragraphs(
    
    id INT PRIMARY KEY AUTO_INCREMENT,
    para_content TEXT,
    display_order INT NOT NULL,

    sub_title_id INT NOT NULL,

    FOREIGN KEY(sub_title_id) 
    REFERENCES tb_sub_titles(id)

);

CREATE TABLE tb_users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture_path VARCHAR(2000);

    

);