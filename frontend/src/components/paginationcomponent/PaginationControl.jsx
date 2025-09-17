import axios from "axios"
import "./PaginationControl.css"
import { useEffect, useState } from "react";
import { getPageNumber } from "../../http/PostsHttp";

export default function PaginationControl(){
    const numberPages = getPageNumber(limit, page);

    const [currentpage, setCurrentPage] = useState(1)
    const [paginas, setPaginas] = useState([]) 
        

    return (
        <>
            <div className="containerpagination">
            Numero de paginas: {numberPages}
            </div>
        
        </>
    )
}