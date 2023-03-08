import React from 'react';
import Course from './components/Course';

const App = () => {
  const course = {
    name : 'Half Stack application development',
      parts : [
    {
    name : 'Fundamentals of React',
    exercises : 10,
    id : 1
    },
    {
    name : 'Using props to pass data',
    exercises : 7,
    id:2
    },
    {
    name : 'State of component',
    exercises : 14,
    id:3
    }
  ]
}

  return(
    <>
    <h1>Fullstack 2023</h1>
    <Course course = {course}/>
    </>
  )
}
export default App;
