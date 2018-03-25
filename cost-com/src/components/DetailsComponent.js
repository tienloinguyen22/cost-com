import React from 'react';

class Details extends React.Component {
  handleHomeClick = () => {
    this.props.handleHomeClick();
  }

  render () {
    return (
      <div id='details' className='row mt-4'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h1 id='logo-icon'>
            <i className="fas fa-home fa-3x text-info d-block ml-auto mr-auto"></i>
          </h1>
          <div>
            <h4 className='font-weight-bold text-center'>What we do</h4>
            <p id='description' className='text-center'>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className='font-weight-bold text-center'>About Us</h4>
            <p id='description' className='text-center'>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and.
            </p>
          </div>
          <div>
            <h4 className='font-weight-bold text-center'>Contact</h4>
            <p id='description' className='text-center'>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
          </div>
          <div id='navigate-buttons'>
            <button onClick={this.handleHomeClick} type='button' className='btn btn-outline-info d-block ml-auto mr-auto mt-3 mb-3'>Home</button>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    );
  }
}

export default Details;