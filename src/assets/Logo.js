import React from 'react';

const Logo = (props) => {
  return (

    <svg {...props} width="45px" height="36px" viewBox="0 0 45 36" version="1.1">
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <g id="Views" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="home" transform="translate(-14.000000, -14.000000)">
          <g id="Group" transform="translate(14.000000, 14.000000)">
            <g id="Group-9" transform="translate(7.000000, 7.000000)" fill={props.color}>
              <polygon id="Path-12" points="0 0 5.33071307 0 14 14.4989333 11.363789 19"></polygon>
              <polygon id="Path-13" points="26.7937881 23 29 18.6476424 19.8495682 18.6476424 29 0 24.4247841 0 13 23"></polygon>
            </g>
            <rect id="Rectangle" stroke={props.color} strokeWidth="2" x="1" y="1" width="43" height="34" rx="8"></rect>
          </g>
        </g>
      </g>
    </svg>

  );
};

export default Logo;