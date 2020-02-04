import React               from 'react';
import PropTypes           from 'prop-types';
import {
    Col,
    Container,
    Row
}                          from "reactstrap";
import LoadingSvg          from "../../Components/Generics/LoadingSvg";
import PageTitleSection    from "../../Components/Generics/PageTitleSection";
import PageSearchSection   from "../../Components/Generics/PageSearchSection";
import ListCard            from "../../Components/Generics/ListCard";
import Pagination          from "../../Components/Generics/Pagination";
import type StarshipsModel from "../../Models/StarshipsModel";

const StarshipListView = props => {
    return (
        <div className="main-content">

            <PageTitleSection
                title="Starships"
                subtitle="StarWars starships catalog"
            />

            <PageSearchSection
                listFunction={props.listData}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Starships Name or Model"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.apiData?.results?.map((item: StarshipsModel, index) => {

                            const detailUrl = `/starships/${item.id}`;

                            return (
                                <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        url={detailUrl}
                                        borderColor="purple-border"
                                        iconSrc="/img/icons/spaceship.png"
                                        title={item.name}
                                        subtitle={"starship"}
                                        numbers={[
                                            {title: "Cost in Credits", value: item.cost_in_credits},
                                            {title: "Length", value: item.length},
                                        ]}
                                        relations={[
                                            {title: "Pilots", icon: "/img/icons/pilot.png", items: item.pilots},
                                            {title: "Films", icon: "/img/icons/photographic-film.png", items: item.films}
                                        ]}
                                    />


                                </Col>

                            )
                        })}
                    </Row>

                    <Pagination
                        hasPrevious={!!props.apiData?.previous}
                        hasNext={!!props.apiData?.next}
                        page={props.page}
                        setPage={props.setPage}
                    />

                </Container>
            </section>

        </div>
    );
};

StarshipListView.propTypes = {
    apiData: PropTypes.object,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
    page: PropTypes.number,
    setPage: PropTypes.func,
};

export default StarshipListView;
