import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent/PostContent.jsx';
import { getPostContent } from '../http/PostsHttp.js';
import Footer from '../components/footer/Footer.jsx';


function PostPage() {
  const { id } = useParams(); 
  const [content, setContent] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  

  useEffect(() => {
    setIsLoading(true);
    

    getPostContent(id)
      .then((response) => {
        setContent(response.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.error('Erro ao carregar o post:', err);
        
      });
  }, [id]); 


  if (isLoading) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="post-page">
      <PostContent content={content}/>
     
    </div>
    
  );
}

export default PostPage;