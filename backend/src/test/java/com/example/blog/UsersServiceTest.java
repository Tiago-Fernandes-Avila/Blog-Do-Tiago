package com.example.blog;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.blog.model.entities.Users;
import com.example.blog.service.UsersService;

public class UsersServiceTest {
    
    private final UsersService s;

    public UsersServiceTest(UsersService s){
        this.s = s;
    }



    @Test
    public void getUsers(){
       List< Users > users = s.getAllUsers();

        assertEquals(false, users.isEmpty());


    } 

}
