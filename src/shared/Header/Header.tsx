import logoHeader from "../../assets/images/logo.png"
import "./Header.css"
import { Link } from "react-router-dom"
import { Icons } from "../Icons/Icons"
import { useUserContext } from "../../context/userContext"

export function Header(){


    const {isAuthenticated, logout} = useUserContext()
    
    return (
        <header>
            <div id="logoPostsHeader">
                <Link to='/' id="logoHeaderLink">
                    <img id="logoHeader" src={logoHeader} alt="" />
                </Link>
                    
                <Link to="/posts" id="postsHeader">Posts</Link>
            </div>


            <input id="searchHeader" type="text" placeholder="Search"/>

            
                {
                    isAuthenticated()
                    ? <div id="logInSignUpHeader">
                        <Link to="/profile">
                            <span>Profile</span>
                        </Link>

                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="logInSignUpHeader">
                        <div>
                            <Link id="logIn" to={"/login"}>
                                {<Icons.IconLogin />}
                                <span>
                                    Log in
                                </span>
                            </Link>
                        </div>

                        <div>
                            <Link id="signUp" to={"/register"}>
                                {<Icons.IconRegistration />}
                                <span>
                                    Sign up
                                </span>
                            </Link>
                        </div>
                    </div>
                }
            
                

        </header>
    )
}