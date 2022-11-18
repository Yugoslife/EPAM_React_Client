import * as React from 'react';
import HeaderSearchMovie from './headerSearchMovie'
import FindMovieField from './findMovieField'

export default function MovieSearchContainer() {
    return (
      <React.Fragment>
        <div><HeaderSearchMovie /></div>
        <div><FindMovieField /></div>
      </React.Fragment>
    );
  }
