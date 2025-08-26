import "./Header.css"
import { LinkedIcon, GithubIcon } from "../../assets/Icons.jsx"

function Header() {
    return (
        <header className="navbar">
  <h1 className="logo">Blog Do Tiago</h1>
  
  <nav className="nav-links">
    <a href="#" className="home">home</a>
    <a href="#"><LinkedIcon size={24} color="#333" className="icon" /></a>
    <a href="#"><GithubIcon size={24} color="#333" className="icon" /></a>
    <a href="#">Login</a>
    <a href="#">Cadastro</a>
  </nav>
</header>
    )
}


export default Header;