import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container} from "reactstrap";

const PageTitleSection = props => {
    return (
        <section className={props.className || "mt-5 pt-5"}>
            <Container fluid className="text-center">
                {!!props.imgSrc && <img src={props.imgSrc} alt={props.title} /> }
                <h2 className="section-title mb-2 h1">{props.title}</h2>
                <p className="text-center text-muted h5">{props.subtitle}</p>
            </Container>
        </section>
    );
};

PageTitleSection.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    className: PropTypes.string,
    imgSrc: PropTypes.string,
};

export default React.memo(PageTitleSection);
