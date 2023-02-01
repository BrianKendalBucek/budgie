import Header from '../Header/Header';
import './Summary.scss';


export function Summary(props) {

  return (

    <div className='summary-main'>

      <Header viewTitle={props.viewTitle}/>
      <div>
        <h1>Summary Page goes here</h1>
      </div>
    </div>
  );
};