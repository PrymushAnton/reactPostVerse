import logoHeader from "./images/logo.png"
import "./Header.css"

export function Header(){
    return (
        <header>

            <div id="logoPostsHeader">
                <a id="logoHeaderLink" href="#">
                    <img id="logoHeader" src={logoHeader} alt="" />
                </a>
                
                <a id="postsHeader" href="#">Posts</a>
            </div>


            <input id="searchHeader" type="text" placeholder="Search"/>

            <div id="logInSignUpHeader">
                <div>  
                    <a id="logIn" href="#">
                        <svg id="logInIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5714 15V17.8572C13.5714 18.236 13.4209 18.5994 13.153 18.8673C12.8851 19.1352 12.5218 19.2857 12.1429 19.2857H2.14287C1.76398 19.2857 1.40062 19.1352 1.13271 18.8673C0.864804 18.5994 0.714294 18.236 0.714294 17.8572V2.14287C0.714294 1.76398 0.864804 1.40062 1.13271 1.13271C1.40062 0.864804 1.76398 0.714294 2.14287 0.714294H12.1429C12.5218 0.714294 12.8851 0.864804 13.153 1.13271C13.4209 1.40062 13.5714 1.76398 13.5714 2.14287V5.00001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.2857 10H7.85715" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7143 7.14285L7.85715 10L10.7143 12.8571" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>
                            Log in
                        </span>
                    </a>
                </div>

                <div>
                    <a id="signUp" href="">
                        <svg id="signUpIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14287 7.85715C9.11531 7.85715 10.7143 6.25817 10.7143 4.28572C10.7143 2.31328 9.11531 0.714294 7.14287 0.714294C5.17043 0.714294 3.57144 2.31328 3.57144 4.28572C3.57144 6.25817 5.17043 7.85715 7.14287 7.85715Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.28572 17.8572H0.714294V17.0827C0.725667 15.9939 1.01283 14.9256 1.54897 13.9778C2.08511 13.03 2.85272 12.2336 3.78011 11.6629C4.70751 11.0922 5.76442 10.7658 6.85212 10.7144C7.93984 10.6629 9.02285 10.8879 10 11.3684" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 10.7143V19.2857" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7143 15H19.2857" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>
                            Sign up
                        </span>
                    </a>
                </div>
            </div>

        </header>
    )
}