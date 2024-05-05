import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  
  useEffect(()=> {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
  } ,[])

  return (
    <>
      <header>
        {/* What component should go here? */}
        < NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1> Actors Page</h1>
        {actors.map((actor) => {
   return <article> 
            <h2> {actor.name} </h2>
            {actor.movies.map((movie) => {
   return     <li key={movie}> {movie} </li>
            })}
          </article>
        })}
      </main>
    </>
  );
};

export default Actors;
