import AuthorInfo from "../authorinfo/AuthorInfo.jsx"
import Footer from "../footer/Footer.jsx"
import TagType from "../tagtype/TagType.jsx"
import { useEffect } from "react"
import "./PostContent.css"
import DOMPurify from "dompurify"


export default function ({ content }) {

    
    const authorImg = "https://lh3.googleusercontent.com/a/ACg8ocJgDRB8bj09yJMCOd6yZzGvtbvPQbDFGSjlmgnyid0vWqgRML4-=s231-c-no"
    const authorName = "Tiago Fernandes Avila"
    const date = new Date().toLocaleDateString()
    const postType = "Programing Concepts"

    if(content.subTitles == undefined){
        return (<p>Carregando...</p>)
    }

    
        console.log(`testing... ${content.subTitles[0].title}`)
    
    return (
      <div className="main-layout">  
        <div className="post-content-container">
            <h1 className="post-content-title">{content.title}</h1>
            <p className="post-content-intro">{content.intro}</p>
            <AuthorInfo authorImg={authorImg} date={date} authorName={authorName}></AuthorInfo>
            <TagType postType={postType}></TagType>
            

            {
                content.subTitles.map(item => {
                    return <div>

                        <h2 key={item.id} className="post-content-subtitle">{item.title}</h2>
                        {
                            item.paragraphs.map(para =>
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
        
    </div>
    )
}