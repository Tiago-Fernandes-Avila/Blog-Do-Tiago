import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";

function App() {
    return (
        <div>
            <Header></Header>
            <HeroSection/>
            
            <Outlet />
            
        </div>
    )

}
export default App;