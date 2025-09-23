import "./WriterComponent.css"
import { useState, useEffect, createElement } from 'react'

function WriterComponent() {

    const [elementos, setElementos] = useState([])



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
            order: order
        }

        let a = elementos.slice()
        a.push(obj)
        setElementos(a)
        console.log(obj.order)
    }

    function addParagraph(e) {
        if(elementos.slice().filter(x => x.type == "subtitle").length !=0){
                    let belongsToSubTitle = elementos.findLast((value) => value.type == "subtitle")
        let order = elementos.findLast((value) => value.type == "paragraph")
        if (!(order != null && order != undefined)) {
            order = 1
        }
        else {
            order = order.order + 1
        }

        let obj = {
            type: "paragraph",
            order: order,
            belong: belongsToSubTitle.order != undefined || belongsToSubTitle.order != null ? belongsToSubTitle.order : 1
        }


        let a = elementos.slice()
        a.push(obj)
        setElementos(a)

        }
    }

    function savePost(){ //logica para enviar os paragrafos e seus subtitulos de maneira separada não precisa aninhar
       const alert = document.createElement("dialog")

       const text = document.createTextNode("Tem certeza disso?")
        alert.appendChild(text)
        const body = document.querySelector('body')
        alert.classList.toggle("alert-container")
        body.appendChild(alert)
    }




    return (

        <div className="layout-writer" >


            <div className="write-content">

                <input type="url" className="input-type" placeholder="Thumbl do post" />
                <input type="text" maxLength={80} className="input-type" placeholder="Titulo do post" />
                <input type="text" size={Number(20)} className="input-type" placeholder="Introdução " />
                <br />

                {elementos.map((elem, idx) => {

                    if (elem.type == "subtitle") {
                        return <input key={elem.order + 'a'} className="input-type " placeholder={"subtitle: " + Number(elem.order)} />
                    }
                    else if (elem.type == "paragraph") {
                        return <textarea key={elem.order + 'b'} className="input-type para" placeholder={`paragraph: ${idx}`}></textarea>
                    }

                })}



            </div>

            <div className="add-content-type">
                <button onClick={addSubtitle} className="button-add-content" style={{ padding: "15px" }}>Adicionar subtitle    </button>
                <button onClick={addParagraph} style={{ padding: "15px" }}>Adicionar Paragraph</button>
                <button style={{ padding: "15px" }}>Adicionar imagem</button>
                <br />
                <button style={{ padding: "15px" }} onClick={savePost}> Salvar Post</button>
            </div>
        </div>


    )

    //depois disso tenho que separar eles em objetos 
    //



}

export default WriterComponent;



