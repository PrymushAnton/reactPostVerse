import { profile } from "console";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PostList } from "../PostList/PostList";
import firstPfp from "../Post/images/firstPfp.png"

import "./Main.css"

export function Main(){
    return (
        <main>
            <Header></Header>
            <PostList></PostList>

            
            <Footer></Footer>
        </main>

    )
}