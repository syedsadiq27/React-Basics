import logo from './logo.svg';
import './App.css';
import Component1 from './components/navigation/Component1';
import Movie from './movies/Movie';
import NavBar from './movies/NavBar';
import { MovieContext, MovieProvider } from "./context/MovieContext"
import { useContext } from 'react'
import AddMovie from './movies/AddMovie';

function App() {


  return (

    <MovieProvider>

      <div className="App">
        <h1> Welcome to The Movue Channels: </h1>
        <NavBar />
        <Movie />
        <hr></hr>
        <AddMovie />
      </div>

    </MovieProvider>

  );
}

export default App;