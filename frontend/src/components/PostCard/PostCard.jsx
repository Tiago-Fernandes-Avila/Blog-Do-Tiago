import "./PostCard.css";

export default function PostCard(){
    const date = new Date();


    return (
        <div className="post-card">
            <img src="https://fia.com.br/wp-content/uploads/2019/01/desenvolvimento-tecnologico-ciencia-tecnologia-engenharia.jpg" alt="Imagem do post" className="post-img"/>
            
            <div className="post-info">
                <h2 className="post-title">Valores imutaveis e mutaveis para que servem?</h2>
                <section>
                   <a href=""> <p class="desc-post">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum aut aliquam? Libero porro ad amet laborum natus, quod suscipit quasi odit asperiores, aliquid perferendis cupiditate. Explicabo ea consequuntur consectetur?
                    </p></a>
                    
                </section>

                <section className="post-date">
                    <em>{` Postado em : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</em>

                </section>

            </div>
        </div>
    )
}