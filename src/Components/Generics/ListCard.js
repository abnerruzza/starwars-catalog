import React      from 'react';
import PropTypes  from 'prop-types';
import take       from 'lodash/take';
import {Link}     from "react-router-dom";
import {Facebook} from 'react-content-loader'

const ListCard = props => {

    return (
        <div className={`card-box project-box ${props.borderColor}`} onClick={props.onClick}>

            {props.loading ?
                <Facebook />
                :
                <>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <img src={props.iconSrc} alt={props.title} className="mr-3" />
                        <div className="text-left">
                            <p className="text-muted text-uppercase mb-0">{props.subtitle}</p>
                            <h4 className="mt-0 mb-3"><Link to={props.url} className="text-dark card-title">{props.title}</Link></h4>
                        </div>
                    </div>

                    <div style={{textAlign: "left"}}>
                        {!!props.resume && <p className="text-muted font-13">{props.resume}</p> }

                        {props.numbers?.length > 0 &&
                        <ul className="list-inline mt-3">
                            {props.numbers.map((el, index) => {
                                return (
                                    <li key={index} className="list-inline-item">
                                        <h3 className="mb-0">{el.value}</h3>
                                        <p className="text-muted">{el.title}</p>
                                    </li>
                                )
                            })}

                        </ul>
                        }

                        {props.relations?.map((item, index) => {

                            return (
                                <div key={index} className="project-members">
                                    <label className="mr-3">{item.title}</label>

                                    {item.items?.length > 0 ?
                                        take(item.items, 4).map((el, index) => {
                                            return <a className="relation" key={index} href="#" ><img src={item.icon} className="rounded-circle thumb-sm" alt={item.title} /> </a>
                                        })
                                        :
                                        <span className="empty-relation" >--</span>
                                    }

                                    {item.items?.length > 4 && <span className="relation bg-white">+{item.items?.length - 4}</span>}

                                </div>
                            )

                        })}
                    </div>

                </>
            }


        </div>
    );
};

ListCard.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    borderColor: PropTypes.oneOf(['green-border', 'blue-border', 'teal-border']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    resume: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    iconSrc: PropTypes.string,
    numbers: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.string
    })),
    relations: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.string,
        items: PropTypes.array
    }))
};

export default ListCard;
