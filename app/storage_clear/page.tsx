"use client";

import React, { useEffect } from 'react'
import useRedirection from '@/hooks/useRedirection';

const page = () => {
    const router = useRedirection();

    useEffect(() => {
        localStorage.clear()
        router.push('/');
    }, []);
    return (
        <></>
    )
}

export default page