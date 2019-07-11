import React from 'react';
import { withRouter } from 'react-router-dom';
import Background from '../img/YearTwoPuzzle|Ring.jpg'


class Year2Puzzle extends React.Component{
  constructor(props) {
    console.log("props", props);
    super(props);
    this.handleRiddleSubmission = this.handleRiddleSubmission.bind(this);
  }

   _password = null;

   handleRiddleSubmission(event) {
    event.preventDefault();
    console.log(this._password.value);
  
    if (this._password.value.toLowerCase() === 'secret') {
      this.props.history.push('/congrats')
  } else (
    alert('nope')
  )
  }

  render(){
    return (
      <div id="yearTwoPuzzle">
        <h5>Solve this riddle and whisper the password to get into the hidden chamber</h5>
        <p>If you have me, you want to share me. If you share me, you haven't got me. What am I?</p>
        <form id="chamberForm" onSubmit={this.handleRiddleSubmission}>
          <input autoComplete="off" type="text" action="submit" ref={(input) => this._password = input} id="chamberPassword"/> <br/><br/>
          <button type="submit">*Whisper*</button>
        </form>
        <style jsx>{`
          #yearTwoPuzzle {
            background-image: url(${Background});
            background-size: cover;
            background-repeat: no-repeat;
            height: 100vh;
            background-position: top center;
            color: white;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}


export default withRouter(Year2Puzzle);