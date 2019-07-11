import React from 'react';
import Whomp from '../img/YearThreePuzzle|Snake.jpg';
import {Link} from 'react-router-dom';


var areaStyles = {
  cursor: 'inherit'
}

function Year3Puzzle(props){
  return (
    <div id="welcome">
      <map name="image-map">
        <Link to="/congrats"><area alt="a large bendy tree" style={areaStyles} coords="252,257,281,276,323,287,314,298,275,290,247,274" shape="poly"/></Link>
      </map>
      <img src={Whomp} useMap="#image-map" alt="a large bendy tree"></img>
        
    </div>
  );
}

Year3Puzzle.propTypes = {
};

export default Year3Puzzle;