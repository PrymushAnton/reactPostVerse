import { useParams } from "react-router-dom"
import "./PostPage.css"
import { useContext, useEffect, useState } from "react"
import { usePostById } from "../../hooks/usePostById"
import { useTitle } from "../../hooks/useTitle"
import { RotatingLines } from "react-loader-spinner"
import { likedPostsContext } from "../../App"
import { IPost } from "../../hooks/usePosts";



export function PostPage(){
    const params = useParams()
    const {title} = useTitle("Post page")
    const {likedPosts, addLikedPost} = useContext(likedPostsContext)
    
    const {postById, isLoading, error} = usePostById(Number(params.id))
   
    // const [post, setPost] = useState({id: 0, title: "", cover_image: "", tags: [""], body_markdown:""})

    // const [post, setPost] = useState(postById)
    
    
    // useEffect(() => {
    //     async function getAllPosts(){
    //         const response = await fetch(`https://dev.to/api/articles/${params.id}`)
    //         const post = await response.json()
    //         setPost(post)
    //     }
    //     getAllPosts()
    // }, [params.id])

    return (
        <div id="containerPostPage">
            {   
                (isLoading === true)
                    ? (
                        <div className="load">
                            <RotatingLines
                            strokeColor="#c9bc95"
                            visible={true}
                            width="96"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            />
                        </div>
                    )
                    : (error)
                        ? (
                            <div id="errorWrongId">
                                <h1>{error}</h1>
                                <img id="errorImage" src="https://images3.alphacoders.com/881/881619.jpg" alt="" />
                            </div>
                        )
                        : (
                            <div id="PostPage">
                                <div id="titleOfPostDiv">
                                    <h1 id="titleOfPost">Title: {postById?.title}</h1>
                                    <button className="likePostButton" onClick={() => {postById && addLikedPost(postById)}}>Like</button>
                                </div>

                                <div id="imageOfPostDiv">
                                    <img id="imageOfPost" src={postById?.cover_image} alt="" />
                                </div>
                                

                                <div id="tagsOfPost">
                                    <h2 id="tagsTitle">Tags:</h2>
                                    {postById?.tags.map((tag, index) => {
                                        return <p key={index}>{tag}</p>
                                    })}
                                </div>

                                <div id="bodyMarkdown">
                                    <h2 id="bodyMarkdownTitle">Body_markdown:</h2>
                                    <p id="bodyMarkdownText">{postById?.body_markdown}</p>
                                </div>
                                
                            </div>
                        )
                    
            }
            
        </div>
    )

}