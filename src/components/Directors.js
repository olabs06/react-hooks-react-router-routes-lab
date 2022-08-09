import React from "react";
import { directors } from "../data";
import {nanoid} from "nanoid"

function Directors() {
  return (
  <div>
      <h1>Directors Page</h1>
      {directors.map(director=>
        <div key={nanoid(7)}>
          <h1>{director.name}</h1>
          <ul>{director.movies.map(movie => 
            <li key={nanoid(7)}>{movie}</li>
            )}
          </ul>
        </div>
        )}
  </div>);
}

export default Directors;
