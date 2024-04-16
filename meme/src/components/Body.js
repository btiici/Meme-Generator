import React from "react"
import Data from "./Data"

export default function Body(){
    const [memeImage, setMemeImage] = React.useState("")

    function getMeme(){
        const memeArr = Data.data.memes
        const randomNum = Math.floor(Math.random() * memeArr.length)
        setMemeImage(memeArr[randomNum].url)

    }
 
    return(
        <main>
            <div className="form">          
                <input type="text" placeholder="Top Text"></input>
                <input type="text" placeholder="Bottom Text"></input>
                
            </div>
            <button onClick={getMeme}>Get a new meme image 🏙 </button>
            <img src={memeImage} className="meme"/>
        </main>
    )
}