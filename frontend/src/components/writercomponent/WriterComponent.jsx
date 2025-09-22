import "./WriterComponent.css"
import { useState } from 'react'
import CardAddContent from "../writercomponent/card-add-content/CardAddContent.jsx"
function WriterComponent() {

    const [elementos, setElementos] = useState()

    const [subtitles, setSubtitles] = useState([
        {
            order: '',
            content: '',
        }
    ])
    const [paragraphs, setParagraphs] = useState([
        {
            order: '',
            content: '',
            order_subtitles: ''   //works like a id
        }
    ])






    return (

        <div className="layout-writer" >
        
        
            <div className="write-content">
                
                <input type="text"  className="input-type" placeholder="Thumbl do post"/>
                <input type="text" maxLength={80} className="input-type" placeholder="Titulo do post"/>
                <input type="text" size={Number(20)} className="input-type" placeholder="Introdução "/>
                
            </div>

            <div className="add-content-type">
                <CardAddContent className="button-add-content" type={"subtitle"}></CardAddContent>
                <CardAddContent type={"paragraph"}></CardAddContent>
                <CardAddContent type={"image"}></CardAddContent>
            </div>
        </div>


    )

    //depois disso tenho que separar eles em objetos 
    //



}

export default WriterComponent;