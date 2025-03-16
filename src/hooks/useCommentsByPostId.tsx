import { useEffect, useState } from "react"

interface IUser{
    username: string
}

interface IComment{
    title: string
    text: string
    User: IUser
}


export function useCommentsByPostId(id: number){

    const [comments, setComments] = useState<IComment[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        // Number('dthrx') -> NaN
        // NaN -> number
        // NaN -> Boolean(NaN) -> false
        if (isNaN(id)) return

        async function getComments(){
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/comment/post/${id}`)

                const result = await response.json()
                if (result.status === "error") {
                    console.log(error)
                    return
                }
                
                setComments(result.data)
            } catch (error) {
                const err = error instanceof Error ? error.message : undefined
                setError(err)
            } finally {
                setIsLoading(false)
            }
            
        }
        getComments()
    }, [])


    return {
        comments:comments,
        isLoading: isLoading,
        error: error
    }
}