import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { tsConstructorType } from '@babel/types';

function Year4Puzzle(props){
  return (
    <div id="welcome">
      <p>maze stuff goes here eventually</p>
      <Link to='/congrats'><button>Click to continue for now..</button></Link>
    </div>
  );
}

Year4Puzzle.propTypes = {
};

export default Year4Puzzle;
