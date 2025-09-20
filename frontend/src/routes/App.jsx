import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function App() {
    return (

        <div>
            <Header></Header>
            
            <main>
            <Outlet ></Outlet>
            <Footer></Footer>
            </main>
            
            
        </div>
    )
}
export default App;