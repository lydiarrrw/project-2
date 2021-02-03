import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Rex = ({ id }) => {
  // const id = match.params.id
  const [reccomended, updateReccomended] = useState({})

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=abf84179d97e7021a8f667b0768e1330&language=en-US&page=1`)
      .then(({ data }) => {
        updateReccomended(data)

      })
  }, [])

    
  console.log(reccomended)

  // if (loading) {
  //   return <h1>loading</h1>
  // }

  //   return <div>
  //   <div>Name: {movie.overview}</div>
  //   <div>Status: {movie.release_date}</div>
  //   <div>Species: {movie.species}</div>
  //   <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} height="100px" />
  // </div>

}
export default Rex