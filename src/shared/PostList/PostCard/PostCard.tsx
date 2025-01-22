import { Link } from "react-router-dom"
import "./PostCard.css"
import { IPost } from "../../../hooks/usePosts"
import { useContext } from "react"
import { likedPostsContext } from "../../../App"


// interface IPostProps{
//     id: number,
//     profilePicture: any,
//     title: string,
//     author: string,
//     published_at: string,
//     public_reactions_count: number,
//     comments_count: number
// }


export function PostCard(props: IPost){
    const {likedPosts, addLikedPost} = useContext(likedPostsContext)


    return (
        <div className="post">
            
            <div id="leftSideOfPost">
                <img id="profilePicturePost" src={props.user.profile_image} alt="" />
            

                <div id="titleAuthorDate">
                    <Link to={`/post/${props.id}`} className="postLink"><h4 id="title">{props.title.slice(0, 25)}...</h4></Link>
                    <div id="lowerMenu">
                        <p id="author">{props.user.name}</p>
                        <p>•</p>
                        <p id="date">{props.published_at}</p>
                    </div>
                    
                </div>
            </div>

            <div id="publicReactionsDiv">
                <h4 id="public_reactions">Likes count</h4>
                <p id="public_reactions_count">{props.public_reactions_count}</p>
                <button className="likeButton" onClick={() => {addLikedPost(props)}}>Like</button>
            </div>

            <div id="commentsDiv">
                <h4 id="comments">Comments</h4>
                <p id="comments_count">{props.comments_count}</p>
            </div>

        </div>
    )
}