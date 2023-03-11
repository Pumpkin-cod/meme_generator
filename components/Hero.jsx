import  React from 'react';
import { StrictMode } from 'react';
import MemesData from '../MemesData';


export default function Hero() {
// using our state in an array
// const [memeImage,setMemeImage] = React.useState("")

//     function getMemeImage() {
//         const memesArray = MemesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)

//         // const url = memesArray[randomNumber].url
//         // console.log(url)
//     }
// using  our state as an object.
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    return (
        <main>
            <div className='form'>
                <input
                    className='form__input'
                    placeholder='top text'
                    type='text' />
                <input
                    className='form__input'
                    placeholder='bottom text'
                    type='text' />
                <button
                    className='form__button'
                    onClick={getMemeImage}
                > Get a new meme image  🖼</button>
            </div>
            <img src={meme.randomImage} className = 'meme__image'/>
        </main>
    )
}