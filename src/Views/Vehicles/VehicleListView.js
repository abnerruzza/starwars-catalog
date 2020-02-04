import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, ButtonGroup, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type PlanetsModel from "../../Models/PlanetsModel";
import Icon from "../../Components/Generics/Icon";
import type VehiclesModel from "../../Models/VehiclesModel";
import ListCard from "../../Components/Generics/ListCard";

const VehicleListView = props => {
    return (
        <>

            <PageTitleSection
                title="Vehicles"
                subtitle="StarWars vehicles catalog"
            />

            <PageSearchSection
                listFunction={props.listData}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Vehicle Name or Model"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.apiData?.results?.map((item: VehiclesModel, index) => {

                            const detailUrl = `/vehicles/${item.id}`;

                            return (
                                <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        url={detailUrl}
                                        borderColor="green-border"
                                        iconSrc="/img/icons/rickshaw.png"
                                        title={item.name}
                                        subtitle={item.model}
                                        numbers={[
                                            {title: "Speed", value: item.max_atmosphering_speed},
                                            {title: "Crew", value: item.crew},
                                        ]}
                                        relations={[
                                            {title: "Pilots", icon: "/img/icons/actor.png", items: item.pilots},
                                            {title: "Films", icon: "/img/icons/photographic-film.png", items: item.films}
                                        ]}
                                    />


                                </Col>

                            )
                        })}
                    </Row>
                    <Row className="my-5">
                        <Col className="text-center">
                            <ButtonGroup>

                                {props.apiData?.previous &&
                                    <Button onClick={() => props.setPage(props.page - 1)}><Icon name="angle-double-left" /> Previous page</Button>
                                }

                                {props.apiData?.next &&
                                    <Button onClick={() => props.setPage(props.page + 1)} >Next page <Icon name="angle-double-right" /></Button>
                                }
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
};

VehicleListView.propTypes = {
    apiData: PropTypes.object,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
};

export default VehicleListView;
