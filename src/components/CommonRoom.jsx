import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CommonRoom(props){
  return (
    <div id="commonRoom">
    <h5>Welcome to your common room, {props.house}! Here is a list of your fellow classmates:</h5>
    <Link to="/class"><button type="button" id="beginClasses">Begin your classes.</button></Link>
    <button type="button" id="viewClassmates">View a list of notable {props.house}s</button>
    <ul id="classList"></ul>
  </div>
  );
}

CommonRoom.propTypes = {
    house: PropTypes.string
};

export default CommonRoom;