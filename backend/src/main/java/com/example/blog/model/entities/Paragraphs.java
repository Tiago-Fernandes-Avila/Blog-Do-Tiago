package com.example.blog.model.entities;

public class Paragraphs {
    private Integer id;
    private String paraContent;
    private Integer displayOrder;
    private Integer subTitleId;

    public Paragraphs(){

    }

    public Paragraphs(Integer id, String paraContent, Integer displayOrder, Integer subTitleId) {
        this.id = id;
        this.paraContent = paraContent;
        this.displayOrder = displayOrder;
        this.subTitleId = subTitleId;
    }

    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }

    public String getParaContent() {
        return paraContent;
    }

    public void setParaContent(String paraContent) {
        this.paraContent = paraContent;
    }

    public Integer getSubTitleId() {
        return subTitleId;
    }

    public void setSubTitleId(Integer subTitleId) {
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
