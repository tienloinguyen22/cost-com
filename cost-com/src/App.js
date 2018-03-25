import React, { Component } from 'react';
import Welcome from './components/WelcomeComponent.js';
import Details from './components/DetailsComponent.js';
import CityDropdown from './components/CityDropDownComponent.js';
import SalaryInput from './components/SalaryInputComponent.js';
import Result from './components/ResultComponent.js';
import data from './data/costOfLivingIndices.js';
import './App.css';

class App extends Component {
  state = {
    phase: 0,
    currentCity: '',
    currentSalary: 0,
    futureCity: '',
    requiredSalary: 0,
    rentPercentChange: 0,
    groceriesPercentChange: 0,
    diningPercentChange: 0
  }

  handleStartClick = () => {
    this.setState({phase: 1});
  }

  handleDetailsClick = () => {
    this.setState({phase: -1});
  }

  handleHomeClick = () => {
    this.setState({phase: 0});
  }

  handlePreviousClick = () => {
    let oldPhase = this.state.phase;
    this.setState({phase: oldPhase - 1});
  }

  handleNextClick = () => {
    let oldPhase = this.state.phase;
    if (oldPhase === 3) {
      this.calculateNewCostOfLiving();
    }
    this.setState({phase: oldPhase + 1});
  }

  handleCurrentCity = (city) => {
    this.setState({
      ...this.state,
      currentCity: city
    }, () => {this.handleNextClick();});
  }

  handleFutureCity = (city) => {
    this.setState({
      ...this.state,
    futureCity: city
    }, () => {this.handleNextClick();});
  }

  handleSalary = (salary) => {
    this.setState({
      ...this.state,
      currentSalary: salary
    });
  }

  calculateNewCostOfLiving = () => {
    let requiredSalary;
    let rentPercentChange;
    let groceriesPercentChange;
    let diningPercentChange;
    let fractionalChange = (data[this.state.futureCity].index - data[this.state.currentCity].index)/data[this.state.currentCity].index;

    if (fractionalChange === 0) {
      requiredSalary = Number(this.state.currentSalary).toFixed(0).replace(/./g, function(c, i, a) {return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;});
    } else {
      requiredSalary = (Number(this.state.currentSalary) + Number(this.state.currentSalary)*fractionalChange).toFixed(0).replace(/./g, function(c, i, a) {return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;});
    }

    rentPercentChange = ((data[this.state.futureCity].rent_index - data[this.state.currentCity].rent_index)/data[this.state.currentCity].rent_index*100).toFixed(2);
    groceriesPercentChange = ((data[this.state.futureCity].groceries_index - data[this.state.currentCity].groceries_index)/data[this.state.currentCity].groceries_index*100).toFixed(2);
    diningPercentChange = ((data[this.state.futureCity].restaurant_index - data[this.state.currentCity].restaurant_index)/data[this.state.currentCity].restaurant_index*100).toFixed(2);

    this.setState({
      ...this.state,
      requiredSalary,
      rentPercentChange,
      groceriesPercentChange,
      diningPercentChange
    });
  }

  render() {
    if (this.state.phase === 0) {
      return (
        <div className='container-fluid'>
          <Welcome 
            handleStartClick={this.handleStartClick}
            handleDetailsClick={this.handleDetailsClick}
          />
        </div>
      );
    }
    else if (this.state.phase === -1) {
      return (
        <div className='container-fluid'>
          <Details
            handleHomeClick={this.handleHomeClick} 
          />
        </div>
      );
    }
    else if (this.state.phase === 1 || this.state.phase === 3) {
      return (
        <div className='container-fluid'>
          <CityDropdown
            phase={this.state.phase}
            handlePreviousClick={this.handlePreviousClick} 
            handleNextClick={this.handleNextClick}
            currentCity={this.state.currentCity}
            handleCurrentCity={this.handleCurrentCity}
            handleFutureCity={this.handleFutureCity}
          />
        </div>
      );
    }
    else if (this.state.phase === 2) {
      return (
        <div className='container-fluid'>
          <SalaryInput 
            handlePreviousClick={this.handlePreviousClick} 
            handleNextClick={this.handleNextClick}
            handleSalary={this.handleSalary}
            currentCityCurrency={data[this.state.currentCity].currency_type}
          />
        </div>
      );
    }
    else if (this.state.phase === 4) {
      return (
        <div className='container-fluid'>
          <Result
            handleHomeClick={this.handleHomeClick}
            currentCity={this.state.currentCity}
            futureCity={this.state.futureCity}
            requiredSalary={this.state.requiredSalary}
            rentPercentChange={this.state.rentPercentChange}
            groceriesPercentChange={this.state.groceriesPercentChange}
            diningPercentChange={this.state.diningPercentChange}
            currentCityCurrency={data[this.state.currentCity].currency_type}
            futureCityCurrency={data[this.state.futureCity].currency_type}
          />
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default App;
