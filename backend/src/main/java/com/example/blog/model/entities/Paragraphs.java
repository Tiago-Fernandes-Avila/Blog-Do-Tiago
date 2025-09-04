package com.example.blog.model.entities;

public class Paragraphs {
    private Long id;
    private String content;
    private Integer displayOrder;
    private Long subTitleId;

    public Paragraphs(){

    }

    public Paragraphs(Long id, String content, Integer displayOrder, Long subTitleId) {
        this.id = id;
        this.content = content;
        this.displayOrder = displayOrder;
        this.subTitleId = subTitleId;
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

    public Long getSubTitleId() {
        return subTitleId;
    }

    public void setSubTitleId(Long subTitleId) {
        this.subTitleId = subTitleId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

   public Integer getDisplayOrder() {
        return displayOrder;
    }

    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
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
