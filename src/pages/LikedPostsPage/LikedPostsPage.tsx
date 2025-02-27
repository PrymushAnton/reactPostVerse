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
						id={post.id}
						title={post.title}
						text={post.text}
						userId={post.userId}
						tagId={post.tagId}
						Comments={post.Comments}
						User={post.User}
						Tag={post.Tag}
					></PostCard>
				);
			})}
		</div>
	);
}
