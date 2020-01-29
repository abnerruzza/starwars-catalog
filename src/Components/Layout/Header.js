import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import {Link, NavLink} from "react-router-dom";

/**
 * O Header tem um pacote que atualiza o state desse component quando
 * o usuário executa a ação de scroll da página; Isso faz com que o
 * header fique com um fundo de outra cor a partir de 86 pixels;
 */
const Header = props => {
    const [shrink, setShrink] = useState(false);
    const scroll = useWindowScrollPosition({throttle: 50});

    useEffect(() => {

        if(props.pathname === "/") {
            if(scroll.y > 86) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        }

    }, [scroll.y]);

    return (
        <header>
            <nav className={`navbar navbar-expand-md navbar-dark fixed-top ${(shrink || props.pathname !== "/") ? "shrink" : ""}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/"><span>Star</span>Wars Catalog</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/films">Films</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Persons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Planets</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link 1</a>
                                    <a className="dropdown-item" href="#">Link 2</a>
                                    <a className="dropdown-item" href="#">Link 3</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {props.pathname === "/" && <div className={"banner"} />}

        </header>
    );
};

Header.propTypes = {};

export default Header;
