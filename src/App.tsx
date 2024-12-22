
import { Layout } from "./shared/Layout/Layout";
import { Main } from "./shared/Main/Main";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostListPage } from "./pages/PostListPage/PostListPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { MainPage } from "./pages/MainPage/MainPage";



export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}