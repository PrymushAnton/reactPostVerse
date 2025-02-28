import { useEffect, useState } from "react"


import { IPost } from "./usePosts"



export function usePostById(id: number){

    const [postById, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        // Number('dthrx') -> NaN
        // NaN -> number
        // NaN -> Boolean(NaN) -> false
        if (isNaN(id)) return

        async function getPostById(){
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/post/${id}`)
                // throw нельзя
                if (!response.ok){
                    throw new Error(`Wrong id!`)
                }
                const post = await response.json()
                setPost(post.data)
            } catch (error) {
                console.log(typeof error)
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            } finally {
                setIsLoading(false)
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