import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (

    <svg {...props} width="45px" height="39px" viewBox="0 0 45 39" version="1.1">
      <g id="Views" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="home" transform="translate(-13.000000, -13.000000)">
          <g id="Group-4" transform="translate(12.000000, 7.000000)">
            <rect id="Rectangle" x="0" y="0" width="50" height="50"></rect>
            <g id="Group" transform="translate(1.000000, 6.000000)">
              <g id="Group-9" transform="translate(8.000000, 8.000000)" fill={props.color}>
                <polygon id="Path-12" points="0 0 5.33071307 0 14 14.4989333 11.363789 19"></polygon>
                <polygon
                  id="Path-13"
                  points="26.7937881 23 29 18.6476424 19.8495682 18.6476424 29 0 24.4247841 0 13 23"
                ></polygon>
              </g>
              <rect i
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