package com.example.blog.model.entities;
public class SubTitles{
    private Long id;
    private String title;
    private Integer displayOrder;

    private Long post_id;


    public SubTitles(Long id, String title,Integer displayOrder , Long post_id) {
        this.id = id;
        this.title = title;
        
        this.displayOrder = displayOrder;
        this.post_id = post_id;
    }
    public SubTitles() {
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
    
    public Long getPost_id() {
        return post_id;
    }
    public void setPost_id(Long post_id) {
        this.post_id = post_id;
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
        SubTitles other = (SubTitles) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
    public Integer getDisplayOrder() {
        return displayOrder;
    }
    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
    } 

    

}