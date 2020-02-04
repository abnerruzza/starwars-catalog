import React           from 'react';
import ErrorBoundary   from "./Components/Generics/ErrorBoundary";
import LayoutMannager  from "./Components/Layout/LayoutManager";
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalFunctions';
import './custom.less';

/**
 * A aplicação começa aqui. Nesse arquivo eu coloco todos os wrappers que forem aparecendo durante o projeto
 */
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
