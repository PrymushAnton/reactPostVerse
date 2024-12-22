import { useParams } from "react-router-dom"
import "./PostPage.css"
import { useEffect, useState } from "react"
import { usePostById } from "../../hooks/usePostById"
import { useTitle } from "../../hooks/useTitle"




export function PostPage(){
    const params = useParams()
    const {title} = useTitle("Post page")

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

    if (!postById){
        return <div>There is no such post 😥</div>
    }

    return (
        <div id="PostPage">
            <div id="titleOfPostDiv">
                <h1 id="titleOfPost">Title: {postById.title}</h1>
            </div>
            

            <div id="imageOfPostDiv">
                <img id="imageOfPost" src={postById.cover_image} alt="" />
            </div>
            

            <div id="tagsOfPost">
                <h2 id="tagsTitle">Tags:</h2>
                {postById.tags.map((tag) => {
                    return <p>{tag}</p>
                })}
            </div>

            <div id="bodyMarkdown">
                <h2 id="bodyMarkdownTitle">Body_markdown:</h2>
                <p id="bodyMarkdownText">{postById.body_markdown}</p>
            </div>
            
        </div>
    )

}