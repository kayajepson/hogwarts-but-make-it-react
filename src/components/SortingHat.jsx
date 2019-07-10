import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Welcome(props){
  return (
    <div id="beforeSorting">
        <h3>At Hogwarts we have four houses. You will be sorted into one of these.</h3>
        <h4><em>Oh, you may not think I’m pretty, <br/>
        But don’t judge on what you see, <br/>
        I’ll eat myself if you can find <br/>
        A smarter hat than me. <br/>
        You can keep your bowlers black, <br/>
        Your top hats sleek and tall, <br/>
        For I’m the Hogwarts Sorting Hat <br/>
        And I can cap them all. <br/>
        There’s nothing hidden in your head <br/>
        The Sorting Hat can’t see, <br/>
        So try me on and I will tell you <br/>
        Where you ought to be. <br/>
        You might belong in Gryffindor, <br/>
        Where dwell the br/ave at heart, <br/>
        Their daring, nerve and chivalry <br/>
        Set Gryffindors apart; <br/>
        You might belong in Hufflepuff, <br/>
        Where they are just and loyal, <br/>
        Those patient Hufflepuffs are true <br/>
        And unafraid of toil; <br/>
        Or yet in wise old Ravenclaw, <br/>
        If you’ve a ready mind, <br/>
        Where those of wit and learning, <br/>
        Will always find their kind; <br/>
        Or perhaps in Slytherin <br/>
        You’ll make your real friends, <br/>
        Those cunning folk use any means <br/>
        To achieve their ends. <br/>
        So put me on! Don’t be afraid! <br/>
        And don’t get in a flap! <br/>
        You’re in safe hands (though I have none) <br/>
        For I’m a Thinking Cap!</em> -Sorting Hat</h4>
        <Link to='/commonroom'><button type="button" id="sortButton">What's my house?</button></Link>
    </div>
  );
}

Welcome.propTypes = {
    currentYear: PropTypes.number
};

export default Welcome;