import { useEffect, useState } from "react"

export interface IPost{
    id: number,
    title: string,
    comments_count: number,
    public_reactions_count: number,
    published_at: string,
    cover_image: string,
    tags: string[],
    body_markdown: string,
    user: {
        profile_image: string,
        name: string
    }
}



export function usePosts(){

    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getPosts(){
            try{
                const response = await fetch("https://dev.to/api/articles")
                const posts = await response.json()
                setPosts(posts)
                setIsLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        getPosts()
    }, [])

    return {posts: posts, isLoading: isLoading, error: error}
}