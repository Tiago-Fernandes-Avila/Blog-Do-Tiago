import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";


function App() {
    return (

        <div className="container-layout">
            <Header />

            <main>
                <Outlet ></Outlet>
            </main>

            <Footer />

        </div>
    )
}
export default App;