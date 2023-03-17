import * as React from 'react';

const Computer = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={32}
    viewBox="0 0 48 32"
    {...props}>
    <path
      d="M40 28a4 4 0 0 0 3.98-4L44 4a4.012 4.012 0 0 0-4-4H8a4.012 4.012 0 0 0-4 4v20a4.012 4.012 0 0 0 4 4H0v4h48v-4ZM8 4h32v20H8Z"
      fill="#0096fa"
    />
  </svg>
);
export default Computer;
