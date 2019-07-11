import React from 'react';
import PuzzleImg from '../img/YearOnePuzzle|Chalice.jpg';
import { withRouter } from 'react-router-dom';


class Year1Puzzle extends React.Component{
  constructor(props) {
    console.log("props", props);
    super(props);
    this.handlePotionSelectionSubmission = this.handlePotionSelectionSubmission.bind(this);
  }

  _potion = null;

  handlePotionSelectionSubmission(event) {
    event.preventDefault();
    console.log(this._potion.value);

    if (this._potion.value === '-1') {
      //real stuff someday
      alert("You died");
    } else if (this._potion.value === '0') {
      alert("That isn't it!")
    } else if (this._potion.value === '1') {
        this.props.history.push('/congrats')
    }
  }

  render() {
    return (
      <div id="yearOnePuzzle">
        <img src={PuzzleImg} alt="7 different potion bottles on a table"/>
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
        <form onSubmit={this.handlePotionSelectionSubmission} action="submit" id="potionGuess">
          <label>Which potion do you choose?</label>
          <select ref={(input) => this._potion = input}>
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
}



export default withRouter(Year1Puzzle);