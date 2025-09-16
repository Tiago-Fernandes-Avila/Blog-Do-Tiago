package com.example.blog.model.dtos;

import java.time.Instant;

public record PostDto(Integer id, String title, String intro, String postImagePath, String createdAt, String updatedAt, Integer ownerUserId, String userName, String profilePicturePath) {

    
}
