import React from 'react';

class Result extends React.Component {
  handleHomeClick = () => {
    this.props.handleHomeClick();
  }

  render() {
    return (
      <div id='result' className='row mt-4'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div id='main-result' className=''>
            <h4 className='text-center'>
              To have the same standard of living, the comparable amount of 
              money would be:
            </h4>
            <p className='text-center display-4'>
              <i className="fas fa-chevron-circle-down mr-4"></i>
              {this.props.requiredSalary} {this.props.currentCityCurrency}/Year
            </p>
          </div>
          <div id='sub-result' className='text-center'>
            <div className='d-inline-block m-4 w-25'>
              <span className='m-4'><i className="fas fa-home fa-3x text-info"></i></span>
              <h3 className='m-4 text-center font-weight-bold'>Renting</h3>
              {this.props.rentPercentChange >= 0 && 
                <h4 className='text-center font-weight-bold text-success'>+{this.props.rentPercentChange}%</h4>
              }
              {this.props.rentPercentChange < 0 &&
                <h4 className='text-center font-weight-bold text-success'>{this.props.rentPercentChange}%</h4>
              }
            </div>
            <div className='d-inline-block m-4 w-25'>
              <span className='m-4'><i className="fas fa-shopping-cart fa-3x text-info"></i></span>
              <h3 className='m-4 text-center font-weight-bold'>Groceries</h3>
              {this.props.groceriesPercentChange >= 0 && 
                <h4 className='text-center font-weight-bold text-danger'>+{this.props.groceriesPercentChange}%</h4>
              }
              {this.props.groceriesPercentChange < 0 && 
                <h4 className='text-center font-weight-bold text-danger'>{this.props.groceriesPercentChange}%</h4>
              }
            </div>
            <div className='d-inline-block m-4 w-25'>
              <span className='m-4'><i className="fas fa-utensils fa-3x text-info"></i></span>
              <h3 className='m-4 text-center font-weight-bold'>Dining</h3>
              {this.props.diningPercentChange  >= 0 &&
                <h4 className='text-center font-weight-bold text-warning'>+{this.props.diningPercentChange}%</h4>
              }
              {this.props.diningPercentChange < 0 &&
                <h4 className='text-center font-weight-bold text-warning'>{this.props.diningPercentChange}%</h4>
              }
            </div>
          </div>
          <div id='navigate-buttons'>
            <button onClick={this.handleHomeClick} type='button' className='btn btn-outline-info d-block ml-auto mr-auto mt-3 mb-3'>Home</button>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
    );
  }
}


export default Result;