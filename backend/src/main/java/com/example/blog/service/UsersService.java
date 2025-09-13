package com.example.blog.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.blog.model.entities.Users;
import com.example.blog.model.repositories.UsersRepository;

@Service
public class UsersService {
    private final UsersRepository userRepository;

    public UsersService(UsersRepository us){
        this.userRepository = us;
    }

    public List<Users> getAllUsers()
    {
        return userRepository.findAll();
    }

    public Optional<Users> getUserById(Long id)
    {
        
        return userRepository.findById(id);
    }

    
}
