import { useState } from "react";

const Button = ({handleClick, name}) => {
  return (
    <button onClick = {handleClick}>{name}</button>
  )
} 

const Statistics = ({good,bad,neutral,all}) => {
  if(all === 0) 
  return(
  <>
    <h2>Statistics</h2>
    <p>No feedback given</p>
  </>
  )
  else
  return(
    <>
    <h2>Statistics</h2>
      <p>
        <StatisticLine text = "good" value = {good}/> 
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/> 
        <StatisticLine text = "all" value = {all} /> 
        <StatisticLine text = "Average" value =  {((good-bad)/all).toFixed(2) || 0}/> 
        Positive : {((good/all)*100).toFixed(2) || 0}% 
      </p>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
    <table>
      <tbody>
        <tr> {text} : {value} </tr>
      </tbody>
    </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addToGood = () => {
    setGood(good+1)
    setAll(all+1)
  }
  const addToNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const addToBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }
  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick = {addToGood} name = 'Good'/>
      <Button handleClick = {addToNeutral} name = 'Neutral'/>
      <Button handleClick = {addToBad} name = 'Bad'/>
      <Statistics good = {good} bad = {bad} neutral = {neutral} all={all}/>
    </>
  )
}
export default App;
