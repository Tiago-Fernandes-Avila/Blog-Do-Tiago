package com.example.blog.model.entities;
public class SubTitles{
    private Long id;
    private String title;
    private String content;
    private Integer display_order;

    private Long post_id;


    public SubTitles(Long id, String title, String content,Integer display_order , Long post_id) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.display_order = display_order;
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
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
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
    public Integer getdisplay_order() {
        return display_order;
    }
    public void setdisplay_order(Integer display_order) {
        this.display_order = display_order;
    } 

    

}