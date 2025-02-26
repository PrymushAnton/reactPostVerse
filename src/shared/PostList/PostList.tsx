import { PostCard } from "./PostCard/PostCard"
import "./PostList.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { usePosts } from "../../hooks/usePosts"

import { RotatingLines } from "react-loader-spinner"


export function PostList(){

    const {posts, isLoading, error} = usePosts()

    useEffect(() => {
        console.log(posts)

    }, [posts])

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
            {
                isLoading == true 
                ? (
                <div className = "load">
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
                : (<>
                    <div id="postsText">
                        <h1>Posts</h1>
                        <div>
                            <Link to={"/liked-posts"}>Liked posts</Link>
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
                        
                    </div>
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            id={post.id}
                            title={post.title}
						    text={post.text}

                            // comments_count={post.comments_count}
                            // public_reactions_count={post.public_reactions_count}
                            // published_at={post.published_at.split('T')[0]}
                            // cover_image={post.cover_image}
                            // tags={post.tags}
                            // body_markdown={post.body_markdown}
                            // user={{
                            //     profile_image: post.user.profile_image,
                            //     name : post.user.name
                            // }}
                        ></PostCard>
                    ))}
                    </>
                
                )}
        
        </div>
    )
}