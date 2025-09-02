import AuthorInfo from "../components/authorinfo/AuthorInfo";

function PostPage(){
    const authorImg = "https://lh3.googleusercontent.com/a/ACg8ocJgDRB8bj09yJMCOd6yZzGvtbvPQbDFGSjlmgnyid0vWqgRML4-=s231-c-no"
    const authorName = "Tiago Fernandes Avila"
    const date = new Date().toLocaleDateString()
    return (

        <div>
            <AuthorInfo authorImg={authorImg} date={date} authorName={authorName}></AuthorInfo>


            badger indicando a categoria do post
            <p>Titulo do post </p>

            Insersão minima do leitor ao post e o que ele ganhará com a leitura
            Compartilhe
            para links onde o usuario pode clicar e redirecionar para a rede social escolhida pronto para compartilhamento.

            card com informaçãoes do img do autor, data, autor  
        </div>
    )

}
export default PostPage;