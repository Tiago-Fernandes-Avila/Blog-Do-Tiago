package com.example.blog.service;

import java.time.Instant;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.blog.model.dtos.PostDto;
import com.example.blog.model.dtos.PostsFromUserDto;
import com.example.blog.model.repositories.PostRepository;

@Service
public class PostService {

    private final UsersService usersService;
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository, UsersService usersService) {
        this.postRepository = postRepository;
        this.usersService = usersService;
    }

    public List<PostsFromUserDto> gPostsFromUser(String username){
        return postRepository.findPostFromUserName(username);
    }


   // Integer id, String title, String intro, String postImagePath, Instant createdAt, Instant updatedAt, Integer ownerUserId, String userName, String profilePicturePath
    public List<PostDto> getAllPosts(Integer limit, Integer page) {
    return null;
    }
        
}