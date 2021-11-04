import React,{useState,useEffect} from 'react'
import './App.css'

const CountApp = (props) => {
    const [count, setCount] = useState(() => {
        const value = JSON.parse(localStorage.getItem(props.dua))
        if(value){
            return value
        }
        else{
            return 0
        }
        })
    const [buttonClick, setButtonClick] = useState({text:'',clicked:false,color:''})
    const increament = () => {
        setCount((count) => count+1)
    }
    const save = () => {
        localStorage.setItem(props.dua,JSON.stringify(count))
        setButtonClick({text:'Saved!!!',clicked:true,color:'blue'})
    }

    useEffect(()=> {
        const timer = setTimeout(()=> {
        setButtonClick({text:'',clicked:false})
        }, 2000)
        return ()=> clearTimeout(timer)
    }, [buttonClick])


    return (
        <div>
            <p style={{color:'darkslategray'}}>{props.dua}</p>
            {!buttonClick.clicked
            ?<p style={{color:'forestgreen'}}>Counter: {count}</p>
            :<p style={{color:buttonClick.color}}>{buttonClick.text}</p>}
            <button id='btn-click' onClick={increament}>Click</button>
            <button id='btn-save' onClick={save}>Save</button>
            <button id='btn-reset' onClick={() => {
                setCount(0) 
                setButtonClick({text:'Reset !!!',clicked:true,color:'purple'})}}>Reset</button>
            <button id='btn-home' onClick={props.appearhand}>Home</button>
        </div>
    )
}

export default CountApp
