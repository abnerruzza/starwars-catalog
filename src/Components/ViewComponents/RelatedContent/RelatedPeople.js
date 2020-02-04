import React            from 'react';
import PropTypes        from 'prop-types';
import ListCard         from "../../Generics/ListCard";
import PageTitleSection from "../../Generics/PageTitleSection";
import {
    Col,
    Row
}                       from "reactstrap";
import AsyncItem        from "../../Generics/AsyncItem";
import PeopleService    from "../../../Services/PeopleService";

const RelatedPeople = props => {
    let service = PeopleService();

    let delay = 0;

    return (
        <>
            {props.people?.length > 0 &&
                <PageTitleSection
                    title={props.title || "Related People"}
                    subtitle=""
                    className="mt-2 pt-5"
                />
            }

            <Row>
                {props.people?.map((item, index) => {

                    delay += 200;

                    return (
                        <Col key={index} xs={12} md={6}>

                            <AsyncItem url={item} delay={delay} mutate={service.mutate}>
                                {({data, loading}) => {

                                    const detailUrl = `/people/${data?.id}`;

                                    return (
                                        <ListCard
                                            loading={loading}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="blue-border"
                                            iconSrc={props.itemImgSrc}
                                            title={data?.name}
                                            subtitle={props.personType || "person"}
                                            numbers={[
                                                {title: "Mass", value: data?.mass + "Kg"},
                                                {title: "Birth Year", value: data?.birth_year},
                                            ]}
                                            relations={[
                                                {title: "Species", icon: "/img/icons/actor.png", items: data?.species},
                                                {title: "Vehicles", icon: "/img/icons/rickshaw.png", items: data?.vehicles},
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

RelatedPeople.propTypes = {
    people: PropTypes.array,
    title: PropTypes.string,
    personType: PropTypes.string,
    itemImgSrc: PropTypes.string,
};

export default RelatedPeople;
