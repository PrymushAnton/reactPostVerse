import firstPfp from "../PostList/images/firstPfp.png"
import secondPfp from "../PostList/images/secondPfp.png"
import thirdPfp from "../PostList/images/thirdPfp.png"
import fourthPfp from "../PostList/images/fourthPfp.png"

import { Post } from "../Post/Post"
import "./PostList.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const posts = [
    {
        id: 0,
        profilePicture: firstPfp,
        title:"ReactJS guide for beginners",
        author:"SerjRoman",
        dateOfUpload:"01.11.2024",
        answers:32,
        views:5123,
        category: "ReactJS",


        comments_count: 124,
        public_reactions_count: 120,
        published_at: "01.11.2024",
        user:{
            profile_image: firstPfp,
            name: "SerjRoman",
        }
    },
    {
        id: 1,
        profilePicture: secondPfp,
        title:"ExpressJS guide for beginners",
        author:"RomanSerj",
        dateOfUpload:"25.10.2024",
        answers:47,
        views:6879,
        category: "ExpressJS",


        comments_count: 124,
        public_reactions_count: 120,
        published_at: "01.11.2024",
        user:{
            profile_image: secondPfp,
            name: "RomanSerj",
        }
    },
    {
        id: 2,
        profilePicture: thirdPfp,
        title:"Django guide for beginners",
        author:"Mykolay",
        dateOfUpload:"12.02.2024",
        answers:132,
        views:14890,
        category: "Django",



        comments_count: 124,
        public_reactions_count: 120,
        published_at: "01.11.2024",
        user:{
            profile_image: thirdPfp,
            name: "Mykolay",
        }
    },
    {
        id: 3,
        profilePicture: fourthPfp,
        title:"Python guide for beginners",
        author:"Kamilla",
        dateOfUpload:"17.11.2024",
        answers:14,
        views:3789,
        category: "Python",


        comments_count: 124,
        public_reactions_count: 120,
        published_at: "01.11.2024",
        user:{
            profile_image: fourthPfp,
            name: "Kamilla",
        }
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
    }, [selectedCategory])

    useEffect(() => {
        async function getAllPosts(){
            const response = await fetch("https://dev.to/api/articles")
            const posts = await response.json()
            setFilteredPosts(posts)
        }
        getAllPosts()
    }, [])


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
            {filteredPosts.map((post, index) => (
                <Post
                    key={index}
                    id={post.id}
                    profilePicture={post.user.profile_image}
                    title={post.title}
                    author={post.user.name}
                    published_at={post.published_at.split('T')[0]}
                    public_reactions_count={post.public_reactions_count}
                    comments_count={post.comments_count}
                ></Post>
            ))}
        </div>
    )
}