package com.example.blog.model.dtos;

public record PostsFromUserDto(
    String userName,
    String title,
    String intro,
    String postImagePath,
    String created_at
) {

} //u.username, p.title, p.intro p.post_image_path
    

