import React from 'react';

const Chevron = props => {
  return (
    <svg fill={props.color} x="0px" y="0px" viewBox="0 0 64 64">
      <g>
        <path
          stroke={props.color}
          d="M18,64c-1,0-2-0.4-2.7-1.1c-1.6-1.5-1.7-4-0.2-5.7L38.9,32L15.1,6.7c-1.5-1.6-1.4-4.1,0.2-5.7s4.2-1.4,5.7,0.2L50,32
          L21,62.7C20.2,63.6,19.1,64,18,64z"
        />
      </g>
    </svg>
  );
};

export default Chevron;
