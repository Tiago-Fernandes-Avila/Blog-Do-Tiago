package com.example.blog.model.entities;

import java.util.List;

public class Users {
    private Integer id;
    private String userName, password, description, email, profilePicturePath;
    
    private List<Post> posts;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePicturePath() {
        return profilePicturePath;
    }

    public void setProfilePicturePath(String profilePicturePath) {
        this.profilePicturePath = profilePicturePath;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public Users(String userName, String password, String description, String email, String profilePicturePath,
            List<Post> posts) {
        this.userName = userName;
        this.password = password;
        this.description = description;
        this.email = email;
        this.profilePicturePath = profilePicturePath;
        this.posts = posts;
    }

    public Users(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
