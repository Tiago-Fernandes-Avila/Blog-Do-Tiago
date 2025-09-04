package com.example.blog.model.entities;

public class Paragraphs {
    private Long id;
    private String content;
    private Integer display_order;

    private Long sub_title_id;

    public Paragraphs(){

    }

    public Paragraphs(Long id, String content, Integer display_order, Long sub_title_id) {
        this.id = id;
        this.content = content;
        this.display_order = display_order;
        this.sub_title_id = sub_title_id;
    }

    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getSub_title_id() {
        return sub_title_id;
    }

    public void setSub_title_id(Long sub_title_id) {
        this.sub_title_id = sub_title_id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

   public Integer getOrder() {
        return display_order;
    }

    public void setOrder(Integer display_order) {
        this.display_order = display_order;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Paragraphs other = (Paragraphs) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

 
    
    
}
