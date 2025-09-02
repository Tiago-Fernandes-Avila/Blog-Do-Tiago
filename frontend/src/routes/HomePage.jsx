import { Outlet } from "react-router-dom";
import PostGrid from "../components/PostGrid/PostGrid";
import HeroSection from "../components/HeroSection/HeroSection.jsx";



function HomePage(){
    return (
    <div>
        <HeroSection />
        <PostGrid/>
    </div>
    )
}

export default HomePage;