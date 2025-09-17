import { useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./PostGrid.css"

function PostGrid(props){
    const objetos = props.dado;
    return (
        
        
        <div className="post-grid">
               
            {objetos.map((e) =>(
                <PostCard dadosCard={e}/>
            )
            )}
                    
                
        </div>
    )

}
export default PostGrid;