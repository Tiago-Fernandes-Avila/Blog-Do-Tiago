import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";

function App() {
    return (
        <div>
            <Header></Header>
            
            <Outlet />

        </div>
    )
}
export default App;