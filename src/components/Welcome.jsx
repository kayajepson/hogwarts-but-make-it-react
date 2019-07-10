import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Welcome(props){
  return (
    <div id="welcome">
        <h3>Welcome to Hogwarts! You are about to begin Year {props.currentYear}</h3>
        {(props.currentYear === 1) ? <Link to="/sorting"><button>Get sorted</button></Link> : <Link to="/commonroom"><button>Go to your commonroom</button></Link>}
    </div>
  );
}

Welcome.propTypes = {
    currentYear: PropTypes.number
};

export default Welcome;