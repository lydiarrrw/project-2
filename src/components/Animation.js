import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Animation = () => {
  const [movies, updateMovies] = useState([])
  const [pages, updatePages] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`)

      .then(data => {
        updateMovies(data.data.results)
        updatePages(data.data)
      })
  }, [])

 
  function newPage(pageno) {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageno}&with_genres=16`)
      .then(data => {
        const filterPoster = data.data.results.filter(poster => {
          return poster.poster_path !== null
        })
        updateMovies(filterPoster)
      })
  }

  function handleClick(data) {
    console.log(data.selected)
    console.log(data)
    newPage(data.selected)
  }

  return <section className="page-container">
    <div className="page-nation">
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'add class name to change how it looks'}
        pageCount={pages.total_pages}
        pageClassName={'pageclasses'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        initialPage={4}
        onPageChange={handleClick}
        containerClassName={'pagination'}
      // subContainerClassName={'pages pagination'} - ?
      // activeClassName={'active'} -?
      />
      {/* <button onClick={((event) => newPage(horror))}>2</button> */}

    </div>

    <div className="container">
      {/* <div className="columns is-multiline is-mobile"> */}
      {movies.map((movie) => {
        // console.log(movie.poster_path)
        return <div key={movie.id}>
          <Link key={movie.id} to={{
            pathname: `/project-2/MoviePage/${movie.id}`,
            state: {
              name: movie.name
            }
          }}>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    {/* <div key={movie.id}>
                        <h3 className="title is-5">{movie.title}</h3>
                      </div> */}
                  </div>
                </div>
                <div className="card-image">
                  <div className="image is-4by5">
                    <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      })}
      {/* react-paginate from https://www.npmjs.com/package/react-paginate */}
      {/* </div> */}
    </div>
  </section>
}
export default Animation