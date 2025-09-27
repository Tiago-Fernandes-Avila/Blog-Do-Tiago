import "./WriterComponent.css"
import { useState, useEffect, createElement, useRef } from 'react'
import { ImageIcon, SaveIcon } from "../../assets/Icons"
import PopUp from "../popup/PopUp"

function WriterComponent() {
    
    const [elementos, setElementos] = useState([
        {
            type: "title",
            content: ""
        },
        {
            type: "intro",
            content: ""
        },
        {
            type: "postImage",
            content: ""
        },
    ])

    function addSubtitle(e) {

        let order = elementos.findLast((value) => value.type == "subtitle")
        if (!(order != null && order != undefined)) {
            order = 1
        }
        else {
            order = order.order + 1
        }

        let obj = {
            type: "subtitle",
            order: order,
            content: ""
        }

        let a = elementos.slice()
        a.push(obj)
        setElementos(a)
        console.log(obj.order)
        window.scroll(0,window.scrollY + 1000)  
    }

    function addParagraph(e) {

        if (elementos.slice().filter(x => x.type == "subtitle").length > 0) {

            let belongsToSubTitle = elementos.findLast((value) => value.type == "subtitle")

            let order = elementos.findLast((value) => value.type == "paragraph/image")

            if (!(order != null && order != undefined)) {
                order = 1
            }
            else {
                order = order.order + 1
            }

            let obj = {
                type: "paragraph/image",
                isImage: false,
                order: order,
                belong: belongsToSubTitle.order != undefined || belongsToSubTitle.order != null ? belongsToSubTitle.order : 1,
                content: null
            }

            console.log(obj.belong)


            let a = elementos.slice()
            a.push(obj)
            setElementos(a)
            window.scroll(0,window.scrollY + 1000)  

        }
        else{
            alert("Adicione um subtitle antes de adicionar um Paragrafo")
        }
    }

    function addImage(e) {
        if (elementos.slice().filter(x => x.type == "subtitle").length > 0) {

            let belongsToSubTitle = elementos.findLast((value) => value.type == "subtitle")

            let order = elementos.findLast((value) => value.type == "paragraph/image")

            if (!(order != null && order != undefined)) {
                order = 1
            }
            else {
                order = order.order + 1
            }

            let obj = {
                type: "paragraph/image",
                isImage: true,
                order: order,
                belong: belongsToSubTitle.order != undefined || belongsToSubTitle.order != null ? belongsToSubTitle.order : 1,
                content: ""
                
            }

            console.log(obj.belong)
            
            let a = elementos.slice()
            a.push(obj)
            setElementos(a)
            
            window.scroll(0,window.scrollY + 1000)
        }
        else{
            alert("Adicione um subtitle antes de adicionar uma imagem")
        }
    }



    function savePost() { 
        
        if(elementos.length  > 4){
        console.log(elementos)
    }

    else{
        alert("Insira pelo menos um subtitulo e um paragrafo neste post antes de salva-lo")
    }


    }

    return (

        <div className="layout-writer" >


            <div className="write-content">

<div>
                <input type="url" className="input-type" placeholder="Thumbl do post (Link)" onChange={(e) => {elementos[2].content = e.target.value}} required/> <ImageIcon size={24} color={"#40312C"}/>
                </div>
                <input type="text" maxLength={80} className="input-type" placeholder="Titulo do post" onChange={(e) => {elementos[0].content = e.target.value}} required/>
                <input type="text" size={Number(20)} className="input-type" placeholder="Introdução " onChange={(e) =>{
                    elementos[1].content = e.target.value}} required />
                <br />

                
                
                
                
                
                
                {elementos.map((elem, idx) => {

                    if (elem.type == "subtitle") {
                        return <input key={crypto.randomUUID()} className="input-type " placeholder={"subtitle: " + Number(elem.order)} required onChange={(e) => {elem.content = e.target.value}}/>
                    }
                    else if (elem.type == "paragraph/image" && elem.isImage == false) {
                        return <textarea key={crypto.randomUUID()} className="input-type para" placeholder={`paragraph: ${idx}`} required onChange={(e) => {elem.content = e.target.value}}></textarea> 
                    }
                    else if (elem.type == "paragraph/image" && elem.isImage == true) {
                        return <div key={crypto.randomUUID()}> 
                            <input  type="url" className="input-type para" placeholder={`Imagem  (Link): ${idx}`} required onChange={(e) => {elem.content =`<img src='${e.target.value}' alt='img' />`}}/> 
                        <ImageIcon size={24} color={"#40312C"}/>
                        </div>
                    }

                })}


            </div>

            <div className="add-content-type">
                <button onClick={addSubtitle} className="button-add-content" style={{ padding: "15px" }}>Adicionar subtitle    </button>
                <button onClick={addParagraph} style={{ padding: "15px" }} className="button-add-content">Adicionar Paragraph</button>
                <button style={{ padding: "15px" }} onClick={addImage} className="button-add-content">Adicionar imagem</button>
                <br />
                <button style={{ padding: "15px" }} className="button-add-content"  onClick={savePost}> Salvar Post <SaveIcon size={24} color="white"/></button>
                <PopUp isError={false} messege={"O post necessita de pelo menos um sub-titulo e um paragrafo!"}></PopUp>
            </div>
            
        </div>

                
    )

    //depois disso tenho que separar eles em objetos 
    //



}

export default WriterComponent;



