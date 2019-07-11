import React from 'react';
import {Link} from 'react-router-dom';
import MazeBegin from '../img/YearFourPuzzleStart.jpg';
import MazeEnd from '../img/YearFourPuzzleEnd|Harry.jpg';

function Year4Puzzle(props){
  return (
    <div id="welcome">
    <img src={MazeBegin} alt="overhead of hedge maze"/>
      <p>maze stuff goes here eventually</p>
      <Link to='/congrats'><button>Click to continue for now..</button></Link><br/>
      <img src={MazeEnd} alt="two figures at the center of a maze"/>
    </div>
  );
}



export default Year4Puzzle;
