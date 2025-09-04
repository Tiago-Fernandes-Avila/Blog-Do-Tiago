package com.example.blog.model.entities;

import java.time.Instant;

public class Post {
    private Long id;
    private String title;
    private String introContent;
    private Instant createdAt;
    private Instant updatedAt;
    
    
    public Post(Long id, String title, String introContent, Instant createdAt, Instant updatedAt) {
        this.id = id;
        this.title = title;
        this.introContent = introContent;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Post(){
    
    }
    
    public Post(Long id, String title, String introContent) {
        this.id = id;
        this.title = title;
        this.introContent = introContent;
        
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getIntroContentintroContent() {
        return introContent;
    }
    public void setIntroContentintroContent(String introContent) {
        this.introContent = introContent;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Post other = (Post) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    public String getIntroContent() {
        return introContent;
    }

    public void setIntroContent(String introContent) {
        this.introContent = introContent;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }



    
}
