import React from 'react';
import {Link} from 'react-router-dom';
import YearOneImg from '../img/YearOnePuzzle|Chalice.jpg';
import YearTwoImg from '../img/YearTwoPuzzle|Ring.jpg';
import YearThreeImg from '../img/YearThreePuzzle|Snake.jpg';
import YearFourImg from '../img/YearFourPuzzleEnd|Harry.jpg';
import YearFiveImg from '../img/YearFivePuzzle|Diadem.png';
import YearSixImg from '../img/YearSixPuzzle|Diary.jpg';
import YearSevenImg from '../img/YearSevenPuzzle|Necklace.jpg';

var areaStyles = {
  cursor: 'inherit'
}

class Year7Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVisibleImage: 1
    };
  }

  nextVisibleImage = () => {
    let newCurrentVisibleImage = this.state.currentVisibleImage;
    newCurrentVisibleImage++;
    this.setState({currentVisibleImage : newCurrentVisibleImage})
    console.log(this.state.currentVisibleImage);
  }

  render() {
    let currentHorcrux = null;
    if (this.state.currentVisibleImage === 1) {
      currentHorcrux = <div className="horcrux" id="year-one-horcrux">
        <img src={YearOneImg} useMap="#year1-image-map" alt="find the horcrux"></img>
        <map name="year1-image-map">
          <area style={areaStyles} target="" alt="find the hidden horcrux" title="" coords="800,340,763,285" shape="rect" onClick={this.nextVisibleImage}/>
        </map>
      </div>        
    } else if (this.state.currentVisibleImage === 2) {
    currentHorcrux = <div className="horcrux" id="year-two-horcrux">
      <map name="year2-image-map">
        <area style={areaStyles} target="" alt="find the hidden horcrux" title="" coords="744,72,770,88" shape="rect" onClick={this.nextVisibleImage}/>
      </map>
      <img src={YearTwoImg} useMap="#year2-image-map" alt="find the horcrux"></img>
    </div>
    } else if (this.state.currentVisibleImage === 3) {
    currentHorcrux = <div className="horcrux" id="year-three-horcrux">
      <img src={YearThreeImg} useMap="#year3-image-map" alt="find the horcrux"></img>
      <map name="year3-image-map">
        <area id="blah" target="" alt="find the hidden horcrux" title="" coords="235,299,244,313,261,318,270,316,281,305,269,300,255,291,244,293" shape="poly" onClick={this.nextVisibleImage}/>
      </map>
    </div>
    } else if (this.state.currentVisibleImage === 4) {
    currentHorcrux = <div className="horcrux" id="year-four-horcrux">
      <img src={YearFourImg} useMap="#year4-image-map" alt="find the horcrux"></img>
      <map name="year4-image-map">
        <area style={areaStyles} target="" alt="find the hidden horcrux" title="" coords="383,726,382,704,370,691,374,662,381,615,365,618,361,591,369,551,382,541,367,532,365,522,367,510,381,507,391,511,395,528,399,534,419,536,462,558,454,580,440,665,436,684,436,717,437,740" shape="poly" onClick={this.nextVisibleImage}/>
      </map>
    </div>
    } else if (this.state.currentVisibleImage === 5) {
    currentHorcrux = <div className="horcrux" id="year-five-horcrux">
      <img src={YearFiveImg} useMap="#year5-image-map" alt="find the horcrux"></img>
      <map name="year5-image-map">
        <area style={areaStyles} target="" alt="find the hidden horcrux" title="" coords="551,246,567,257" shape="rect" onClick={this.nextVisibleImage}/>
      </map>
    </div>
    } else if (this.state.currentVisibleImage === 6) {
    currentHorcrux = <div className="horcrux" id="year-six-horcrux">
      <img src={YearSixImg} useMap="#year6-image-map" alt="find the horcrux"></img>
      <map name="year6-image-map">
        <area style={areaStyles} target="" alt="find the hidden horcrux" title="" coords="433,133,468,120" shape="rect" onClick={this.nextVisibleImage}/>
      </map>
    </div>
    } else if (this.state.currentVisibleImage === 7) {
    currentHorcrux = <div className="horcrux" id="year-seven-horcrux">
      <img src={YearSevenImg} useMap="#year7-image-map" alt="find the horcrux"></img>
      <map name="year7-image-map">
        <Link to="/congrats"><area style={areaStyles} target="" alt="find the hidden horcrux" title="" coords="711,278,725,298" shape="rect"/></Link>
      </map>
    </div>
    }
    return (
      <div id="year-seven-puzzle">
        <h3>Find the hidden horcrux</h3>
        {currentHorcrux}
      </div>
    );
  }  
}

export default Year7Puzzle;