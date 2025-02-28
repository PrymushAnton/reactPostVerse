// не использованные импорты
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
import { LikedPostsPage } from "./pages/LikedPostsPage/LikedPostsPage";


import { LikedPostsContextProvider } from "./context/likedPostsContext";
import { AppRoutes } from "./Routes/Routes";

export function App() {
    // лишние пустые строки
	

	return (
		<LikedPostsContextProvider>
			<AppRoutes/>
		</LikedPostsContextProvider>
	);
}
