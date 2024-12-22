import { useEffect, useState } from "react"


import { IPost } from "./usePosts"



export function usePostById(id: number){

    const [postById, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getPostById(){
            try{
                const response = await fetch(`https://dev.to/api/articles/${id}`)
                const post = await response.json()
                setPost(post)
                setIsLoading(false)
            } catch (error) {
                setError(true)
            }
            
        }
        getPostById()
    }, [id])

    return {
        postById:postById,
        isLoading: isLoading,
        error: error
    }
}