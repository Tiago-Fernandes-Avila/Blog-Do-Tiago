import "./PostCard.css";
import TagType from "../tagtype/TagType.jsx"
//imagens com largura recomendada em 325 e 165 de altura.

export default function PostCard() {
    const date = new Date();

    //vai vir do backend
    const postType = "Coding Concepts"

    return (
        <div className="post-card">

            <img src="src/assets/imagem.png" alt="Imagem do post" className="post-img" />
            <div className="post-info">

            <TagType postType={postType}></TagType>
                <a href="#"> 
                    <h2 className="post-title">Valores imutaveis e mutaveis o que Implicam?
                </h2>
                    <p className="post-content">         
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum aut aliquam? Libero porro ad amet laborum natus, quod suscipit quasi odit asperiores, aliquid perferendis cupiditate. Explicabo ea consequuntur consectetur?</p>
            

            <em>{` Postado em : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</em>
            </a>
        </div>

        </div >
    )
}