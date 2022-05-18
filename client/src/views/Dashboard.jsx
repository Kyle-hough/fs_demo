import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const [songs, setSongs] = useState([])
  const navigate = useNavigate()
  useEffect(() =>{
    axios.get(`http://localhost:8000/api/songs`)
    .then(response =>{
      setSongs(response.data)
      console.log(response.data)
    })
    .catch (error => console.error(error))

  },[])
  
  const handleDelete = (deleteId) => {
    axios.get(`http://localhost:8000/api/songs/${deleteId}`)
    .then(response =>{
      const filteredList = songs.filter((song,i)=>song._id !== deleteId)
      setSongs(filteredList)
    })
    .catch(err => console.log(err))

  }

  return (
    <fieldset>
      <legend>Dashboard</legend>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Rating</th>
          <th colspan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          songs.map((song, i) => (
            <tr key={i}>
              <td><Link to={`/songs/${song._id}`}>{song.title}</Link></td>
              <td>{song.artist}</td>
              <td>{song.rating}</td>
              <td><Link to={`/songs/${song._id}/edit`}>Edit</Link></td>
              <td><button onClick={() => handleDelete(song._id)}>Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>

    </fieldset>
  )
}

export default Dashboard