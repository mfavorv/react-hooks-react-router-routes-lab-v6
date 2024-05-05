import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
  },[])

    return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1> Directors Page </h1>
      
          {directors.map((director) => {
     return   <article key={director.id}>
                <h2> {director.name}</h2>
                <ul>
              {director.movies.map((movie) => {
     return       <li key={movie.index} >{movie}</li>
              })}
                </ul>
              </article>
          })}
      
      </main>
    </>
  );
};

export default Directors;
