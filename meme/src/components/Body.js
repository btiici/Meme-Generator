import React from "react"


export default function Body(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https:\/\/i.imgflip.com\/30b1gx.jpg"
    })

    const [allMeme, setallMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMeme(data.data.memes))
    }, [])

    function getMeme(){
        const randomNum = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNum].url
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage : url
            }
        })
    }

   

    function handleChange(event){
        const {name, value} = event.target
        setMeme(
            prevMeme => {
                return{
                    ...prevMeme,
                    [name] : value
                }
            }
        )
    }
 
    return(
        <main>
            <div className="form">          
                <input 
                type="text" 
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange} />
                <input 
                type="text" 
                placeholder="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange} />
                
            </div>
            <button onClick={getMeme}>Get a new meme image 🏙 </button>
            <div className="meme">
                <img src= {meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

