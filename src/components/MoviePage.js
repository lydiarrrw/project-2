import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const MoviePage = ({ match }) => {
  const id = match.params.id
  const [movie, updateMovie] = useState({})
  const [reccomended, updateReccomended] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apikey}&language=en-US`)
      .then(({ data }) => {
        updateMovie(data)
      })


    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.apikey}&language=en-US&page=1`)
      .then(({ data }) => {
        updateReccomended(data.results)

      })
  }, [id])

  //console.log(reccomended)

  return <div>
    {/* <Rex id={id}/> */}
    <div>Name: {movie.name}</div>
    <div>About: {movie.overview}</div>
    <div>Release date: {movie.release_date}</div>
    <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} height="400px" />

    {reccomended.map((item) => {
      return <Link key={item.id} to={{
        pathname: `/project-2/MoviePage/${item.id}`,
        state: {
          name: item.name
        }
    
      }}>

        <div>
          
          <div>Name: {item.name}</div>
          <div>About: {item.overview}</div>
          <div>Release date: {item.release_date}</div>
          <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title} height="400px" />
        </div>
      </Link>
    })}

  </div>






}
export default MoviePage


// export default function Character({ match }) {
//   const id = match.params.id

//   const [character, updateCharacter] = useState({})



//   useEffect(() => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then(({ data }) => {
//         updateCharacter(data)
//       })
//   }, [])

