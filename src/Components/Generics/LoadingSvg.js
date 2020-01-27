import React, {useState} from 'react';
import PropTypes         from 'prop-types';

const LoadingSvg = () => {

    return <img src="/img/loading.svg" alt="Loading"/>;
};

LoadingSvg.propTypes = {};

export default React.memo(LoadingSvg);
