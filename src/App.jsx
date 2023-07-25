import React from "react"
import dividerDesk from "./assets/images/pattern-divider-desktop.svg"
import dividerMob from "./assets/images/pattern-divider-mobile.svg"
import diceIcon from "./assets/images/icon-dice.svg"

function App() {
  const [advice,setAdvice] = React.useState([])
  /*
   React.useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setAdvice(data.slip))
   },[])
*/ 
  const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => setAdvice(data.slip));
};

React.useEffect(() => {
fetchAdvice()
}, []);
  return (
    <div className='container'>
      <p className="advice-id">ADVICE #{advice.id}</p>
      <h1 className="advice-text">"{advice.advice}"</h1>
      <img src={dividerDesk} />
      <button onClick={fetchAdvice} className="advice-btn"><img src={diceIcon}/></button>
    </div>
  )
}

export default App
