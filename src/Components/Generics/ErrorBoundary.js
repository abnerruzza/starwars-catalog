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
                <div className="d-flex flex-row justify-content-center align-items-center" style={{width: '100%', height: '100%'}}>
                    <div className="container text-center">
                        <div className="py-3">
                            <h1>Eita!</h1>
                        </div>
                        <h2>O sistema apresentou um erro inesperado!</h2>
                        <p>Tente atualizar a página para corrigir este erro</p>
                        <br/>
                        <a href="/" className="btn btn-primary">Atualizar página</a>

                        <div className="mt-5">
                            <code>{Env.debug == true ? this.state.errorInfo.componentStack : null}</code>
                        </div>
                    </div>
                </div>
            );
        }
        // Render children if there's no error
        return this.props.children;
    }
}
