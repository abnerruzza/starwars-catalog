import React, {Component,Fragment, useMemo, useState} from 'react';
import ErrorBoundary                                  from "./Components/Generics/ErrorBoundary";
import LayoutMannager                                 from "./Components/Layout/LayoutManager";
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalFunctions';
import './custom.less';

const App = () => {

    return (
        <ErrorBoundary>

            <BrowserRouter>
                <LayoutMannager/>
            </BrowserRouter>

        </ErrorBoundary>
    );
}

export default App;