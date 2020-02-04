import React            from 'react';
import PropTypes        from 'prop-types';
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg       from "../../Components/Generics/LoadingSvg";
import {
    Col,
    Container,
    Row
}                       from "reactstrap";
import DetailList       from "../../Components/Generics/DetailList";
import RelatedFilms     from "../../Components/ViewComponents/RelatedContent/RelatedFilms";
import RelatedPeople    from "../../Components/ViewComponents/RelatedContent/RelatedPeople";

const PlanetDetailView = props => {

    const {apiData} = props;

    return (
        <div className="main-content">
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
                imgSrc="/img/icons/planet.png"
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Diameter", desc: apiData?.diameter },
                                    {title: "Rotation Period ", desc: apiData?.rotation_period  },
                                    {title: "Orbital Period  ", desc: apiData?.orbital_period   },
                                    {title: "Gravity   ", desc: apiData?.gravity    },
                                ]}
                            />

                        </aside>
                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Population", desc: apiData?.population },
                                {title: "Climate", desc: apiData?.climate },
                                {title: "Terrain", desc: apiData?.terrain },
                                {title: "Surface Water ", desc: apiData?.surface_water  },
                            ]}
                        />

                    </Col>
                </Row>

                <RelatedFilms
                    history={props.history}
                    films={apiData?.films}
                />

                <RelatedPeople
                    history={props.history}
                    people={apiData?.residents}
                    title={"Related Residents"}
                    itemImgSrc={"/img/icons/actor.png"}
                    personType="resident"
                />

            </Container>

        </div>
    );
};

PlanetDetailView.propTypes = {
    apiData: PropTypes.object,
};

export default PlanetDetailView;
