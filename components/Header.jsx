import { StrictMode } from 'react';


export default function Header(){
    return(
       <header className = 'header'>
            <img className='header__img' src='../images/troll face.png' />
            <h2 className='header__title'>Meme Generator</h2>
            <h5 className='header__project'>New Project</h5>
       </header> 
    )
}