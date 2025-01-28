import { Layout } from "./shared/Layout/Layout";
import { Main } from "./shared/Main/Main";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostListPage } from "./pages/PostListPage/PostListPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { IPost } from "./hooks/usePosts";
import { createContext, useEffect, useState } from "react";

type SetFunction = (isButtonClicked: boolean) => void;

interface ILikedPostsContext {
	likedPosts: IPost[];
	checkStatus: (likedPost: IPost) => boolean;
	likePost: (likedPost: IPost) => void;
	unlikePost: (likedPost: IPost) => void;
}

const initialValue: ILikedPostsContext = {
	likedPosts: [],
	checkStatus: (likedPost: IPost) => false,
	likePost: (likedPost: IPost) => {},
	unlikePost: (likedPost: IPost) => {},
};

export const likedPostsContext =
	createContext<ILikedPostsContext>(initialValue);

export function App() {
	const [likedPosts, setLikedPosts] = useState<IPost[]>([]);


	function checkStatus(likedPost: IPost) {
		if (likedPosts.find((post) => likedPost.id === post.id)) {
			return true;
		}
		return false;
	}

	function likePost(likedPost: IPost) {
		if (!checkStatus(likedPost)) {
			const tempArray = [...likedPosts, likedPost];
			setLikedPosts(tempArray);
		} else {
			const tempArray = [...likedPosts];
			const index = tempArray.findIndex(
				(post) => post.id === likedPost.id
			);
			tempArray.splice(index, 1);
			setLikedPosts(tempArray);
		}
	}

	function unlikePost(likedPost: IPost) {
		if (checkStatus(likedPost)) {
			const tempArray = [...likedPosts];
			const index = tempArray.findIndex(
				(post) => post.id === likedPost.id
			);
			tempArray.splice(index, 1);
			setLikedPosts(tempArray);
		}
	}

	return (
		<likedPostsContext.Provider
			value={{
				likedPosts: likedPosts,
				likePost: likePost,
				checkStatus: checkStatus,
				unlikePost: unlikePost,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout></Layout>}>
						<Route
							path="/posts"
							element={<PostListPage></PostListPage>}
						></Route>
						<Route
							path="/post/:id"
							element={<PostPage></PostPage>}
						></Route>
						<Route path="/" element={<MainPage></MainPage>}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</likedPostsContext.Provider>
	);
}
