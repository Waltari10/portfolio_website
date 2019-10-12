import React from 'react';

const Wave = (props) => {
  return (
    <svg {...props} width="11px" height="4px" viewBox="0 0 11 4" version="1.1">
      <title>Group 9</title>
      <desc>Created with Sketch.</desc>
      <g id="Views" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="about-me/CV" transform="translate(0.000000, -37.000000)" fill={props.color}>
          <g id="Group" transform="translate(-5.000000, 37.000000)">
            <g id="Group-9">
              <path
                // eslint-disable-next-line max-len
                d="M12,2 C13.1358025,0.66032501 14.4691358,-0.00632657553 16,4.52436867e-05 L16,3.99995476 L8,3.99995476 C9.5308642,4.00632658 10.8641975,3.33967499 12,2 Z"
                id="Path"
                transform="translate(12.000000, 2.000000) scale(-1, 1) translate(-12.000000, -2.000000) "
              >
              </path>
              <path
                // eslint-disable-next-line max-len
                d="M4,2 C5.13580247,0.66032501 6.4691358,-0.00632657553 8,4.52436867e-05 L8,3.99995476 L0,3.99995476 C1.5308642,4.00632658 2.86419753,3.33967499 4,2 Z"
                id="Path"
              >
              </path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Wave;