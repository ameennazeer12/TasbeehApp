import React, {useState} from 'react'
import './App.css'
import CountApp from './CountApp'

const App = () => {
    const [appear,setAppear] = useState(true) 
    const [dua,setDua] = useState('')
    const [countappear,setCountappear] = useState(false)
    const handleClick = (e) => {
        const myDua = e.target.innerText
        setAppear((appear) => !appear)
        setDua(myDua)
        setCountappear((countappear) => !countappear)
    }
    return (
        <div>
            <h1>Tasbeeh App</h1>
            {appear?
            <>
            <button id='btn-1' onClick={handleClick}> سبحان الله </button>
            <button id='btn-2' onClick={handleClick}> الحمد لله </button>
            <button id='btn-3' onClick={handleClick}> الله أكبر </button>
            <button id='btn-4' onClick={handleClick}> لا إله إلا الله </button>
            <button id='btn-5' onClick={handleClick}> أَسْتَغْفِرُ اللّٰهَ‎ </button>
            </>
            :null}
           {countappear?<CountApp appearhand={handleClick} dua={dua}/>:null} 

            {/* <footer>
                <p style={{display:'inline'}}>Built by Ameen  </p>
                <a href="https://www.linkedin.com/in/ameen-nazeer-42307b13a/" rel="noreferrer" target='_blank'>LinkedIn</a>
            </footer> */}
        </div>
    )
}

export default App
