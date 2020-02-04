import React, {useState, useEffect} from 'react';
import PropTypes                    from 'prop-types';
import useWindowScrollPosition      from '@rehooks/window-scroll-position';
import {Link, NavLink}              from "react-router-dom";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
}                                   from "reactstrap";
import Icon                         from "../Generics/Icon";

/**
 * O Header tem um pacote que atualiza o state desse component quando
 * o usuário executa a ação de scroll da página; Isso faz com que o
 * header fique com um fundo de outra cor a partir de 86 pixels;
 */
const Header = props => {
    const [shrink, setShrink] = useState(false);
    const [collapse, setCollapse] = useState(false);
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

                    <ul className="navbar-nav ml-auto d-none d-md-flex">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/films">Films</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/people">People</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/planets">Planets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/vehicles">Vehicles</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/starships">Starships</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/species">Species</NavLink>
                        </li>
                    </ul>


                    <UncontrolledDropdown direction="down" size="lg" className="d-flex d-md-none">
                        <DropdownToggle tag='a' className="nav-link cursor-pointer text-white">
                            <Icon name="bars" style={{fontSize: 28}} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link className="dropdown-item" to={"/films"} >Films</Link>
                            <Link className="dropdown-item" to={"/people"} >People</Link>
                            <Link className="dropdown-item" to={"/planets"} >Planets</Link>
                            <Link className="dropdown-item" to={"/vehicles"} >Vehicles</Link>
                            <Link className="dropdown-item" to={"/starships"} >Starships</Link>
                            <Link className="dropdown-item" to={"/species"} >Species</Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </div>
            </nav>

            {props.pathname === "/" && <div className={"banner"} />}

        </header>
    );
};

Header.propTypes = {};

export default Header;
