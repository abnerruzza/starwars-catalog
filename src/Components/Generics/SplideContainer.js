import React, {useRef, useEffect} from 'react';
import PropTypes                            from 'prop-types';
import Splide from '@splidejs/splide';
import "@splidejs/splide/dist/css/splide.min.css";

const SplideContainer = (props) => {
    const splide = useRef(null);
    const splideID = useRef(`splide_${Math.floor( Math.random() * ( 10000 - 10 + 1 ) ) + 10}`);

    useEffect(() => {
        splide.current = new Splide( '#' + splideID.current , {...props.options}).mount();
        console.log(splide);
    }, []);

    return (
        <div id={splideID.current} className={props.className}>
            <div className="splide__track">
                <ul className="splide__list">

                    {props.slides.map((el, index) => {
                        return (
                            <li key={index} className={"splide__slide "+props.itemClass}>
                                {el}
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    );
};

SplideContainer.defaultProps = {
    itemClass: ""
}

SplideContainer.propTypes = {
    resizes: PropTypes.shape({
        xl: PropTypes.number,
        lg: PropTypes.number,
        md: PropTypes.number,
        sm: PropTypes.number,
        xs: PropTypes.number,
    }),
    slides: PropTypes.array,
    itemClass: PropTypes.string,
    options: PropTypes.shape({
        type: PropTypes.oneOf(['slide', 'loop', 'fade']),
        rewind: PropTypes.bool,
        speed: PropTypes.number,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        heightRatio: PropTypes.number,
        /* Determine how many slides should be displayed per page. */
        perPage: PropTypes.number,
        pagination: PropTypes.bool,
    }),
};

export default SplideContainer;
