import firstPfp from "../PostList/images/firstPfp.png"
import secondPfp from "../PostList/images/secondPfp.png"
import thirdPfp from "../PostList/images/thirdPfp.png"
import fourthPfp from "../PostList/images/fourthPfp.png"

import { Post } from "../Post/Post"
import "./PostList.css"
import { useEffect, useState } from "react"


const posts = [
    {
        id: 0,
        profilePicture: firstPfp,
        title:"ReactJS guide for beginners",
        author:"SerjRoman",
        dateOfUpload:"01.11.2024",
        answers:32,
        views:5123,
        category: "ReactJS"
    },
    {
        id: 1,
        profilePicture: secondPfp,
        title:"ExpressJS guide for beginners",
        author:"RomanSerj",
        dateOfUpload:"25.10.2024",
        answers:47,
        views:6879,
        category: "ExpressJS"
    },
    {
        id: 2,
        profilePicture: thirdPfp,
        title:"Django guide for beginners",
        author:"Mykolay",
        dateOfUpload:"12.02.2024",
        answers:132,
        views:14890,
        category: "Django"
    },
    {
        id: 3,
        profilePicture: fourthPfp,
        title:"Python guide for beginners",
        author:"Kamilla",
        dateOfUpload:"17.11.2024",
        answers:14,
        views:3789,
        category: "Python"
    },
]

export function PostList(){
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter( (post)=>{
                return post.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory])


    return (
        <div id="postsDiv">
            <div id="postsText">
                <h1>Posts</h1>
                <select id="postCategories" onChange={(event) =>{
                    setSelectedCategory(event.target.value)
                }
                }>
                    <option value="All">All</option>
                    <option value="ReactJS">ReactJS</option>
                    <option value="ExpressJS">ExpressJS</option>
                    <option value="Django">Django</option>
                    <option value="Python">Python</option>
                </select>
            </div>
            {filteredPosts.map((post) => (
                <Post
                    key={post.id}
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