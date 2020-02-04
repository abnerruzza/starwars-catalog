import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type PeopleModel from "../../Models/PeopleModel";
import ListCard from "../../Components/Generics/ListCard";

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

                            const detailUrl = `/people/${item.id}`;

                            return (

                                <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        url={detailUrl}
                                        borderColor="blue-border"
                                        iconSrc="/img/icons/actor.png"
                                        title={item.name}
                                        subtitle={"actor"}
                                        numbers={[
                                            {title: "Mass", value: item.mass + "Kg"},
                                            {title: "Birth Year", value: item.birth_year},
                                        ]}
                                        relations={[
                                            {title: "Species", icon: "/img/icons/actor.png", items: item.species},
                                            {title: "Vehicles", icon: "/img/icons/rickshaw.png", items: item.vehicles},
                                            {title: "Films", icon: "/img/icons/photographic-film.png", items: item.films}
                                        ]}
                                    />

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
