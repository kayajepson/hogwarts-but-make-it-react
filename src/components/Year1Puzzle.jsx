import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Puzzle from '../img/YearOnePuzzle|Chalice.jpg';
import { Redirect } from 'react-router-dom';
import CommonRoom from './CommonRoom';




function Year1Puzzle(props){
  let _potion = null;

  function handlePotionSelectionSubmission(event) {
    event.preventDefault();
    console.log(_potion.value);
    
    if (_potion.value === '-1') {
      //real stuff someday
      alert("You died");
    } else if (_potion.value === '0') {
      alert("That isn't it!")
    } else if (_potion.value === '1') {
      return <Redirect to='/commonroom'/>
    }
  }

  return (
    <div id="yearOnePuzzle">
      <img src={Puzzle} alt="image of 7 different potion bottles on a table"/>
      <h3>
        Danger lies before you, while safety lies behind, <br/>
        Two of us will help you, whichever you would find, <br/>
        One among us seven will let you move ahead, <br/>
        Another will transport the drinker back instead, <br/>
        Two among our number hold only nettle wine, <br/>
        Three of us are killers, waiting hidden in line. <br/>
        Choose, unless you wish to stay here forevermore, <br/>
        To help you in your choice, we give you these clues four: <br/>
        First, however slyly the poison tries to hide <br/>
        You will always find some on nettle wine's left side; <br/>
        Second, different are those who stand at either end, <br/>
        But if you would move onward, neither is your friend; <br/>
        Third, as you see clearly, all are different size, <br/>
        Neither dwarf nor giant holds death in their insides; <br/>
        Fourth, the second left and the second on the right <br/>
        Are twins once you taste them, though different at first sight. <br/>
        <br/>
      </h3>
      <form onSubmit={handlePotionSelectionSubmission} action="submit" id="potionGuess">
        <label>Which potion do you choose?</label>
        <select ref={(input) => _potion = input}>
        <option value="-1">One</option>
        <option value="0">Two</option>
        <option value="1">Three</option>
        <option value="-1">Four</option>
        <option value="-1">Five</option>
        <option value="0">Six</option>
        <option value="0">Seven</option>
      </select>
      <br/>
      <button type="submit" >Drink this potion</button>
      </form>
      <div id="potionResult"></div>
    </div>
  );
}



export default Year1Puzzle;