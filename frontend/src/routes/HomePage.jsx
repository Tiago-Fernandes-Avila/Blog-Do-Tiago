import PostGrid from "../components/PostGrid/PostGrid";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import { getPostsHome } from "../http/PostsHttp.jsx";
import PaginationControl from "../components/paginationcomponent/PaginationControl.jsx";



function HomePage() {

    let posts = getPostsHome()

    return (
        <div>
            <HeroSection />
            <PostGrid dado={posts} />

            <PaginationControl>
           
            </PaginationControl>

        </div>
    )
}

export default HomePage;