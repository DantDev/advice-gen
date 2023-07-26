import React from "react"
import dividerDesk from "./assets/images/pattern-divider-desktop.svg"
import dividerMob from "./assets/images/pattern-divider-mobile.svg"
import diceIcon from "./assets/images/icon-dice.svg"

function App() {
  const [advice,setAdvice] = React.useState([])

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    setAdvice({
      id: data.slip.id,
      advice: data.slip.advice
    })
  }
  
  React.useEffect(() => {
    fetchAdvice()
  }, []);

  return (
    <div className='container'>
      <p className="advice-id">ADVICE #{advice.id}</p>
      <h1 className="advice-text">"{advice.advice}"</h1>
      <img className="divider-desktop" src={dividerDesk} />
      <img className="divider-mobile" src={dividerMob} />
      <button onClick={fetchAdvice} className="advice-btn"><img src={diceIcon}/></button>
    </div>
  )
}

export default App
