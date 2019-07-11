import React from 'react';
import Background from '../img/YearSixPuzzle|Diary.jpg';
import GameControl from './GameControl';

function Year6Puzzle(props){
  return (
    <div id="year-six-puzzle">
        <h3>This would be the year 6 puzzle</h3>
        <style jsx>{`
          #year-six-puzzle {
            background-image: url(${Background});
            background-size: cover;
            height: 100vh;
            background-position: top left;
            color: white;
          }
        `}</style>
        <GameControl/>
    </div>
  );
}

export default Year6Puzzle;