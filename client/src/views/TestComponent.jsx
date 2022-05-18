import React, {useState, useEffect} from 'react'
import axios from 'axios'



const TestComponent = () => {
    const [message, setMessage] = useState()
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/test`)
    .then(response => {
        setMessage(response.data)
        console.log(response.data)
    })
        .catch(err => console.error(err))
    }, [])
  return (
    <fieldset>
        <legend>Test</legend>
        {
            message?
            <h1> {message} </h1>:
            <h1>Loading...</h1>
        }
    </fieldset>
  )
}

export default TestComponent