import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type PeopleModel from "../../Models/PeopleModel";

const PeopleListView = props => {
    return (
        <>

            <PageTitleSection
                title="People"
                subtitle="StarWars people catalog"
            />

            <PageSearchSection
                listFunction={props.listPeople}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for People title"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.peopleData?.results?.map((item: PeopleModel, index) => {
                            return (

                                <Col sm={4} className="mb-5">
                                    <Card key={index} className="text-center cursor-pointer" onClick={() => props.history.push(`/people/${item.id}`)}>
                                        <CardBody>
                                            <img src="/img/icons/actor.png" alt="Actor" className="mb-2"/>
                                            <CardTitle>
                                                <h5>{item.mass} Kg</h5>
                                                <h4><Link to={`/people/${item.id}`}>{item.name}</Link></h4>
                                            </CardTitle>
                                            <CardSubtitle>{item.birth_year}</CardSubtitle>
                                            <CardText>s</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>

                            )
                        })}
                    </Row>
                </Container>
            </section>

        </>
    );
};

PeopleListView.propTypes = {
    peopleData: PropTypes.array,
    listPeople: PropTypes.func,
    setFilter: PropTypes.func,
};

export default PeopleListView;
