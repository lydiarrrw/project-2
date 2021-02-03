import axios from 'axios'
// import Rex from './Rex.js'
import React, { useEffect, useState } from 'react'


const MoviePage = ({ match }) => {
  const id = match.params.id
  const [movie, updateMovie] = useState({})
  const [reccomended, updateReccomended] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0a895add9d901b3739275b20fb88282b&language=en-US`)
      .then(({ data }) => {
        updateMovie(data)

      })
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=abf84179d97e7021a8f667b0768e1330&language=en-US&page=1`)
      .then(({ data }) => {
        updateReccomended(data.results)

      })

  }, [])

  console.log(reccomended)

  return <div>
    {/* <Rex id={id}/> */}
    <div>Name: {movie.overview}</div>
    <div>Status: {movie.release_date}</div>
    <div>Species: {movie.species}</div>
    <img src={'https://image.tmdb.org§/t/p/w500' + movie.poster_path} alt={movie.title} height="400px" />

    {reccomended.map((item) => {
      return <div key={item.id}>
        <div>Name: {item.overview}</div>
        <div>Status: {item.release_date}</div>
        <div>Species: {item.species}</div>
        <img src={'https://image.tmdb.org§/t/p/w500' + item.backdrop_path} alt={item.title} height="400px" />
      </div>
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

