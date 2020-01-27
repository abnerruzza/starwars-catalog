import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import debounce from 'lodash/debounce';

export const useMergeState = initialState => {
    const [state, dispatch] = useState(initialState);

    const setState = (any) => {
        dispatch(prev => ({...prev, ...any}))
    }

    return [state, setState]
}

export const useWindowSize = () => {
    function getSize(): { innerHeight: number, innerWidth: number, outerHeight: number, outerWidth: number, } {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
        };
    }

    let [windowSize, setWindowSize] = useState(getSize());

    function handleResize() {
        setWindowSize(getSize());
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        innerHeight: windowSize.innerHeight,
        innerWidth: windowSize.innerWidth,
        outerHeight: windowSize.outerHeight,
        outerWidth: windowSize.outerWidth,
    };
}

export const useForceUpdate = () => {
    const [state, setState] = useState(Object.create(null));

    const forceUpdate = () => {
        setState(Object.create(null));
    }

    const onUpdate = (callback) => {
        if(callback) callback();
    }

    useEffect(() => {
        onUpdate();
    }, [state]);

    return {onUpdate, forceUpdate};
}