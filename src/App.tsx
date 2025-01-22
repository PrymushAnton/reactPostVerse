
import { Layout } from "./shared/Layout/Layout";
import { Main } from "./shared/Main/Main";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostListPage } from "./pages/PostListPage/PostListPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { IPost } from "./hooks/usePosts";
import { createContext, useState } from "react";


interface ILikedPostsContext{
    likedPosts: IPost[],
    addLikedPost: (likedPost: IPost, button: HTMLButtonElement) => void
}

const initialValue: ILikedPostsContext = {
    likedPosts: [],
    addLikedPost: (likedPost: IPost, button: HTMLButtonElement) => {}
}

export const likedPostsContext = createContext<ILikedPostsContext>(initialValue)


export function App(){

    const [likedPosts, setLikedPosts] = useState<IPost[]>([])
    function addLikedPost(likedPost: IPost, button: HTMLButtonElement){
        if (!likedPosts.find(post => likedPost.id === post.id)){
            const tempArray = [
                ...likedPosts,
                likedPost
            ]
            setLikedPosts(tempArray)
            button.disabled = true
            console.log(likedPosts)
        }
        

    }

    return (
        <likedPostsContext.Provider value={{likedPosts: likedPosts, addLikedPost: addLikedPost}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                        <Route path="/" element={<MainPage></MainPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </likedPostsContext.Provider>
    )
}