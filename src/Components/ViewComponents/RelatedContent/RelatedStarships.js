import React            from 'react';
import PropTypes        from 'prop-types';
import ListCard         from "../../Generics/ListCard";
import PageTitleSection from "../../Generics/PageTitleSection";
import {
    Col,
    Row
}                       from "reactstrap";
import AsyncItem        from "../../Generics/AsyncItem";
import FilmsService     from "../../../Services/FilmsService";

const RelatedStarships = props => {
    const service = FilmsService();
    let delay = 0;

    return (
        <>
            {props.starships?.length > 0 &&
                <PageTitleSection
                    title={"Related Starships"}
                    subtitle=""
                    className="mt-2 pt-5"
                />
            }

            <Row>
                {props.starships?.map((item, index) => {

                    delay += 200;

                    return (
                        <Col key={index} xs={12} md={6}>

                            <AsyncItem url={item} delay={delay} mutate={service.mutate}>
                                {({data, loading}) => {

                                    const detailUrl = `/starships/${data?.id}`;

                                    return (
                                        <ListCard
                                            loading={loading}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="green-border"
                                            iconSrc="/img/icons/spaceship.png"
                                            title={data?.name}
                                            subtitle={data?.designation}
                                            numbers={[
                                                {title: "Average Height", value: data?.average_height},
                                                {title: "Average Lifespan", value: data?.average_lifespan},
                                            ]}
                                            relations={[
                                                {title: "People", icon: "/img/icons/actor.png", items: data?.people},
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

RelatedStarships.propTypes = {
    starships: PropTypes.array,
    history: PropTypes.object,
};

export default RelatedStarships;
