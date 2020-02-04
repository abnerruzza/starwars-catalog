import React  from 'react';
import {
    Route,
    Switch,
    withRouter
}             from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../../Config/Routes";

/**
 * Este arquivo monta as rotas e o layout padrão de todas as telas;
 * As rotas carregam um controller que carrega a view;
 */
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
