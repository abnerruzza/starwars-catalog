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

const RelatedSpecies = props => {
    const service = FilmsService();
    let delay = 0;

    return (
        <>
            {props.films?.length > 0 &&
                <PageTitleSection
                    title="Related Species"
                    subtitle=""
                    className="mt-2 pt-5"
                />
            }

            <Row>
                {props.films?.map((item, index) => {

                    delay += 200;

                    return (
                        <Col key={index} xs={12} md={6}>

                            <AsyncItem url={item} delay={delay} mutate={service.mutate}>
                                {({data, loading}) => {

                                    const detailUrl = `/species/${data?.id}`;

                                    return (
                                        <ListCard
                                            loading={loading}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="green-border"
                                            iconSrc="/img/icons/alien.png"
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

RelatedSpecies.propTypes = {
    films: PropTypes.array,
    history: PropTypes.object,
};

export default RelatedSpecies;
