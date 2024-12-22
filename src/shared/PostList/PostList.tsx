import firstPfp from "../PostList/images/firstPfp.png"
import secondPfp from "../PostList/images/secondPfp.png"
import thirdPfp from "../PostList/images/thirdPfp.png"
import fourthPfp from "../PostList/images/fourthPfp.png"

import { PostCard } from "./PostCard/PostCard"
import "./PostList.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { usePosts } from "../../hooks/usePosts"




const posts = [
    {
        id: 0,
        title:"ReactJS guide for beginners",

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
        title:"ExpressJS guide for beginners",
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
        title:"Django guide for beginners",
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
        title:"Python guide for beginners",
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

    const {posts} = usePosts()
    // const {postById} = usePostsById()


    // const [filteredPosts, setFilteredPosts] = useState(posts)
    
    // const [selectedCategory, setSelectedCategory] = useState('All')

    // useEffect(()=>{
    //     if(selectedCategory === 'All'){
    //         setFilteredPosts(posts)
    //     } else{
    //         setFilteredPosts(posts.filter( (post)=>{
    //             return post.category === selectedCategory
    //         }))
    //     }
    // }, [selectedCategory])

    // useEffect(() => {
    //     async function getAllPosts(){
    //         const response = await fetch("https://dev.to/api/articles")
    //         const posts = await response.json()
    //         setFilteredPosts(posts)
    //     }
    //     getAllPosts()
    // }, [])


    return (
        <div id="postsDiv">
            <div id="postsText">
                <h1>Posts</h1>
                <select id="postCategories" onChange={(event) =>{
                    // setSelectedCategory(event.target.value)
                }
                }>
                    <option value="All">All</option>
                    <option value="ReactJS">ReactJS</option>
                    <option value="ExpressJS">ExpressJS</option>
                    <option value="Django">Django</option>
                    <option value="Python">Python</option>
                </select>
            </div>
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    id={post.id}
                    title={post.title}
                    comments_count={post.comments_count}
                    public_reactions_count={post.public_reactions_count}
                    published_at={post.published_at.split('T')[0]}
                    cover_image={post.cover_image}
                    tags={post.tags}
                    body_markdown={post.body_markdown}
                    user={{
                        profile_image: post.user.profile_image,
                        name : post.user.name
                    }}
                ></PostCard>
            ))}
        </div>
    )
}