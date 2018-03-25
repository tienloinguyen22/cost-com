import React from 'react';

class SalaryInput extends React.Component {
  state = {
    salary: 0
  }

  handlePreviousClick = () => {
    this.props.handlePreviousClick();
  }

  handleNextClick = () => {
    this.props.handleSalary(this.state.salary);
    this.props.handleNextClick();
  }

  handleSalary = (event) => {
    this.setState({
      salary: event.target.value
    });
  }

  render () {
    return (
      <div id='salary-input' className='row mt-4'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h2 className='display-5 text-center mt-3 mb-3 font-weight-bold text-danger'>What is your current salary ?</h2>
          <div className="form-group">
            <input onChange={this.handleSalary} type="number" className="form-control w-75 ml-auto mr-auto" placeholder="Your Currently Salary" />
          </div>
          <h3 className='text-center'>
            {this.state.salary === 0 ? '' : Number(this.state.salary).toFixed(0).replace(/./g, function(c, i, a) {return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;})}
            <span className='text-info'> {this.props.currentCityCurrency ? this.props.currentCityCurrency : ''}/Year.</span>
          </h3>
          <div id='navigate-buttons' className='text-center'>
            <button onClick={this.handlePreviousClick} type='button' className='btn btn-outline-info d-inline-block m-3'>
              <i className="fas fa-arrow-circle-left fa-2x"></i>
            </button>
            {this.state.salary !== 0 &&
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


export default SalaryInput;