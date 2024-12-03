import "./Post.css"


interface IPostProps{
    profilePicture: any,
    title: string,
    author: string,
    dateOfUpload: string,
    answers: number,
    views: number
}

export function Post(props: IPostProps){


    return (
        <div id="post">
            
            <div id="leftSideOfPost">
                <img id="profilePicturePost" src={props.profilePicture} alt="" />
            

                <div id="titleAuthorDate">
                    <h4 id="title">{props.title}</h4>
                    <div id="lowerMenu">
                        <p id="author">{props.author}</p>
                        <p>•</p>
                        <p id="date">{props.dateOfUpload}</p>
                    </div>
                    
                </div>
            </div>

            <div id="answersDiv">
                <h4 id="answers">Answers</h4>
                <p id="answersCount">{props.answers}</p>
            </div>

            <div id="viewsDiv">
                <h4 id="views">Views</h4>
                <p id="viewsCount">{props.views}</p>
            </div>
        </div>
    )
}