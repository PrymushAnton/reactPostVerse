import firstPfp from "../Post/images/firstPfp.png"
import secondPfp from "../Post/images/secondPfp.png"
import { Post } from "../Post/Post"
import "./PostList.css"


const posts = [
    {
        profilePicture: firstPfp,
        title:"React guide for begginers",
        author:"SerjRoman",
        dateOfUpload:"01.11.2024",
        answers:32,
        views:5123,
    },
    {
        profilePicture: secondPfp,
        title:"ExpressJS guide for begginers",
        author:"RomanSerj",
        dateOfUpload:"25.10.2024",
        answers:47,
        views:6879,
    },
]

export function PostList(){
    return (
        <div id="postsDiv">
            <div id="postsText">
                <h1>Posts</h1>
            </div>
            {posts.map((post, index) => (
                <Post
                    profilePicture={post.profilePicture}
                    title={post.title}
                    author={post.author}
                    dateOfUpload={post.dateOfUpload}
                    answers={post.answers}
                    views={post.views}
                ></Post>
            ))}
        </div>
    )
}