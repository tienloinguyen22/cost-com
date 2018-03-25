import React from 'react';
import data from '../data/costOfLivingIndices.js';

class CityDropdown extends React.Component {
  state = {
    currentCity: '',
    futureCity: ''
  }

  handlePreviousClick = () => {
    this.props.handlePreviousClick();
  }

  handleNextClick = () => {
    if (this.props.phase === 1) {
      this.props.handleCurrentCity(this.state.currentCity);
    }
    else if (this.props.phase === 3) {
      this.props.handleFutureCity(this.state.futureCity);
    }
  }

  handleCurrentCity = (event) => {
    let city = event.target.value;
    this.setState({
      ...this.state,
      currentCity: city
    });
  }

  handleFutureCity = (event) => {
    let city = event.target.value;
    this.setState({
      ...this.state,
      futureCity: city
    });
  }

  render() {
    let cities = Object.keys(data).sort();
    let cityList = cities.map((city) => {
      return (
        <option value={city} />
      );
    });
    if (this.props.phase === 1) {
      return (
        <div id='city-dropdown' className='row mt-4'>
          <div className='col-3'></div>
          <div className='col-6'>
            <h2 className='display-5 text-center mt-3 mb-3 font-weight-bold text-success'>Which city are you living in ?</h2>
            <div className="form-group mt-3 mb-3">
              <input list='cityList' onChange={this.handleCurrentCity} className='form-control w-75 ml-auto mr-auto' />
              <datalist id='cityList'>
                {cityList}
              </datalist>
              {/* <select onChange={this.handleCurrentCity} className="form-control w-75 ml-auto mr-auto">
                <option value="">Your City</option>
                {cityList}
              </select> */}
            </div>
            <h3 className='text-center'>{this.state.currentCity}</h3>
            <div id='navigate-buttons' className='text-center'>
              <button onClick={this.handlePreviousClick} type='button' className='btn btn-outline-info d-inline-block m-3'>
                <i className="fas fa-arrow-circle-left fa-2x"></i>
              </button>
              {this.state.currentCity.length > 0 &&
                <button onClick={this.handleNextClick} type='button' className='btn btn-outline-info d-inline-block m-3'>
                  <i className="fas fa-arrow-circle-right fa-2x"></i>
                </button>
              }
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      );
    }
    else if (this.props.phase === 3) {
      return (
        <div id='city-dropdown' className='row mt-4'>
          <div className='col-3'></div>
          <div className='col-6'>
            <h2 className='display-5 text-center mt-3 mb-3 font-weight-bold text-warning'>Where do you wanna live in the future ?</h2>
            <div className="form-group mt-3 mb-3">
              <select onChange={this.handleFutureCity} className="form-control w-75 ml-auto mr-auto">
                <option value="">Your Future City</option>
                {cityList}
              </select>
            </div>
            <h3 className='text-center'>{this.state.futureCity}</h3>
            <div id='navigate-buttons' className='text-center'>
              <button onClick={this.handlePreviousClick} type='button' className='btn btn-outline-info d-inline-block m-3'>
                <i className="fas fa-arrow-circle-left fa-2x"></i>
              </button>
              {this.state.futureCity.length > 0 &&
                <button onClick={this.handleNextClick} type='button' className='btn btn-outline-info d-inline-block m-3'>
                  <i className="fas fa-arrow-circle-right fa-2x"></i>
                </button>
              }
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      );
    }
  }
}

export default CityDropdown;