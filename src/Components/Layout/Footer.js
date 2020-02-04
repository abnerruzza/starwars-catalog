import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <footer className="bg-dark py-5">
            <p className="text-white w-100 text-right pr-5">
                Developed by Abner Ruza
            </p>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
