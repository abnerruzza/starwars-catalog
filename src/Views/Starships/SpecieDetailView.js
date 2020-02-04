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
import RelatedPeople    from "../../Components/ViewComponents/RelatedContent/RelatedPeople";
import RelatedFilms     from "../../Components/ViewComponents/RelatedContent/RelatedFilms";

const StarshipDetailView = props => {

    const {apiData} = props;

    return (
        <div className="main-content">
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Model", desc: apiData?.model },
                                {title: "Starship Class", desc: apiData?.starship_class },
                                {title: "Manufacturer", desc: apiData?.manufacturer },
                                {title: "Cost in Credits", desc: apiData?.cost_in_credits },
                                {title: "MGLT", desc: <>{apiData?.MGLT} Megalights</> },
                            ]}
                        />

                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Length", desc: <>{apiData?.length} meters</> },
                                {title: "Crew", desc: apiData?.crew },
                                {title: "Passengers", desc: apiData?.passengers },
                                {title: "Max Atmosphering Speed", desc: apiData?.max_atmosphering_speed },
                                {title: "Hyperdrive Rating", desc: apiData?.hyperdrive_rating },
                            ]}
                        />

                    </Col>
                </Row>

                <RelatedPeople
                    people={apiData?.pilots}
                    history={props.history}
                    itemImgSrc="/img/icons/pilot.png"
                    title="Related Pilots"
                    personType="pilot"
                />

                <RelatedFilms
                    films={apiData?.films}
                    history={props.history}
                />

            </Container>

        </div>
    );
};

StarshipDetailView.propTypes = {
    apiData: PropTypes.object,
    history: PropTypes.func,
    getData: PropTypes.func,
    loading: PropTypes.bool,
};

export default StarshipDetailView;
