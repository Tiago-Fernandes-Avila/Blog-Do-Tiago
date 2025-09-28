import { useImperativeHandle} from "react"
import "./PopUp.css"
import { CompleteIcon, ErrorIcon } from "../../../assets/Icons";
import React from "react";

const PopUp = React.forwardRef((props,ref) => {
    // documentando para não esqueçer o que fiz basicamente quem vai acessar o elemento dialog será o hook useRef do pai para que popup possa ser modificado pelo pai sendo muito mais util!
        const toggleDialog = ()  => {
        if (!ref.current) {
            return;
        }
        ref.current.hasAttribute("open") ? ref.current.close() : ref.current.showModal();

    }
    return <div>
        <dialog ref={ref} className="popup">
            {props.isError ? <ErrorIcon className={"pop-icon"} color="red"></ErrorIcon> : <CompleteIcon className={"pop-icon"} />}

            <h2>{props.messege}</h2>
            <button className={"popup-b-inside"} onClick={toggleDialog}>close</button>


        </dialog>

    </div>
})
export default PopUp;