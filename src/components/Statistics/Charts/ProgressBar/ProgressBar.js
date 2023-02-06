import React from "react";
import "./ProgressBar.scss"

const ProgressBar = (props) => {
  const width = {
    width: `${props.completed}%`
  }


  return (
    <div className="prog-main">
      <div className="prog-filler" style={width}>
        <span>{`${props.completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;