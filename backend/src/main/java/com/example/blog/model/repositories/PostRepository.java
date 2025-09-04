package com.example.blog.model.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.blog.model.entities.Post;

@Repository
public class PostRepository {
    private final JdbcClient jdbcClient;

    public PostRepository(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }

    private final String findAll_statment_sql = "SELECT * FROM tb_posts";
    private final String findById_statment_sql = "SELECT * FROM tb_posts WHERE id = %?% OR title = ?% ORDER BY title LIMIT 15";
    private final String findByTitle_statment_sql = "SELECT * FROM tb_posts WHERE title LIKE ?";
    private final String save_statment_sql = "INSERT INTO tb_posts(id,title, intro_content, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
    private final String update_statment_sql = "UPDATE tb_posts SET title = ?, intro_content = ? WHERE id = ?";
    private final String delete_statment_sql = "DELETE FROM tb_posts WHERE id = ?";



    private final String find_post_subtitles_and_paragraphs = "SELECT p.id AS post_id, p.title AS post_title, s.id AS sub_title_id, s.title AS sub_title_title,"+
    "g.id AS paragraph_id, g.content AS paragraph_content, g.display_order AS paragraph_display_order"+
    "";

    


    @Transactional
    public void save(Post post){
        jdbcClient.sql(save_statment_sql)
        .param(post.getId())
        .param(post.getTitle())
        .param(post.getIntroContent())
        .param(post.getCreatedAt())
        .param(post.getUpdatedAt())
        .update();
    }
    @Transactional
    public void saveAll(List<Post> post){
        for (Post p : post) {
            save(p);            
        }
    }

    @Transactional
    public void update(Post post) {
        jdbcClient.sql(update_statment_sql).param(post.getId()).param(post.getTitle()).param(post.getIntroContent()).update();
    }
    @Transactional
    public void delete(Long id){
        jdbcClient.sql(delete_statment_sql).param(id).update();
    }

    
    @Transactional
    public List<Post> findAll(){
        return jdbcClient.sql(findAll_statment_sql).query(Post.class).list();
    }
    @Transactional
    public Optional<Post> findById(Long id){
        return jdbcClient.sql(findById_statment_sql).param(id).query(Post.class).optional();
    }

    @Transactional
    public List<Post> findByTitle(String title){ //i will use it for dinamic search in future for UX
        return jdbcClient.sql(findByTitle_statment_sql).param(title).query(Post.class).list();
    }
}
