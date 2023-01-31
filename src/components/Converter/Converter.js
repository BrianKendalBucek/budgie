import React from 'react';
import './Converter.scss';

export function Converter() {

  return (
    <>
      {/* <div className="primary-amount"> */}
      {/* show input amount centered */}
      {/* </div> */}
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
    </>
  )

}
