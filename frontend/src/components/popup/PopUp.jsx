import { useRef } from "react"
import "./PopUp.css"
import { CompleteIcon, ErrorIcon } from "../../assets/Icons";
export default function ({ messege, isError = false }) {

    const dialogRef = useRef(null)

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();

    }


 
    return <div>
        <dialog ref={dialogRef} className="popup">
                       {isError ? <ErrorIcon className={"pop-icon"} color="red" size={"32"}></ErrorIcon> : <CompleteIcon className={"pop-icon"} />}

            <h2>{messege}</h2>
            
                        
        <button className={"popup-b-inside"} onClick={toggleDialog}>close</button>

            
        </dialog>
        <div>
            <button onClick={toggleDialog}>abrir fechar!</button>
        </div>
    </div>
}