
import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostList } from "./PostList/PostList";
import { PostPage } from "./PostPage/PostPage";



export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostList></PostList>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>


        // <Layout>
        //     <Header></Header>
        //     <Main></Main>
        //     <Footer></Footer>

        // </Layout>
    )
}