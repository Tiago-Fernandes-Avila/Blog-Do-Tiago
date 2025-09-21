import PostGrid from "../components/PostGrid/PostGrid";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import { getPostsHome, getNumberPageInHome } from "../http/PostsHttp.js"
import PaginationControl from "../components/paginationcomponent/PaginationControl.jsx";
import {useEffect, useState} from "react"
import Footer from "../components/footer/Footer.jsx";


function HomePage() {


  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsHome(4, paginaAtual).then((data) => setPosts(data));
  }, [paginaAtual]);

  useEffect(() => {
    getNumberPageInHome().then((data) => setTotalPaginas(data));
  }, []);


    

    return (
        <div>
            <HeroSection />
            <PostGrid dado={posts} />

            <PaginationControl totalPaginas={totalPaginas} paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual}>
                
            </PaginationControl >
            
            <Footer></Footer>
        </div>
    )
}

export default HomePage;