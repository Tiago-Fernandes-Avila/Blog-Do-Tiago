package com.example.blog.model.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.blog.model.entities.Users;

@Repository
public class UsersRepository {
private final JdbcClient jdbcClient;

public UsersRepository(JdbcClient jdbcClient){
    this.jdbcClient = jdbcClient;
}


    private final String findAll_statment_sql = "SELECT * FROM tb_users";
    private final String findById_statment_sql = "SELECT * FROM tb_users WHERE id = ?";
    private final String findByTitle_statment_sql = "SELECT * FROM tb_users WHERE title LIKE ?";
    private final String save_statment_sql = "INSERT INTO tb_users(id, user_name, password, email, profile_picture_path, description) VALUES (?, ?, ?, ?, ?, ?)";
    private final String update_statment_sql = "UPDATE tb_users SET user_name = ?, password = ?, email = ?, profile_user_path = ?, description = ? WHERE id = ?";
    private final String delete_statment_sql = "DELETE FROM tb_users WHERE id = ?";





    @Transactional
    public void save(Users users){
        jdbcClient.sql(save_statment_sql)
        .param(users.getId())
        .param(users.getUserName())
        .param(users.getPassword())
        .param(users.getEmail())
        .param(users.getProfilePicturePath())
        .param(users.getDescription())
        .update();
    }
    @Transactional
    public void saveAll(List<Users> users_lists){
        for (Users s : users_lists) {
            save(s);            
        }
    }

    @Transactional
    public void update(Users users) {
        jdbcClient.sql(update_statment_sql)
        .param(users.getUserName())
        .param(users.getPassword())
        .param(users.getEmail())
        .param(users.getProfilePicturePath())
        .param(users.getDescription())
        .param(users.getId())
        .update();
    }
    @Transactional
    public void delete(Long id){
        jdbcClient.sql(delete_statment_sql).param(id).update();
    }

    
    @Transactional
    public List<Users> findAll(){
        return jdbcClient.sql(findAll_statment_sql).query(Users.class).list();
    }
    @Transactional
    public Optional<Users> findById(Long id){
        return jdbcClient.sql(findById_statment_sql).param(id).query(Users.class).optional();
    }


    @Transactional
    public List<>



}
