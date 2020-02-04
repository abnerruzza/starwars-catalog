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
import RelatedVehicles  from "../../Components/ViewComponents/RelatedContent/RelatedVehicles";
import RelatedSpecies   from "../../Components/ViewComponents/RelatedContent/RelatedSpecies";
import RelatedStarships from "../../Components/ViewComponents/RelatedContent/RelatedStarships";

const PeopleDetailView = props => {

    const {apiData} = props;

    return (
        <div className="main-content">
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
                imgSrc="/img/icons/actor.png"
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Hair Color", desc: apiData?.hair_color},
                                    {title: "Height", desc: <>{apiData?.height} cm</>},
                                    {title: "Mass", desc: <>{apiData?.mass} Kg</>},
                                ]}
                            />

                        </aside>
                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Skin Color", desc: apiData?.skin_color},
                                {title: "Eye Color", desc: apiData?.eye_color},
                                {title: "Birth Year", desc: apiData?.birth_year},
                            ]}
                        />

                    </Col>
                </Row>

                <RelatedVehicles
                    vehicles={apiData?.vehicles}
                    history={props.history}
                />

                <RelatedSpecies
                    species={apiData?.species}
                    history={props.history}
                />

                <RelatedStarships
                    starships={apiData?.starships}
                    history={props.history}
                />

            </Container>

        </div>
    );
};

PeopleDetailView.propTypes = {
    apiData: PropTypes.object,
    history: PropTypes.func,
    getData: PropTypes.func,
    loading: PropTypes.bool,
};

export default PeopleDetailView;
