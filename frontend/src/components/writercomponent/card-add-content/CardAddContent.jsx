import "./CardAddContent.css"

function CardAddContent({type}){

    return (

        <div className="card-add-content-layout">
            Clique para criar um bloco <strong>{type}</strong>
        </div>

    )
        
}

export default CardAddContent;