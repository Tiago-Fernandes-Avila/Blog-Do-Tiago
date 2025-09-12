package com.example.blog.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.blog.model.dtos.PostsFromUserDto;
import com.example.blog.model.entities.Post;
import com.example.blog.model.repositories.PostRepository;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/api")
@RestController
public class ControllerTeste {
    
@Autowired
private PostRepository postRepository;

    @GetMapping("/test")
    public Post getMethodName() {
        return postRepository.findPageElementsById(1);
    }

    @GetMapping("/getposts")
    public List<PostsFromUserDto> getPosts() {
        return postRepository.findPostFromUserName("Tiago24062003");
    }
    
}
