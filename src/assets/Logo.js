import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (

    <svg {...props} width="45px" height="39px" viewBox="0 0 45 39" version="1.1">
      <g  stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g  transform="translate(-13.000000, -13.000000)">
          <g  transform="translate(12.000000, 7.000000)">
            <rect  x="0" y="0" width="50" height="50"></rect>
            <g  transform="translate(1.000000, 6.000000)">
              <g transform="translate(8.000000, 8.000000)" fill={props.color}>
                <polygon points="0 0 5.33071307 0 14 14.4989333 11.363789 19"></polygon>
                <polygon
                  points="26.7937881 23 29 18.6476424 19.8495682 18.6476424 29 0 24.4247841 0 13 23"
                ></polygon>
              </g>
              <rect
                d="Rectangle"
                stroke={props.color}
                strokeWidth="4"
                x="2"
                y="2"
                width="41"
                height="35"
                rx="8"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>

  );
};

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;