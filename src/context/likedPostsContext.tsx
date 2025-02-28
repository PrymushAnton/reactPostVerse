import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../hooks/usePosts";
// пустые строки






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
// экспортировать не надо, тк есть хук useLikedPostsContext
export const likedPostsContext = createContext<ILikedPostsContext>(initialValue);


interface ILikedPostsContextProps{
    // children по хорошему делать опциональными
    children: ReactNode
}
// вот его используем вместо export контекста
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
        if (!checkStatus(likedPost)) {
            const tempArray = [...likedPosts, likedPost];
            setLikedPosts(tempArray);
        // else не надо
        } else {
            const tempArray = [...likedPosts];
            const index = tempArray.findIndex(
                (post) => post.id === likedPost.id
            );
            tempArray.splice(index, 1);
            setLikedPosts(tempArray);
        }

        // if (checkStatus(likedPost)) return

        // const tempArray = [...likedPosts, likedPost];
        // setLikedPosts(tempArray);
    }

    function unlikePost(likedPost: IPost) {
        // if (!checkStatus(likedPost)) return
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
            {children}
        </likedPostsContext.Provider>
    )
}