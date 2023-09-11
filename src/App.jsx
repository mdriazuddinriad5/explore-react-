import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const books=[
    {id:1,name:'Biology',price:100},
    {id:2,name:'Math',price:120},
    {id:3,name:'Physics',price:130},
    {id:4,name:'Chemistry',price:150},
  ]

  const actors=['Shakib','Salman','Siam','Raj','Rubel','Jasim']
  const singers=[
    {name:'James',age:60},
    {name:'Pritom',age:31},
    {name:'Asif',age:56},
    {name:'Runa Laila',age:50},
    {name:'Habib',age:40},
    {name:'Imran',age:32},
  ]

  return (
    <>
      <h1>Vite+React</h1>

      <BookStore books={books}></BookStore>
      
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }

      <Actor name='Bappa Raz'></Actor>
      {
        actors.map(actor=> <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Core Concepts"
        isDone={false}>
      </Todo>
      <Todo
        task="Try JSX"
        isDone={true}>
      </Todo> */}
      {/*   <Device name="Laptop" price="150000"></Device>
      <Device name="Mobile" price='120000'></Device>
      <Device name="Watch" price="1230"></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={9} score='98'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {   //using props is conventional system
  // console.log(props);
  return <h3>This device is {props.name} price: {props.price}</h3>
}

function Person() {
  const age = 24;
  const money = 10000000000;
  const person = { name: 'Riad', profession: 'Software Engineer' }
  return <h2>I am a {person.name} with age: {age + money} and profession {person.profession}</h2>
}

const { grade, score } = { grade: '7', score: '99' };
function Student({ grade = 1, score = 0 }) {  //using object destructuring instead of props

  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )

}

function Developer() {

  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }

  return (
    <div style={developerStyle}>
      <h3>Dev Dev</h3>
      <p>Coding: </p>
    </div>
  )
}

export default App
