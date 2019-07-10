import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props){
  return (
    <div id="welcome">
        <h3>Welcome to Hogwarts! You are about to begin Year {props.currentYear}</h3>
        {(props.currentYear === 1) ? <button>Get sorted</button> : <button>Go to your commonroom</button>}
    </div>
  );
}

Welcome.propTypes = {
    currentYear: PropTypes.number
};

export default Welcome;