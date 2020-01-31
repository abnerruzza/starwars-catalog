import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {BulletList, List} from 'react-content-loader'
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import {Badge, Button, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row} from "reactstrap";
import DetailList from "../../Components/Generics/DetailList";

const VehicleDetailView = props => {

    const {apiData} = props;

    return (
        <>
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Model", desc: apiData?.model },
                                    {title: "Vehicle Class", desc: apiData?.vehicle_class  },
                                    {title: "Manufacturer ", desc: apiData?.manufacturer   },
                                    {title: "Length", desc: <>{apiData?.length} meters</> },
                                    {title: "Consumables", desc: apiData?.consumables  },
                                ]}
                            />

                        </aside>
                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Cost in Galactic Credits", desc: apiData?.cost_in_credits },
                                {title: "Crew", desc: apiData?.crew },
                                {title: "Passengers", desc: apiData?.passengers },
                                {title: "Max Atmosphering Speed", desc: apiData?.max_atmosphering_speed  },
                                {title: "Cargo Capacity", desc: apiData?.cargo_capacity  },
                            ]}
                        />

                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className="text-center">
                        <Button color="primary" outline>
                            Films <Badge color="secondary">{apiData?.films?.length}</Badge>
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" outline>
                            Pilots <Badge color="secondary">{apiData?.pilots?.length}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

VehicleDetailView.propTypes = {
    apiData: PropTypes.object,
};

export default VehicleDetailView;
