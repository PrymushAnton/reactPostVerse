import { Link } from "react-router-dom"
import "./Post.css"


interface IPostProps{
    id: number,
    profilePicture: any,
    title: string,
    author: string,
    published_at: string,
    public_reactions_count: number,
    comments_count: number
}

export function Post(props: IPostProps){


    return (
        <Link to={`/post/${props.id}`} className="postLink">
            <div className="post">
                
                <div id="leftSideOfPost">
                    <img id="profilePicturePost" src={props.profilePicture} alt="" />
                

                    <div id="titleAuthorDate">
                        <h4 id="title">{props.title.slice(0, 25)}...</h4>
                        <div id="lowerMenu">
                            <p id="author">{props.author}</p>
                            <p>•</p>
                            <p id="date">{props.published_at}</p>
                        </div>
                        
                    </div>
                </div>

                <div id="publicReactionsDiv">
                    <h4 id="public_reactions">Public reactions count</h4>
                    <p id="public_reactions_count">{props.public_reactions_count}</p>
                </div>

                <div id="commentsDiv">
                    <h4 id="comments">Comments</h4>
                    <p id="comments_count">{props.comments_count}</p>
                </div>
            </div>
        </Link>
    )
}