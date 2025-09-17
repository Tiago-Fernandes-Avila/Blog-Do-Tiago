import { Outlet } from "react-router-dom";
import PostGrid from "../components/PostGrid/PostGrid";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import { getPostsHome } from "../http/postsHttp.js";
import { useEffect, useState } from "react";

import axios from "axios";



function HomePage() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const buscarDados = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts/10/1'); // Substitua pelo endpoint da sua API
                setPosts(response.data);
            } catch (error) {
                setErro(error.message);
            } finally {
                setCarregando(false);
            }
        };

        buscarDados();
    }, []);


    

    return (
        <div>
            <HeroSection />
            <PostGrid dado={posts}/>
            

        </div>
    )
}

export default HomePage;