import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
    return <i {...props} className={`las la-${props.name} ${props.className || ''}`} />;
};

Icon.propTypes = {
    name: PropTypes.string,
};

export default Icon;
