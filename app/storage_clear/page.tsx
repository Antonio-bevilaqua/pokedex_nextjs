"use client";

import React, { useEffect } from 'react'
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