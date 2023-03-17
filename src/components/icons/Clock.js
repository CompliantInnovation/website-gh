import * as React from 'react';

const Clock = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    viewBox="0 0 44 44"
    {...props}>
    <path
      d="M21.978 0A22 22 0 1 0 44 22 21.989 21.989 0 0 0 21.978 0ZM22 39.6A17.6 17.6 0 1 1 39.6 22 17.6 17.6 0 0 1 22 39.6ZM23.1 11h-3.3v13.2l11.55 6.93L33 28.424l-9.9-5.874Z"
      fill="#0096fa"
    />
  </svg>
);
export default Clock;
