import React from 'react';
import Header from '../Header/Header';
import './Converter.scss';

export function Converter(props) {

  
  return (
    <div>
      <Header viewTitle={props.viewTitle}/>
      <h2>Currency Conversion</h2>
      {/* <div className="primary-amount"> */}
      {/* show input amount centered */}
      {/* </div> */}
      <div>
        <div className='primary-currency'>
          {/* show input currency */}
        </div>
        <div className='secondary-div'>
          <div className='secondary-currency'>
            {/* show secondary currency name left */}
          </div>
          <div className='secondary-amount'>
            {/* show secondary currency amount right */}
          </div>
        </div>
        <div className='primary-amount-input'>
          <form action="?">
            <label for="amount">Amount:</label>
            <input type="integer" id="amount" name="amount"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  )

}
