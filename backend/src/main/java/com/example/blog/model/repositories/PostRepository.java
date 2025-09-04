package com.example.blog.model.repositories;

import java.util.List;

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

    private final String save_statment_sql = "INSERT INTO tb_posts(id,title, intro_content, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
    
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





}
