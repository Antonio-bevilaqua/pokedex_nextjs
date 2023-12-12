import { useEffect, useState } from 'react'

type SizeState = {
    width: number,
    height: number
};

const useWindowSizeTracker = () => {
    const [windowSize, setWindowSize] = useState<SizeState>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        setResizeFunction();

        return () => unsetResizeFunction();
    }, []);

    const setResizeFunction = () => {
        window.onresize = (event: UIEvent) => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    }

    const unsetResizeFunction = () => {
        window.onresize = null;
    }

    return windowSize;
}

export default useWindowSizeTracker