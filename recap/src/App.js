import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const movies = ['coco', 'lucy', 'roma', 'the pianist']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
      </header>
    </div>
  );
}
// ============================================;
function MovieCounter(){
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{padding:'10px 20px', background:'#353535', color:'#fff', border:'2px solid #ffffff'}}>Add movie</button>
      <h2>Number of movies: {count}</h2>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count - 10}></MovieDisplay>
      <MovieDisplay movies={count || 20}></MovieDisplay>
    </div>
  )
}
// ============================================;
function MovieDisplay(props){
  return (
    <div>
      <h4 style={{margin:'0',}}>Dr. Strange</h4>
      <h2 style={{margin:'0', color: 'tomato'}}>Multiverse of Madness {props.movies}</h2>

    </div>
  )
}

export default App;
