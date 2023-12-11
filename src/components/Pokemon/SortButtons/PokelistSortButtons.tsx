import React from 'react'
import PokelistSortButton from './PokelistSortButton';

const PokelistSortButtons = ({ resetListingOnSort = false }: { resetListingOnSort?: boolean }) => {
    return (
        <div className="flex max-w-full flex-wrap p-4 pb-0 gap-4">
            <PokelistSortButton type="id" resetListingOnSort={resetListingOnSort} />
            <PokelistSortButton type="name" resetListingOnSort={resetListingOnSort} />
        </div>
    )
}

export default PokelistSortButtons