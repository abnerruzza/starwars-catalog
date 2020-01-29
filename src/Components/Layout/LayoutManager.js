import React, {Fragment, useMemo, useState, useEffect} from 'react';
import { withRouter, Route, Switch, Redirect }    from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../../Config/Routes";

const LayoutMannager = props => {

    const { location } = props;

    return (
        <>
            <Header pathname={location.pathname} />

            <Switch>
                {Routes.map((route, index) => {
                    return <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                })}
            </Switch>

            <Footer />
        </>
    );
};

export default withRouter(LayoutMannager);