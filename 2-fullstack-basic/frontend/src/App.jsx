import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const[jokes, setjokes] = useState([])

useEffect(()=>{
  axios.get("http://localhost:3000/jokes")
  .then((response)=>{
    setjokes(response.data)
  })
  .catch((error)=>{
    console.log("Error fetching jokes:", error);
  })
})

  return (
<>
<h1>Fullstack Basic Application</h1>
<p>JOKESl: {jokes.length}</p>
{
  jokes.map((joke)=>{
    <div key={joke.id} >
<h3>{joke.title}</h3>
<p>{joke.content}</p>

    </div>
  })
}
</>
  )
}

export default App
