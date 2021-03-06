import React              from 'react';
import PropTypes          from 'prop-types';
import {
    Col,
    Container,
    Row
}                         from "reactstrap";
import LoadingSvg         from "../../Components/Generics/LoadingSvg";
import PageTitleSection   from "../../Components/Generics/PageTitleSection";
import PageSearchSection  from "../../Components/Generics/PageSearchSection";
import type VehiclesModel from "../../Models/VehiclesModel";
import ListCard           from "../../Components/Generics/ListCard";
import Pagination         from "../../Components/Generics/Pagination";

const VehicleListView = props => {
    return (
        <div className="main-content">

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

VehicleListView.propTypes = {
    apiData: PropTypes.object,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
    page: PropTypes.number,
    setPage: PropTypes.func,
};

export default VehicleListView;
