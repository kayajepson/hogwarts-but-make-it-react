import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Whomp from '../img/YearThreePuzzle|Snake.jpg';

function Year3Puzzle(props){
  return (
    <div id="welcome">
      <map name="image-map">
        <area target="" alt="" title="" href="/commonroom" coords="252,257,281,276,323,287,314,298,275,290,247,274" shape="poly"/>
      </map>
      <img src={Whomp} usemap="#image-map"></img>
        
    </div>
  );
}

Year3Puzzle.propTypes = {
};

export default Year3Puzzle;