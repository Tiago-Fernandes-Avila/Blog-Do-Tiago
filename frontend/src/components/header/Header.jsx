import "./Header.css"
import { LinkedIcon, GithubIcon } from "../../assets/Icons.jsx"

function Header() {
    return (
        <div>
            <div>
                <header className="header">
                    <h1>Blog Do Tiago</h1>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li><a href="#">icone linkedin <LinkedIcon size={32} color="#404040 "/></a></li>
                            <li><a href="#">icone github/portfolio <GithubIcon size={32} color="#404040"/></a></li>
                        </ul>
                        <ul>
                            

                            <a href="#"> login</a>
                            <a href="#">cadastre-se</a>
                        </ul>
                    </nav>
                </header>
            </div>




        </div>
    )
}


export default Header;