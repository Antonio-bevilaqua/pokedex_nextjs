import React, { useEffect, useState } from 'react'

const useScrollTracker = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        const height = window.innerHeight;

        setScrollPosition(position + height);
    }

    const getTotalScrollHeight = () => {
        return Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    }

    const getRawPosition = () => {
        return scrollPosition === 0 ? 0 : scrollPosition - window.innerHeight;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return { scrollPosition, getTotalScrollHeight, getRawPosition };
}

export default useScrollTracker