import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Bird from '../img/bird.jpg';
import Bunny from '../img/bunny.jpg';
import Cat from '../img/cat.jpg';
import Deer from '../img/deer.jpg';
import Dog from '../img/dog.jpg';
import Fox from '../img/fox.jpg';
import Goat from '../img/goat.jpg';
import Horse from '../img/horse.jpg';
import Otter from '../img/otter.jpg';
import Stag from '../img/stag.jpg';
import Swan from '../img/swan.jpg';

var patronusStyles = {
  width: '50%'
}

var min=1; 
var max=10000;  
let random = Math.floor(Math.random() * (+max - +min)) + +min; 
console.log(random);

 
function Year5Puzzle(props){
  return (
    <div id="patronus" styles={patronusStyles}>
      {(random % 11 === 0) ? <img src={Bird} alt="bird patronus"/>:
       (random % 10 === 0) ? <img src={Bunny} alt="bird patronus"/>:
       (random % 9 === 0) ? <img src={Cat} alt="bird patronus"/>:
       (random % 8 === 0) ? <img src={Deer} alt="bird patronus"/>:
       (random % 7 === 0) ? <img src={Dog} alt="bird patronus"/>:
       (random % 6 === 0) ? <img src={Fox} alt="bird patronus"/>:
       (random % 5 === 0) ? <img src={Goat} alt="bird patronus"/>:
       (random % 4 === 0) ? <img src={Horse} alt="bird patronus"/>:
       (random % 3 === 0) ? <img src={Otter} alt="bird patronus"/>:
       (random % 2 === 0) ? <img src={Stag} alt="bird patronus"/>:
       <img src={Swan} alt="bird patronus"/>}
       <style jsx>{`
         div#patronus img {
           width: 88vw;
         }
       `}</style>
    </div>
  );
}

Year5Puzzle.propTypes = {
};

export default Year5Puzzle;