"use client";

import React, { useEffect } from 'react'
import CacheStoringService from '../../src/services/cache/CacheStoringService';
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();

    useEffect(() => {
        localStorage.clear()
        router.push('/');
    }, []);
    return (
        <></>
    )
}

export default page