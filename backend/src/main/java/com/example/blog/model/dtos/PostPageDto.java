package com.example.blog.model.dtos;


public record PostPageDto(

Integer postId,
String postTitle,
String content,

Integer subId,
String title,
Integer displayOrder,

Integer paraId,
String paraContent,
Integer paraOrder

) {

    
}