import { useTitle } from "../../hooks/useTitle"
import { PostList } from "../../shared/PostList/PostList"

export function PostListPage(){
    useTitle("Posts page")

    return (
        <PostList></PostList>
    )
}