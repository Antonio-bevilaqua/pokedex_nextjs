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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return { scrollPosition, getTotalScrollHeight };
}

export default useScrollTracker