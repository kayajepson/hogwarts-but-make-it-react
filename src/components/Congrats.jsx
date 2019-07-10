import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Welcome(props){
  return (
    <div id="welcome">
       {(props.currentYear === 1) ? <h5 id="anotherYear">Congratulations, youve made it through another year at Hogwarts! Enjoy your summer and we will see you back next year</h5> : <div id="passFail">Congratulations, you made it through your final year of Hogwarts! <span id="studentResult"></span></div>}
    </div>
  );
}

Welcome.propTypes = {
    currentYear: PropTypes.number
};

export default Welcome;