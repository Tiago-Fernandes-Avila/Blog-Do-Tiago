import "./AuthorInfo.css"
export default function ({authorName, date, authorImg} ) {

    return (
        <div className="author-info">       
         
        <img src={authorImg} alt="Imagem do post" className="post-img-author-info" />

        <div className="content-info">
            <span className="author-name">{authorName}</span>
            <time datetime="">{date}</time>
        </div>
        </div>
    )
}