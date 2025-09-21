package com.example.blog.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.blog.model.dtos.PostDto;
import com.example.blog.model.dtos.PostsFromUserDto;
import com.example.blog.model.entities.Post;
import com.example.blog.model.repositories.PostRepository;
import org.springframework.web.bind.annotation.RequestParam;



@RequestMapping("/api")
@RestController
public class ControllerTeste {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts/users/{username}")
    public List<PostsFromUserDto> getPosts(@PathVariable String username) {
        return postRepository.findPostFromUserName(username);
    }
  

    @GetMapping("posts/{limit}/{page}")
    public List<PostDto> getPostsWithPagination(@PathVariable Integer limit, @PathVariable Integer page) {
        List<PostDto> posts = postRepository.findAll(limit, page);

        return posts;
    }

    @GetMapping("posts/number")
    public Integer gNumberPosts() {
        return postRepository.getNumberPosts();
    }

    @GetMapping("/posts/content/{id}")
    public Post getPostContent(@PathVariable Integer id) {
        return postRepository.findPageElementsById(id);
    }

}
