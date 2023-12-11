import { faAnglesUp, faArrowUp, faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import useScrollTracker from '@/hooks/useScrollTracker';

const BackToTop = () => {
    const { scrollPosition, getRawPosition } = useScrollTracker();
    const [showing, setShowing] = useState(false);

    useEffect(() => {
        if (getRawPosition() >= 200) {
            setShowing(true)
        } else {
            setShowing(false);
        }
    }, [scrollPosition]);

    const backToTop = () => {
        if (!showing) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button
            type="button"
            onClick={backToTop}
            className={`${showing ? "opacity-70 sm:opacity-1" : "opacity-0 pointer-events-none"} 
            fixed
            bottom-36
            right-5 
            w-12 
            h-12
            min-[230px]:bottom-24
            min-[332px]:bottom-12
            transition-all 
            rounded-md
            border-2
            sm:rounded-md
            text-xl
            lg:right-20
            lg:bottom-10
            bg-gray-200 
            border-gray-600 
            text-gray-600 
            active:bg-gray-200 
            active:border-gray-600 
            active:text-gray-600 
            visited:bg-gray-200 
            visited:border-gray-600 
            visited:text-gray-600
            focus:bg-gray-200 
            focus:border-gray-600 
            focus:text-gray-600 
            hover:bg-gray-600 
            hover:text-gray-200 
            dark:bg-gray-800 
            dark:border-sky-200 
            dark:text-sky-200 
            dark:hover:bg-sky-200 
            dark:hover:text-gray-800 
            dark:active:bg-gray-800 
            dark:active:border-sky-200 
            dark:active:text-sky-200
            dark:visited:bg-gray-800 
            dark:visited:border-sky-200 
            dark:visited:text-sky-200
            dark:focus:bg-gray-800 
            dark:focus:border-sky-200 
            dark:focus:text-sky-200`}
            style={{ zIndex: 60 }}
            title="Voltar ao topo"
        >
            <FontAwesomeIcon icon={faCircleUp} />
        </button>
    )
}

export default BackToTop