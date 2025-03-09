import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../hooks/usePosts";


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

const likedPostsContext = createContext<ILikedPostsContext>(initialValue);


interface ILikedPostsContextProps{
    children?: ReactNode
}

export function useLikedPostsContext() {
    return useContext(likedPostsContext)
}


export function LikedPostsContextProvider(props: ILikedPostsContextProps) {
    const {children} = props

    const [likedPosts, setLikedPosts] = useState<IPost[]>([]);


    function checkStatus(likedPost: IPost) {
        if (likedPosts.find((post) => likedPost.id === post.id)) {
            return true;
        }
        return false;
    }

    function likePost(likedPost: IPost) {
        if (checkStatus(likedPost)) return

        const tempArray = [...likedPosts, likedPost];
        setLikedPosts(tempArray);
    }

    function unlikePost(likedPost: IPost) {
        if (!checkStatus(likedPost)) return
        
        const tempArray = [...likedPosts];
        const index = tempArray.findIndex(
            (post) => post.id === likedPost.id
        );
        tempArray.splice(index, 1);
        setLikedPosts(tempArray);
        
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
            {children}
        </likedPostsContext.Provider>
    )
}