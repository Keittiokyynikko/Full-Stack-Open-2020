import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
      <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.pt} {props.cnt}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part pt = {props.course.parts[0].name} cnt = {props.course.parts[0].exercises}/>
      <Part pt = {props.course.parts[1].name} cnt = {props.course.parts[1].exercises}/>
      <Part pt = {props.course.parts[2].name} cnt = {props.course.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

return (
  <>
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/>
  </>
)
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
