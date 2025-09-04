package com.example.blog.model.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.blog.model.entities.SubTitles;
import com.example.blog.model.entities.SubTitles;

@Repository
public class SubTitlesRepository {
       private final JdbcClient jdbcClient;

    public SubTitlesRepository(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }

    private final String findAll_statment_sql = "SELECT * FROM tb_sub_titles";
    private final String findById_statment_sql = "SELECT * FROM tb_sub_titles WHERE id = ?";
    private final String save_statment_sql = "INSERT INTO tb_sub_titles(id, title, content, display_order, post_id) VALUES (?, ?, ?, ?)";
    private final String update_statment_sql = "UPDATE tb_sub_titles SET title = ?, intro_content = ? WHERE id = ?";
    private final String delete_statment_sql = "DELETE FROM tb_sub_titles WHERE id = ?";


    @Transactional
    public void save(SubTitles subTitles){
        jdbcClient.sql(save_statment_sql)
        .param(subTitles.getId())
        .param(subTitles.getTitle())
        .param(subTitles.getDisplayOrder())
        .param(subTitles.getPost_id())
        .update();
    }
    @Transactional
    public void saveAll(List<SubTitles> subTitles_lists){
        for (SubTitles s : subTitles_lists) {
            save(s);            
        }
    }

    @Transactional
    public void update(SubTitles subTitles) {
        jdbcClient.sql(update_statment_sql)
        .param(subTitles.getId())
        .param(subTitles.getTitle())
        .param(subTitles.getDisplayOrder())
        .param(subTitles.getPost_id())
        .update();
    }
    @Transactional
    public void delete(Long id){
        jdbcClient.sql(delete_statment_sql).param(id).update();
    }

    
    @Transactional
    public List<SubTitles> findAll(){
        return jdbcClient.sql(findAll_statment_sql).query(SubTitles.class).list();
    }
    @Transactional
    public Optional<SubTitles> findById(Long id){
        return jdbcClient.sql(findById_statment_sql).param(id).query(SubTitles.class).optional();
    }

    
    
}
