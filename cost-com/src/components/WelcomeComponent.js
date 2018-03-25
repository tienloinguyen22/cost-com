import React from 'react';

class Welcome extends React.Component {
  handleStartClick = () => {
    this.props.handleStartClick();
  }

  handleDetailsClick = () => {
    this.props.handleDetailsClick();
  }

  render() {
    return (
      <div id='welcome' className='row mt-4'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h1 id='logo-icon'>
            <i className="fas fa-home fa-4x text-info d-block ml-auto mr-auto"></i>
          </h1>
          <h3 id='brand' className='display-3 text-center text-warning'>Cost Com</h3>
          <p id='description' className='text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
          </p>
          <div id='navigate-buttons'>
            <button onClick={this.handleStartClick} type='button' className='btn btn-outline-success d-block ml-auto mr-auto mt-3 mb-3'>Get Started</button>
            <button onClick={this.handleDetailsClick} type='button' className='btn btn-outline-danger d-block ml-auto mr-auto mt-3 mb-3'>Details</button>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    );
  }
}

export default Welcome;