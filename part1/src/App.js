const App = () => {
  const course = {
    name : 'Half Stack application development',
      parts : [
    {
    name : 'Fundamentals of React',
    exercises1 : 10
    },
    {
    name : 'Using props to pass data',
    exercises2 : 7 
    },
    {
    name : 'State of component',
    exercises3 : 14
    }
  ]
}

  return(
    <div>
      <Header course={course}/>
      <Content part = {parts}/>
      <Total exercise = {parts}/>
    
    </div>
  )
}

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    console.log(props)  
    return (
      <>
      <Part part = {props.part} exercise = {props.exercise}/>
      </>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.part} : {props.exercise}
      </p>
    )
  }

  const Total = (props) => {
    const sum = props.exercise.reduce((a,b) => a+b,0)
    return (
      <p>Number of exercises : {sum}</p>
    )
  }
export default App;
