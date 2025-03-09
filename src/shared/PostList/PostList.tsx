import { PostCard } from "./PostCard/PostCard"
import "./PostList.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IPost, usePosts } from "../../hooks/usePosts"

import { RotatingLines } from "react-loader-spinner"
import { useTags } from "../../hooks/useTags"


export function PostList(){
    // еррор не используешь
    const {posts, isLoading: isLoadingPosts, error: errorPosts} = usePosts()
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])

    useEffect(() => {
        setFilteredPosts(posts)
    }, [posts])

    // isLoadin, error по хорошему надо обрабатывать 
    const {tags, isLoading, error} = useTags()
    
    const [selectedTag, setSelectedTag] = useState('All')

    useEffect(()=>{
        if(selectedTag === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter((post)=>{
                return post.Tag.name === selectedTag
            }))
        }
    }, [selectedTag])

    return (
        <div id="postsDiv">
            {
                isLoadingPosts || isLoading 
                ? (
                <div className = "loadPostList">
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
                : (errorPosts)
                    ? (
                        <div className="errorPostList">
                            <h1>{errorPosts}</h1>
                        </div>
                    )
                    : (error)
                        ? (
                            <div className="errorPostList">
                                <h1>{error}</h1>
                            </div>
                        )
                        : (<>
                            <div id="postsText">
                                <h1>Posts</h1>

                                <div>
                                    <Link to={"/liked-posts"}>Liked posts</Link>
                                    <select id="postCategories" onChange={(event) =>{
                                        setSelectedTag(event.target.value)
                                    }
                                    }>
                                        <option value="All">All</option>
                                        {tags.map((tag) => {
                                            return <option value={tag.name}>{tag.name}</option>
                                        })}
                                    </select>
                                </div>
                                
                            </div>
                            {filteredPosts.map((post, index) => (
                                <PostCard
                                    key={index}
                                    post={post}
                                ></PostCard>
                            ))}
                        </>
                    
                )}
        
        </div>
    )
}