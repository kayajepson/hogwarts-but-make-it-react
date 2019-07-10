import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function SpellsClass(props){
  let count = 0;

  function incrementCount(){
    count++;
    console.log(count);
  };

  function assessClassPassed(){
    console.log(props);
    
    if (count >= 18) {
      props.onPassingSpellsClass()
    } 
  }

  return (
    <div id="spells">
    <h5>Today you will be learning a newspell. </h5>
    <h6>To master this spell, you must click this button 15 times in 10 seconds.</h6>
    <button id="spell-button" onClick={incrementCount}>Try spell</button>
    <Link to="/puzzle"><button id="complete-class" onClick={assessClassPassed}>Complete class</button></Link>

    </div>
  );
}

SpellsClass.propTypes = {
    onPassingSpellsClass: PropTypes.func
};

export default SpellsClass;