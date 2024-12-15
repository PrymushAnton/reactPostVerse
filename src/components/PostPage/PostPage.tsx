import { useParams } from "react-router-dom"
import "./PostPage.css"
import { useEffect, useState } from "react"




export function PostPage(){
    const [post, setPost] = useState({id: 0, title: "", cover_image: "", tags: [""], body_markdown:""})
    const params = useParams()
    
    useEffect(() => {
        async function getAllPosts(){
            const response = await fetch(`https://dev.to/api/articles/${params.id}`)
            const post = await response.json()
            setPost(post)
        }
        getAllPosts()
    }, [params.id])

    return (
        <div id="PostPage">
            <div id="titleOfPostDiv">
                <h1 id="titleOfPost">Title: {post.title}</h1>
            </div>
            

            <div id="imageOfPostDiv">
                <img id="imageOfPost" src={post.cover_image} alt="" />
            </div>
            

            <div id="tagsOfPost">
                <h2 id="tagsTitle">Tags:</h2>
                {post.tags.map((tag) => {
                    return <p>{tag}</p>
                })}
            </div>

            <div id="bodyMarkdown">
                <h2 id="bodyMarkdownTitle">Body_markdown:</h2>
                <p id="bodyMarkdownText">{post.body_markdown}</p>
            </div>
            
        </div>
    )

}