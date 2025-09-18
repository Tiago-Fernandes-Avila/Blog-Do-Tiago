import "./PaginationControl.css"
import { useEffect, useRef, useState } from "react";

export default function PaginationControl({totalPaginas, paginaAtual, setPaginaAtual}) {
   
    function handleEvent1(event){
        console.log(event.target.innerHTML)
        setPaginaAtual(Number(event.target.innerText));
    }    

    return (
        <>
            <div className="containerpagination">
          
          
      {Array.from({ length: totalPaginas }, (_, index) => (
        <div className="button1" key={index + 1} onClick={handleEvent1} >
          {index + 1}
        </div>
      ))}
            </div>

        </>
    )
}