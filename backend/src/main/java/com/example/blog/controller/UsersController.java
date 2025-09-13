package com.example.blog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.blog.model.entities.Users;
import com.example.blog.service.UsersService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(value = "/")
public class UsersController {

    private final UsersService usersService;

    public UsersController (UsersService s){
        this.usersService = s;
    }



    @GetMapping(value = "/users")
    public List<Users> getAllUser(){


        return usersService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public Users getUserById(@PathVariable Long id) {
        return usersService.getUserById(id).get();
    }
    


}
