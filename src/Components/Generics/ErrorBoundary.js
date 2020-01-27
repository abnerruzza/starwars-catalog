import React from 'react';
import {Env} from "../../Config/Env";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div id="notfound">
                    <div className="notfound-bg"></div>
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Eita!</h1>
                        </div>
                        <h2>O sistema apresentou um erro inesperado!</h2>
                        <a href="#" className="home-btn">Atualizar página</a>
                        <a href="#" className="contact-btn">Mande esse erro para nós!</a>
                        <div className="notfound-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                            <a href="#"><i className="fa fa-google-plus"></i></a>
                        </div>

                        <div>
                            {Env.debug == true ? this.state.errorInfo.componentStack : null}
                        </div>
                    </div>
                </div>
            );
        }
        // Render children if there's no error
        return this.props.children;
    }
}