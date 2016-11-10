import React, { PropTypes } from 'react';

import './style.css';

import svgContent from 'raw!./button.svg'; // eslint-disable-line

const Button = ({ onTouchStart, onTouchEnd, buttonState = 'off' }) => (
  <div
    className={`Button Button--${buttonState}`}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    onMouseDown={onTouchStart}
    onMouseUp={onTouchEnd}
    dangerouslySetInnerHTML={{ __html: svgContent }}
  />
);

Button.propTypes = {
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  buttonState: PropTypes.oneOf([ 'off', 'on', 'down' ]),
}

export default Button;
