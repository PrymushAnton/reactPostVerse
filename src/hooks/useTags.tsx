import { useEffect, useState } from "react"

// дублируешь интерфейс
export interface ITag{
    id: number,
    name: string
}



export function useTags(){

    const [tags, setTags] = useState<ITag[]>([])
    const [isLoading, setIsLoading] = useState(false)
    // boolean error не очень хороший вариант
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getTags(){
            try{
                const response = await fetch("http://localhost:8000/api/tag/all")
                const result = await response.json()
                setTags(result.data)
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getTags()
    }, [])

    return {tags: tags, isLoading: isLoading, error: error}
}