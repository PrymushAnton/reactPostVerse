import { useEffect, useState } from "react"

// для интерфейсов создать папку types и в нее закинуть все интерфейсы
export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    role: string
}

export interface ITag{
    id: number,
    name: string
}

export interface IComment{
    id: number;
    title: string;
    text: string;
    userId: number;
    postId: number;
}

export interface IPost{
    id: number,
    text: string,
    title: string,
    userId: number,
    tagId: number,
    Comments: IComment[],
    User: IUser,
    Tag: ITag
}



export function usePosts(){

    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getPosts(){
            try{
                setIsLoading(true)
                const response = await fetch("http://localhost:8000/api/post/all")
                const result = await response.json()

                if (result.status === "error") {
                    setError(result.message)
                    return
                }
                setPosts(result.data)
            } catch (error) {
                const err = error instanceof Error ? error.message : undefined
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        getPosts()
    }, [])

    return {posts: posts, isLoading: isLoading, error: error}
}