package com.example.blog.model.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.blog.model.entities.Paragraphs;


@Repository
public class ParagraphRepositry {
    
    private final JdbcClient jdbcClient;

    public ParagraphRepositry(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }
     

    private final String findAll_statment_sql = "SELECT * FROM tb_paragraphs";
    private final String findById_statment_sql = "SELECT * FROM tb_paragraphs WHERE id = ?";
    private final String save_statment_sql = "INSERT INTO tb_paragraphs(id, content, display_order, sub_title_id) VALUES ( ?, ?, ?, ?)";
    private final String update_statment_sql = "UPDATE tb_paragraphs SET content = ?, display_order = ?, sub_title_id = ? WHERE id = ?";
    private final String delete_statment_sql = "DELETE FROM tb_paragraphs WHERE id = ?";


    @Transactional
    public void save(Paragraphs paragraphs){
        jdbcClient.sql(save_statment_sql)
        .param(paragraphs.getId())
        .param(paragraphs.getContent())
        .param(paragraphs.getDisplayOrder())
        .param(paragraphs.getSubTitleId())
        .update();
    }
    @Transactional
    public void saveAll(List<Paragraphs> paragraphs){
        for (Paragraphs p : paragraphs) {
            save(p);            
        }
    }

    @Transactional
    public void update(Paragraphs paragraphs) {
        jdbcClient.sql(update_statment_sql)
        .param(paragraphs.getId())
        .param(paragraphs.getContent())
        .param(paragraphs.getDisplayOrder())
        .param(paragraphs.getSubTitleId())
        .update();
    }
    @Transactional
    public void delete(Long id){
        jdbcClient.sql(delete_statment_sql).param(id).update();
    }

    
    @Transactional
    public List<Paragraphs> findAll(){
        return jdbcClient.sql(findAll_statment_sql).query(Paragraphs.class).list();
    }
    @Transactional
    public Optional<Paragraphs> findById(Long id){
        return jdbcClient.sql(findById_statment_sql).param(id).query(Paragraphs.class).optional();
    }

   

    
}
