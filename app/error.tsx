"use client";
import React from 'react'

const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    return (
        <div>
            <h2>Ops...</h2>
        </div>
    )
}

export default Error