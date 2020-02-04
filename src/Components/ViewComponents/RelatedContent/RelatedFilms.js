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

const RelatedFilms = props => {
    const service = FilmsService();
    let delay = 0;

    return (
        <>
            {props.films?.length > 0 &&
                <PageTitleSection
                    title="Related Films"
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

                                    const detailUrl = `/films/${data?.id}`;

                                    return (
                                        <ListCard
                                            loading={loading}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="teal-border"
                                            iconSrc="/img/icons/photographic-film.png"
                                            title={data?.title}
                                            subtitle={"Episode " + data?.episode_id}
                                            resume={data?.opening_crawl}
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

RelatedFilms.propTypes = {
    films: PropTypes.array,
    history: PropTypes.object,
};

export default RelatedFilms;
