import { useTitle } from "../../hooks/useTitle"
import { PostList } from "../../shared/PostList/PostList"

export function PostListPage(){
    const {title} = useTitle("Posts page")

    return (
        <PostList></PostList>
    )
}