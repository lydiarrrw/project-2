import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [movies, updateMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0a895add9d901b3739275b20fb88282b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(data => {
        updateMovies(data.data.results)
      })
  }, [])

  //console.log(movies)

  function newPage(pageno) {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0a895add9d901b3739275b20fb88282b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageno}`)
      .then(data => {
        updateMovies(data.data.results)
      })

  }

  // console.log(movies)





  return <section>
    <button onClick={((event) => newPage(2))}>2</button>
    <div>
      {movies.map((movie) => {
        // console.log(movie.poster_path)
        return <Link key={movie.id} to={{
          pathname: `/project-2/MoviePage/${movie.id}`,
          state: {
            name: movie.name
          }
        }}>

          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />

          </div>

        </Link>

      })}
    </div>
  </section>
}

export default Home