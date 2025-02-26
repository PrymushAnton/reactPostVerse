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
						// comments_count={post.comments_count}
						// public_reactions_count={post.public_reactions_count}
						// published_at={post.published_at}
						// cover_image={post.cover_image}
						// tags={post.tags}
						// body_markdown={post.body_markdown}
						// user={{
						// 	profile_image: post.user.profile_image,
						// 	name: post.user.name,
						// }}
					></PostCard>
				);
			})}
		</div>
	);
}
