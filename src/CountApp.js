import React,{useState} from 'react'
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

  const increament = () => {
      setCount((count) => count+1)
  }
  const save = () => {
      localStorage.setItem(props.dua,JSON.stringify(count))
      
  }
    return (
        <div>
            <p>{props.dua}</p>
            <p style={{color:'forestgreen'}}>Counter: {count}</p>
            <button id='btn-click' onClick={increament}>Click</button>
            <button id='btn-save' onClick={save}>Save</button>
            <button id='btn-reset' onClick={() => {setCount(0)}}>Reset</button>
            <button id='btn-home' onClick={props.appearhand}>Home</button>
        </div>
    )
}

export default CountApp
