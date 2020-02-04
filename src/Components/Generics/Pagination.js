import React, {useState} from 'react';
import PropTypes         from 'prop-types';
import {
    Button,
    ButtonGroup,
    Col,
    Row
}                        from "reactstrap";
import Icon              from "./Icon";

const Pagination = props => {

    return (
        <Row className="mt-2 mb-5">
            <Col className="text-center">
                <ButtonGroup>

                    {props.hasPrevious &&
                    <Button onClick={() => props.setPage(props.page - 1)}><Icon name="angle-double-left" /> Previous page</Button>
                    }

                    {props.hasNext &&
                    <Button onClick={() => props.setPage(props.page + 1)} >Next page <Icon name="angle-double-right" /></Button>
                    }
                </ButtonGroup>
            </Col>
        </Row>
    );
};

Pagination.propTypes = {
    hasPrevious: PropTypes.bool,
    hasNext: PropTypes.bool,
    setPage: PropTypes.func,
    page: PropTypes.func,
};

export default React.memo(Pagination, (prevProps, nextProps) => {

    if(prevProps.hasPrevious !== nextProps.hasPrevious ||
        prevProps.hasNext !== nextProps.hasNext ||
        prevProps.page !== nextProps.page) return false;

    return true;
});
