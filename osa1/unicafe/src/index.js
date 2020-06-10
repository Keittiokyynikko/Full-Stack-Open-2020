import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}


const Button = ( {onClick, text} ) => (
  <button onClick={onClick}>
  {text}
  </button>
)

const StatisticLine = ({value, text}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {
  const Average = props.sum / props.count
  const Positive = (props.content1 / props.count) * 100

  if(props.allbacks === 0) {
    return (
      <p>No feedback given</p>
    )
  }
    return (
      <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='good' value={props.content1}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='neutral' value={props.content2}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='bad' value={props.content3}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='all' value={props.allbacks}/></td>
          </tr>

          <tr>
            <td><StatisticLine text='average' value={Average}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='positive' value={Positive + ' %'}/></td>
          </tr>
        </tbody>
      </table>

      </>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allBacks, setBacks] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setBacks(allBacks + 1)
    setSum(sum + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setBacks(allBacks + 1)
    setSum(sum + 0)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setBacks(allBacks + 1)
    setSum(sum - 1)
  }

  return (
    <>
      <Header header={'give feedback'}/>

      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>

      <Statistics text1={'good'} content1={good}
      text2={'neutral'} content2={neutral}
      text3={'bad'} content3={bad}
      all={'all'} allbacks={allBacks}
      ave={'average'} sum={sum} count={allBacks}
      posi={'positive'}/>
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
