package com.example.blog.model.entities;

import java.time.Instant;
import java.util.List;

public class Post {
    private Integer id;
    private String title;
    private String intro;
    private List<SubTitles> subTitles; 
    private Instant createdAt;
    private Instant updatedAt;
    
    
    public Post(Integer id, String title, String intro, List<SubTitles> subTitles, Instant createdAt,
            Instant updatedAt) {
        this.id = id;
        this.title = title;
        this.intro = intro;
        this.subTitles = subTitles;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Post(Integer id, String title, String intro, Instant createdAt, Instant updatedAt) {
        this.id = id;
        this.title = title;
        this.intro = intro;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Post(){
    
    }
    
    public Post(Integer id, String title, String intro) {
        this.id = id;
        this.title = title;
        this.intro = intro;
        
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getIntro() {
        return intro;
    }
    public void setIntro(String intro) {
        this.intro = intro;
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

    public List<SubTitles> getSubTitles() {
        return subTitles;
    }

    public void setSubTitles(List<SubTitles> subTitles) {
        this.subTitles = subTitles;
    }



    
}
