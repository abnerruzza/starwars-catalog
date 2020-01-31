import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from "reactstrap";
import LoadingSvg from "./LoadingSvg";

const DetailList = props => {
    return (
        <ListGroup>
            {props.data?.map((item, index) => {
                return (
                    <ListGroupItem key={index}>
                        <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
                        <ListGroupItemText>
                            {props.loading ? <LoadingSvg/> : item.desc}
                        </ListGroupItemText>
                    </ListGroupItem>
                )
            })}

        </ListGroup>
    );
};

DetailList.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array,
};

export default DetailList;
