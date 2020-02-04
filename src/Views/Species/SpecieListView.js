import React             from 'react';
import PropTypes         from 'prop-types';
import {
    Col,
    Container,
    Row
}                        from "reactstrap";
import LoadingSvg        from "../../Components/Generics/LoadingSvg";
import PageTitleSection  from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import ListCard          from "../../Components/Generics/ListCard";
import Pagination        from "../../Components/Generics/Pagination";
import type SpeciesModel from "../../Models/SpeciesModel";

const SpecieListView = props => {
    return (
        <div className="main-content">

            <PageTitleSection
                title="Species"
                subtitle="StarWars species catalog"
            />

            <PageSearchSection
                listFunction={props.listData}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Specie Name"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.apiData?.results?.map((item: SpeciesModel, index) => {

                            const detailUrl = `/species/${item.id}`;

                            return (
                                <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        url={detailUrl}
                                        borderColor="green-border"
                                        iconSrc="/img/icons/yoda.png"
                                        title={item.name}
                                        subtitle={item.designation}
                                        numbers={[
                                            {title: "Average Height", value: item.average_height},
                                            {title: "Average Lifespan", value: item.average_lifespan},
                                        ]}
                                        relations={[
                                            {title: "People", icon: "/img/icons/actor.png", items: item.people},
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

SpecieListView.propTypes = {
    apiData: PropTypes.object,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
    page: PropTypes.number,
    setPage: PropTypes.func,
};

export default SpecieListView;
