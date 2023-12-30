const Header = (props) => {
  // console.log(props)
  return <h1>{props.course}</h1>
}


const Content = (props) => {
  return (
    <div> 
    {props.parts.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </div>  
  ) 
}

const Total = (props) => {
  let sum = 0;
  props.parts.map((part) => {
    sum += part.exercises;
  });
  return (
    <div>
      <p>Total Number of exercises: {sum}</p>
    </div>
  );
}

// const Content = (props) => {
//   const parts = props.parts
//   const list = []
//   parts.forEach((part, index) => {
//     list.push(<p key={index}>{part.name} {part.exercises}</p>)
//   })
//   return (
//     <div> 
//     {list}
//     </div>  
//   ) 
// }


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App;