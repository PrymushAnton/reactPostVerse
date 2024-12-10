import { profile } from "console";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PostList } from "../PostList/PostList";
import firstPfp from "../Post/images/firstPfp.png"

import "./Main.css"
import { ReactNode } from "react";

interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps){
    return (
        <main>
            {/* <Header></Header> */}
            {/* <PostList></PostList> */}
            {props.children}

            
            {/* <Footer></Footer> */}
        </main>

    )
}