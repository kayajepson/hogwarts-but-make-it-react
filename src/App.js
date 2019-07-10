import React from 'react';
// import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentYear: 1,
      house: null
    };
    this.handleChangingToNewYear = this.handleChangingToNewYear.bind(this);
    this.handleAssigningHouse = this.handleAssigningHouse.bind(this);
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

  render(){
    return (
      <div>
          <Switch>
            <Route exact path='/' render={()=><Welcome currentYear={this.state.currentYear}/>} />
          </Switch>
      </div>
    );
  }

}

export default App;

