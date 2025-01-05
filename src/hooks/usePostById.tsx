import { useEffect, useState } from "react"


import { IPost } from "./usePosts"



export function usePostById(id: number){

    const [postById, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getPostById(){
            try {
                setIsLoading(true)
                const response = await fetch(`https://dev.to/api/articles/${id}`)
                if (!response.ok){
                    throw new Error(`Wrong id!`)
                }
                const post = await response.json()
                setPost(post)
                console.log("try")
            } catch (error) {
                console.log(typeof error)
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
                console.log("error")
            } finally {
                setIsLoading(false)
                console.log("finally")
            }
            
        }
        getPostById()
    }, [id])

    console.log(postById, isLoading, error)

    return {
        postById:postById,
        isLoading: isLoading,
        error: error
    }
}