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

  return <section className="movie-container">
    <div className="rex-box">
      <div className="left-box">
        <div className="top-left-box">
          <p className="title">{movie.title}</p>
          <p className="text">{movie.overview}</p>
          <p>{movie.vote_average}/10</p>
          <p>Released: {movie.release_date}</p>
        </div>
        <div>
          <p className="subtitle">REXOMMENDATIONS FROM REXFLIX</p>
        </div>

        <div className="bottom-left">
          <div className="reccomendations">
            <div className="container">
              <div className="columns is-multiline">
                {reccomended.map((item) => {
                  return <div key={item.id}>
                    <Link  to={{
                      pathname: `/project-2/MoviePage/${item.id}`,
                      state: {
                        name: item.name
                      }
                    }}>

                      <div className="card">
                        <div className="card-content">
                          {/* <div className="media">
                          <div className="media-content"> */}
                        </div>
                      </div>
                      <div className="card-image">
                        <div className="image is-128x128">
                          <img className="another" src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title}/>
                        </div>
                        {/* </div>
                      </div> */}
                      </div>
                    </Link>
                  </div>
                })}
              </div>
            </div>
          </div>


        </div>

      </div>

      <div className="right-box">
        <div className="image-poster">
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} height="400px" />
        </div>

      </div>

    </div>
  </section>



}
export default MoviePage


// export default function Character({match}) {
//   const id = match.params.id

//   const [character, updateCharacter] = useState({})



//   useEffect(() => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then(({ data }) => {
//         updateCharacter(data)
//       })
//   }, [])

