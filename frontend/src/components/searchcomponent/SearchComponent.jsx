import "./Search.css"
import { SearchIcon } from "../../assets/Icons"

export default function SearchComponent( {showS, onClick}){
    return (
        <>
                <input type="text" className={`search-input ${showS ? "show" : "" }  `} placeholder="Pesquisar"/>        
              <SearchIcon  onClick={onClick} size={24} color="var(--background2)" className='icon' /> 
        </>
    )
}