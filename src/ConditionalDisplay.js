import React from 'react';
import PropTypes from 'prop-types';

const ConditionalDisplay = props => {

  return (<div>
    {props.isVisible ? props.children : null}
  </div>);
}

ConditionalDisplay.propTypes = {
  isVisible: PropTypes.bool.isRequired
}

export default ConditionalDisplay;