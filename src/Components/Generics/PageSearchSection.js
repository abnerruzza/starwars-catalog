import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Input, InputGroup, InputGroupAddon} from "reactstrap";

const PageSearchSection = props => {
    return (
        <section className="mt-5">
            <Container>

                <InputGroup>
                    <Input onKeyUp={(e) => {if(e.key === "Enter") props.listFunction() }} onChange={(e) => props.setSearchValue(e.target.value)} placeholder={props.fieldPlaceholder} />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" onClick={() => props.listFunction()}>{props.buttonText}</Button>
                    </InputGroupAddon>
                </InputGroup>

            </Container>
        </section>
    );
};

PageSearchSection.defaultProps = {
    buttonText: "Search",
    listFunction: () => null
}

PageSearchSection.propTypes = {
    listFunction: PropTypes.func,
    setSearchValue: PropTypes.func,
    fieldPlaceholder: PropTypes.string,
    buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PageSearchSection;
