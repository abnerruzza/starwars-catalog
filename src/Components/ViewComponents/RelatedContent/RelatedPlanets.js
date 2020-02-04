import React            from 'react';
import PropTypes        from 'prop-types';
import ListCard         from "../../Generics/ListCard";
import PageTitleSection from "../../Generics/PageTitleSection";
import {
    Col,
    Row
}                       from "reactstrap";
import AsyncItem        from "../../Generics/AsyncItem";
import PlanetsService   from "../../../Services/PlanetsService";

const RelatedPlanets = props => {
    const service = PlanetsService();

    let delay = 0;

    return (
        <>
            {props.planets?.length > 0 &&
                <PageTitleSection
                    title="Related Planets"
                    subtitle=""
                    className="mt-2 pt-5"
                />
            }

            <Row>
                {props.planets?.map((item, index) => {

                    delay += 200;

                    return (
                        <Col key={index} xs={12} md={6}>

                            <AsyncItem url={item} delay={delay} mutate={service.mutate}>
                                {({data, loading}) => {

                                    const detailUrl = `/planets/${data?.id}`;

                                    return (
                                        <ListCard
                                            loading={loading}
                                            onClick={() => props.history.push(detailUrl)}
                                            borderColor="blue-border"
                                            url={detailUrl}
                                            iconSrc="/img/icons/planet.png"
                                            title={data?.name}
                                            subtitle={"planet"}
                                            numbers={[
                                                {title: "Diameter", value: data?.diameter},
                                                {title: "Population", value: data?.population},
                                            ]}
                                            relations={[
                                                {title: "Residents", icon: "/img/icons/actor.png", items: data?.residents},
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

RelatedPlanets.propTypes = {
    planets: PropTypes.array,
    history: PropTypes.object,
};

export default RelatedPlanets;
