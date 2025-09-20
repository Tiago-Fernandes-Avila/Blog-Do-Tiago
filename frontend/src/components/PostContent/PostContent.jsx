import AuthorInfo from "../authorinfo/AuthorInfo.jsx"
import Footer from "../footer/Footer.jsx"
import TagType from "../tagtype/TagType.jsx"
import { useEffect } from "react"
import "./PostContent.css"
import DOMPurify from "dompurify"


export default function ({ content }) {

    console.log(`o resultado é: ` + content?.subTitles?.title)
    const authorImg = "https://lh3.googleusercontent.com/a/ACg8ocJgDRB8bj09yJMCOd6yZzGvtbvPQbDFGSjlmgnyid0vWqgRML4-=s231-c-no"
    const authorName = "Tiago Fernandes Avila"
    const date = new Date().toLocaleDateString()
    const postType = "Programing Concepts"





    const array = [
        {
            id: 1,
            title: "React para todos",
            paragraphs: [
                {
                    id: 1,
                    paraContent: "React uma lib muito intuitiva e de alto nivel para js lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab deleniti accusamus velit esse minima laboriosam doloremque nobis ratione ad, consequuntur, illo aspernatur ea iusto, sint perspiciatis corporis rem laudantium!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab deleniti accusamus velit esse minima laboriosam doloremque nobis ratione ad, consequuntur, illo aspernatur ea iusto, sint perspiciatis corporis rem laudantium!"
                },
                {
                    id: 2,
                    paraContent: "Como criar e <strong>rodar </strong> um projeto react Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab deleniti accusamus velit esse minima laboriosam doloremque nobis ratione ad, consequuntur, illo aspernatur ea iusto, sint perspiciatis corporis rem laudantium!"
                },
                {
                    id: 3,
                    paraContent: `<img class="post-content-img" src='https://media.licdn.com/dms/image/v2/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=pcv3nQmuGNO--DYXy4h9jVh8cUdkYEaArH8927o3BTE' alt='gatinho fofo'/>`
                }
            ]

        },
        {
            id: 2,
            title: "Features e caracteristicas",
            paragraphs: [
                {
                    id: 4,
                    paraContent: "principal feature do react e reagir ao usuario de maneira dinamicaLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab deleniti accusamus velit esse minima laboriosam doloremque nobis ratione ad, consequuntur, illo aspernatur ea iusto, sint perspiciatis corporis rem laudantium!"
                },
                {
                    id: 5,
                    paraContent: "Onde teremos estados e por sua vez se a alguma modificação de estado eles são renderizados novamente"
                }

            ]
        }
    ]
 if (!content) {
    return <p>Carregando...</p>;
  }



    return (
        
        <div className="post-content-container">
            <h1 className="post-content-title">{content.title}</h1>
            <p className="post-content-intro">{content.intro}</p>
            <AuthorInfo authorImg={authorImg} date={date} authorName={authorName}></AuthorInfo>
            <TagType postType={postType}></TagType>
            

            {
                content?.subTitles?.map(item => {
                    return <div>

                        <h2 key={item.id} className="post-content-subtitle">{item.title}</h2>
                        {
                            item?.paragraphs.map(para =>
                                <p className="post-content-paragraph"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(para.paraContent,
                                            {
                                                ALLOWED_TAGS: ["img", "a", "p", "br"],
                                                ALLOWED_ATTR: ["src", "href", "alt", "class", "style"]
                                            }
                                        ),
                                    }}
                                ></p>
                            )
                        }
                    </div>
                })
            }



        </div >
    )
}