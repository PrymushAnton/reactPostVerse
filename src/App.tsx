
import { Layout } from "./shared/Layout/Layout";
import { Main } from "./shared/Main/Main";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostListPage } from "./pages/PostListPage/PostListPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { IPost } from "./hooks/usePosts";
import { createContext, useEffect, useState } from "react";

type SetFunction = (isButtonClicked: boolean) => void


interface ILikedPostsContext{
    likedPosts: IPost[],
    clickOnLikedPost: (
        likedPost: IPost,
        setFunction: SetFunction
    ) => void
}

const initialValue: ILikedPostsContext = {
    likedPosts: [],
    clickOnLikedPost: (
        likedPost: IPost,
        setFunction: SetFunction
    ) => {}
}

export const likedPostsContext = createContext<ILikedPostsContext>(initialValue)


export function App(){

    const [likedPosts, setLikedPosts] = useState<IPost[]>([])

    // useEffect(() => {
    //     console.log(likedPosts)
    // }, [likedPosts])    

    function clickOnLikedPost(likedPost: IPost, setFunction: SetFunction){
        if (!likedPosts.find(post => likedPost.id === post.id)){
            const tempArray = [
                ...likedPosts,
                likedPost
            ]
            setFunction(true)
            setLikedPosts(tempArray)
        } else {
            const tempArray = [...likedPosts]
            const index = tempArray.findIndex(post => post.id === likedPost.id)
            tempArray.splice(index, 1);
            setFunction(false)
            setLikedPosts(tempArray)
        }
    }

    return (
        <likedPostsContext.Provider value={{likedPosts: likedPosts, clickOnLikedPost: clickOnLikedPost}}>
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