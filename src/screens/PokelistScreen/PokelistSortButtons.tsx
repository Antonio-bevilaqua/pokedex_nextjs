import React from 'react'
import PokelistSortButton from './PokelistSortButton';

const PokelistSortButtons = () => {
    return (
        <div className="flex max-w-full flex-wrap p-4 pb-0 gap-4">
            <PokelistSortButton type="id" />
            <PokelistSortButton type="name" />
        </div>
    )
}

export default PokelistSortButtons