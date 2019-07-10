import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Welcome(props){
  return (
    <div id="welcome">
       {(props.currentYear <= 6) ? <div><h5>Congratulations! Youve made it through another year at Hogwarts! Enjoy your summer and we will see you back next year.</h5> <Link to='/'><button onClick={props.onChangingToNewYear}>Continue on to next year</button></Link></div> : <div id="passFail">Congratulations! You made it through your final year of Hogwarts!</div>}

    </div>
  );
}

Welcome.propTypes = {
    currentYear: PropTypes.number
};

export default Welcome;