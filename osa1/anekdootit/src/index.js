import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => {
  return(
    <>
    <h1>{text}</h1>
    </>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const BestAnecdote = (props) => {
  let max = props.points[0]
  let bestDote = props.anecdotes[0]

  for(let i = 1; i < props.points.length; i++) {
    if(props.points[i] > max) {
      max = props.points[i]
      bestDote = props.anecdotes[i]
    }
  }

  return (
    <>
    {bestDote}
    <p>has {max} votes</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])

  const handleNextClick = () => {
    const random = Math.floor(Math.random() * 6)
    setSelected(random)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <>
      <Header text={'Anecdote of the day'}/>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes </p>
      <Button onClick={handleVoteClick} text={'vote'}/>
      <Button onClick={handleNextClick} text={'next anecdote'}/>
      <Header text={'Anecdote with most votes'}/>
      <BestAnecdote points={points} anecdotes={anecdotes}/>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
