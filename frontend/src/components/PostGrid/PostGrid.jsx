import PostCard from "../PostCard/PostCard";
import "./PostGrid.css"

function PostGrid(){
    return (
        
        <div className="post-grid">
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )

}
export default PostGrid;