import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Year1Puzzle from './Year1Puzzle';
import Year2Puzzle from './Year2Puzzle';
import Year3Puzzle from './Year3Puzzle';
import Year4Puzzle from './Year4Puzzle';
import Year5Puzzle from './Year5Puzzle';
import Year6Puzzle from './Year6Puzzle';
import Year7Puzzle from './Year7Puzzle';

function Puzzle(props){
  return (
    <div id="puzzle-container">
    {props.currentYear === 1 ? <Year1Puzzle/>: 
    props.currentYear === 2 ? <Year2Puzzle/>: 
    props.currentYear === 3 ? <Year3Puzzle/>: 
    props.currentYear === 4 ? <Year4Puzzle/>: 
    props.currentYear === 5 ? <Year5Puzzle/>: 
    props.currentYear === 6 ? <Year6Puzzle/>: 
    props.currentYear === 7 ? <Year7Puzzle/>: 
    console.log("ERROR too many yearss")}
  </div>
  );
}

Puzzle.propTypes = {
    currentYear: PropTypes.number
};

export default Puzzle;