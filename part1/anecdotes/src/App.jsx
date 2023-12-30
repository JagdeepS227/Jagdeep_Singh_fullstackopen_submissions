import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Header = (props) => {
  return <h1>{props.title}</h1>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votehandler = () => {
    var votes1 = [...votes]
    votes1[selected]+=1

    if (votes1[selected]>most_voted[0]){
      const most_voted1 = [...most_voted]
      most_voted1[0]=votes1[selected]
      most_voted1[1]=selected
      setMostVoted(most_voted1)
    }
    setVotes(votes1)
  }
  const initial_anec = getRandomInt(anecdotes.length-1)
  const [selected, setSelected] = useState(initial_anec)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)) 
  const [most_voted, setMostVoted] = useState([0, initial_anec]) //[0, A]

  
  return (
    <div>
      <Header title="Anecodate of the day"></Header>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <button onClick={votehandler}>vote</button>
      <button onClick = {()=> {setSelected(getRandomInt(anecdotes.length-1))}}>next anecdote</button>
      <Header title="Anecodate with most votes"></Header>
      {anecdotes[most_voted[1]]}
      <br></br>
      has {votes[most_voted[1]]} votes
      <br></br>
    </div>
  )
}

export default App