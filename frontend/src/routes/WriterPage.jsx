import { useState } from "react"
import WriterComponent from "../components/writercomponent/WriterComponent";

export default function (){
    const [elements, setElements] = useState([]); //os paragrafos e subtitulos vou colocar para as imagens serem inseridas nos paragrafos assim consigo ter a mesma estrutura mantida

    //botoes para adicionar elementos ou seja inputs dinamicamente baseado na demanda do escritor

    //
    return (
        <>

            <div className="layout-main">
            <div style={{fontSize:"25px", padding:"20px"}}>
                <h1 style={{textAlign:"center", margin:"20px"} }>Área de escrita</h1>
                <p style={{textAlign:"center"}}>Olá seja bem vindo! antes iniciar o seu post tenha atenção aos seguintes pontos:
                    
                </p>
                        
                        <li style={{margin:"10px", fontSize:"18px" }}>Não armazenamos imagens em nossos servidores, então o autor terá que utilizar caminhos de imagem em serviços externos para utiliza-las, existem otimos serviços para isso.</li>
                        
                        <li style={{margin:"10px", fontSize:"18px" }}>
                            Tenha responsabilidade com o que escreve, apenas conteudos educativos relacionados a tecnologia são permitidos! o não comprimento poderá resultar em banimento!
                        </li> 
                                            
                </div>
                <WriterComponent/>
            </div>



        </>
    )

}


//o intuito dessa pagina será criar os posts de maneira ordenanada e intuitiva para o usuario! e depois salvar no backend.

//para isso posso criar classes para o post, que guardam as informações



//depois devo relacionar o escritor/user ao seus posts criar um perfil onde terá informações sobre o escritor e seus posts em formato postfolio.