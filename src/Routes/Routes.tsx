import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route 
                        path="/" 
                        element={<MainPage/>} 
                    />

					<Route
						path="/posts"
						element={<PostListPage/>}
					/>

					<Route 
                        path="/post/:id" 
                        element={<PostPage/>} 
                    />

					<Route
						path="/liked-posts"
						element={<LikedPostsPage/>}
					/>

					<Route
						path="/register"
						element={<RegistrationPage/>}
					/>

					<Route 
                        path="/login" 
                        element={<LoginPage/>} 
                    />
                    
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
