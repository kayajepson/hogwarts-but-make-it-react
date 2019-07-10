import React from 'react';
// import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SortingHat from './components/SortingHat';
import CommonRoom from './components/CommonRoom';
import SpellsClass from './components/SpellsClass';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentYear: 1,
      house: null,
      spellsPassed: 0,
    };
    this.handleChangingToNewYear = this.handleChangingToNewYear.bind(this);
    this.handleAssigningHouse = this.handleAssigningHouse.bind(this);
    this.handlePassingSpellsClass = this.handlePassingSpellsClass.bind(this);
  }

  handleChangingToNewYear(){
    var newCurrentYear = this.state.currentYear;
    newCurrentYear++;
    this.setState({currentYear: newCurrentYear});
  }

  handleAssigningHouse(){
    var newHouse = this.state.house;
    newHouse = "Hufflepuff";
    this.setState({house: newHouse});
  }

  handlePassingSpellsClass(){
    var newSpellsPassed = this.state.spellsPassed;
    newSpellsPassed++;
    this.setState({spellsPassed: newSpellsPassed});
  }

  render(){
    return (
      <div>
          <Switch>
            <Route exact path='/' render={()=><Welcome currentYear={this.state.currentYear}/>} />
            <Route  path='/sorting' render={()=><SortingHat onAssigningHouse={this.handleAssigningHouse}/>}/>
            <Route  path='/commonroom' render={()=><CommonRoom house={this.state.house}/>} />
            <Route  path='/class' render={()=><SpellsClass onPassingSpellsClass={this.handlePassingSpellsClass}/>} />
          </Switch>
      </div>
    );
  }

}

export default App;

