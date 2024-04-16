import troll from "../Images/Logo.png"

export default function Nav(){
    return(
        <div className="nav">
            <div className="left">
                <img src={troll}/>
                <h2>Meme Generator</h2>
            </div>
            <div>
                <h4>React Course - Project 3</h4>
            </div>
        </div>
    )
}