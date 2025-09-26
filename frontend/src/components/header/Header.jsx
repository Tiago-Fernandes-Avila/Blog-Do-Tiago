import "./Header.css"
import { LinkedIcon, GithubIcon, HomeIcon, SearchIcon } from "../../assets/Icons.jsx"
import SearchComponent from "../searchcomponent/SearchComponent.jsx" 
import {useState} from "react"
import { Link } from "react-router-dom"
function Header() {
    const [showS, setShowS] = useState(false)

    function showSearch () {
        
       setShowS((prev) => !showS)
    }



    return (
        <header className="navbar">
            <h1 className="logo">Coding In Coffee</h1>

<div className="nav-search">
            <nav className="nav-links">
                <Link to="/" className="home"><HomeIcon size={32} color="#000000ff" className="icon" /></Link>
                <a href="#"><LinkedIcon size={24} color="#000000ff" className="icon" /></a>
                <a href="#"><GithubIcon size={24} color="#000000ff" className="icon" /> </a>
                

                <a href="#">Login</a>
                <a href="#">Cadastro</a>
            </nav>
            
          <SearchComponent onClick={() => showSearch()} showS={showS}/>
                
</div>
        </header>
    )
}


export default Header;