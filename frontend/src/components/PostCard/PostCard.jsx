import "./PostCard.css";
import TagType from "../tagtype/TagType.jsx"
import { Link } from "react-router-dom";
import AuthorInfo from "../authorinfo/AuthorInfo.jsx";

//imagens com largura recomendada em 325 e 165 de altura.

const authorImg = "https://lh3.googleusercontent.com/a/ACg8ocJgDRB8bj09yJMCOd6yZzGvtbvPQbDFGSjlmgnyid0vWqgRML4-=s231-c-no"
const authorName = "Tiago Fernandes Avila"
const date = new Date().toLocaleDateString()

export default function PostCard(props) {
    const cardInfo = props.dadosCard;    

    //vai vir do backend
    const postType = "Coding Concepts"

    return (
        <div className="post-card">

            <img src={cardInfo.postImagePath} alt="Imagem do post" className="post-img" />
            <div className="post-info">

                <TagType postType={postType}></TagType>
                <Link to="/post">

                    <h2 className="post-title">
                        {cardInfo.title}
                    </h2>
                    <p className="post-content">
                        {cardInfo.intro}         
                        </p>


                    <AuthorInfo authorImg={cardInfo.profilePicturePath} date={cardInfo.createdAt} authorName={cardInfo.userName}></AuthorInfo>
                </Link>
            </div>

        </div >
    )
}