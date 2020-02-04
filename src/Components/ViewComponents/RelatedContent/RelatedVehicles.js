import React            from 'react';
import PropTypes        from 'prop-types';
import ListCard         from "../../Generics/ListCard";
import PageTitleSection from "../../Generics/PageTitleSection";
import {
    Col,
    Row
}                       from "reactstrap";
import AsyncItem        from "../../Generics/AsyncItem";
import VehiclesService  from "../../../Services/VehiclesService";

const RelatedVehicles = props => {
    const service = VehiclesService();

    let delay = 0;

    return (
        <>
            {props.vehicles?.length > 0 &&
                <PageTitleSection
                    title="Related Vehicles"
                    subtitle=""
                    className="mt-2 pt-5"
                />
            }

            <Row>
                {props.vehicles?.map((item, index) => {

                    delay += 200;

                    return (
                        <Col key={index} xs={12} md={6}>

                            <AsyncItem url={item} delay={delay} mutate={service.mutate}>
                                {({data, loading}) => {

                                    const detailUrl = `/vehicles/${data?.id}`;

                                    return (
                                        <ListCard
                                            loading={loading}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="green-border"
                                            iconSrc="/img/icons/rickshaw.png"
                                            title={data?.name}
                                            subtitle={data?.model}
                                            numbers={[
                                                {title: "Speed", value: data?.max_atmosphering_speed},
                                                {title: "Crew", value: data?.crew},
                                            ]}
                                            relations={[
                                                {title: "Pilots", icon: "/img/icons/actor.png", items: data?.pilots},
                                                {title: "Films", icon: "/img/icons/photographic-film.png", items: data?.films}
                                            ]}
                                        />
                                    )
                                }}
                            </AsyncItem>

                        </Col>
                    )
                })}
            </Row>
        </>
    );
};

RelatedVehicles.propTypes = {
    vehicles: PropTypes.array,
    history: PropTypes.object,
};

export default RelatedVehicles;
