import "./LikedPostsPage.css";
import { useLikedPostsContext } from "../../context/likedPostsContext";
import { PostCard } from "../../shared/PostList/PostCard/PostCard";

export function LikedPostsPage() {
	const { likedPosts } = useLikedPostsContext();

	return (
		<div className="likedPostsDiv">
            <div id="likedPostsText">
                <h1>Liked Posts</h1>
                
            </div>
			{likedPosts.map((post, index) => {
				return (
					<PostCard
						key={index}
						post={post}
					></PostCard>
				);
			})}
		</div>
	);
}
