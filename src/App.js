import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import MoviePage from './components/MoviePage.js'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/project-2" component={Home} />
      <Route path="/project-2/MoviePage/:id" component={MoviePage} />
    </Switch>
  </BrowserRouter>
)



export default App