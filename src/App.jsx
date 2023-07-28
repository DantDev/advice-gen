import React, { useState } from "react"
import dividerDesk from "./assets/images/pattern-divider-desktop.svg"
import dividerMob from "./assets/images/pattern-divider-mobile.svg"
import diceIcon from "./assets/images/icon-dice.svg"

function App() {
  const [id, setId] = useState(1)
  const [advice,setAdvice] = React.useState([])

  const updateQuote = () => {
    setId(Math.ceil(Math.random() * (224-1)) + 1)
  }

  const fetchAdvice = async () => {
    try {
      const response = await 
      fetch(`https://api.adviceslip.com/advice/${id}`)
      const data = await response.json()
      setAdvice(data.slip.advice)
    } catch (err) {
      const {type , text } = err.message
      if (type === "error") {
        alert(text)
      }
    }
  }
  
  React.useEffect(() => {
    const controller = new AbortController()

    if (!controller.signal.aborted) fetchAdvice()

    return () => {
      controller.abort()
    }

  }, [id]);

  return (
    <div className='container'>
      <p className="advice-id">ADVICE #{id}</p>
      <h1 className="advice-text">"{advice}"</h1>
      <img className="divider-desktop" src={dividerDesk} />
      <img className="divider-mobile" src={dividerMob} />
      <button onClick={updateQuote} className="advice-btn"><img src={diceIcon}/></button>
    </div>
  )
}

export default App
