import { useEffect, useState } from "react";
import PostContent from "../components/PostContent/PostContent.jsx"
import { getPostContent } from "../http/PostsHttp.js";


function PostPage(){
  
    //preciso pegar a variavel do id do post lá para listagem e passar como param para axios 
    const [content, setContent] = useState({erro: "erro ainda não carregou!"})
   
    
useEffect(()=>{
    getPostContent(2).then(data => {
        setContent(data.data) 
        }
    )
    .catch(err => console.log(err))
    
},[])



    return (

        <div>
            <PostContent content={content} ></PostContent>
        </div>
    )

}
export default PostPage;