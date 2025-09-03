import AuthorInfo from "../authorinfo/AuthorInfo.jsx"
import TagType from "../tagtype/TagType.jsx"
import "./PostContent.css"


export default function(){
const authorImg = "https://lh3.googleusercontent.com/a/ACg8ocJgDRB8bj09yJMCOd6yZzGvtbvPQbDFGSjlmgnyid0vWqgRML4-=s231-c-no"
    const authorName = "Tiago Fernandes Avila"
    const date = new Date().toLocaleDateString()
    const postType = "Programing Concepts"

return(
   

            <div className="post-content-container">


                 <AuthorInfo authorImg={authorImg} date={date} authorName={authorName}></AuthorInfo>

                <TagType postType={postType}></TagType>

                <span>badger indicando a categoria do post </span>
                <h1 className="post-title">Titulo do post </h1>
                <p>
                    Insersão minima do leitor ao post e o que ele ganhará com a leitura
                    Compartilhe
                    para links onde o usuario pode clicar e redirecionar para a rede social escolhida pronto para compartilhamento.
                    card com informaçãoes do img do autor, data, autor
                </p>




            </div>

        )
}