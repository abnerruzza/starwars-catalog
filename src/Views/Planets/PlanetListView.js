import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type PlanetsModel from "../../Models/PlanetsModel";

const PlanetListView = props => {
    return (
        <>

            <PageTitleSection
                title="Planets"
                subtitle="StarWars planets catalog"
            />

            <PageSearchSection
                listFunction={props.listData}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Planet title"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.apiData?.results?.map((item: PlanetsModel, index) => {

                            const detailUrl = `/planets/${item.id}`;

                            return (
                                <Col sm={4} className="mb-5">
                                    <Card key={index} className="text-center cursor-pointer" onClick={() => props.history.push(detailUrl)}>
                                        <CardBody>
                                            <img src="/img/icons/planet.png" alt="Planet" className="mb-2"/>
                                            <CardTitle>
                                                <h4><Link to={detailUrl}>{item.name}</Link></h4>
                                            </CardTitle>
                                            <CardSubtitle></CardSubtitle>
                                            <CardText></CardText>
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

PlanetListView.propTypes = {
    apiData: PropTypes.object,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
};

export default PlanetListView;