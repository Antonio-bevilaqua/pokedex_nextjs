import React, { useContext } from 'react'
import DefaultButton from '../DefaultButton/DefaultButton';
import { PokemonContext } from '../../contexts/PokemonListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Pagination = ({ actualPage, className = "" }: { actualPage: number, className?: string }) => {
    const router = useRouter();
    const { maxPages } = useContext(PokemonContext);

    const getPageList = () => {
        let beginsAt = (actualPage <= 3) ? 1 : actualPage >= maxPages - 2 ? maxPages - 2 : actualPage - 2;
        let endsAt = (actualPage <= 3) ? 5 : actualPage >= maxPages - 2 ? maxPages : actualPage + 2;

        let values = [];
        for (let i = beginsAt; i <= endsAt; i++) {
            values.push(i);
        }
        return values;
    }

    const changePage = (val: number) => {
        router.push("/paginados/" + val);
    }

    return (
        <div className={"flex flex-wrap gap-2 " + className}>
            <DefaultButton isActive={false} onClick={() => changePage(1)} disabled={actualPage === 1}>
                <FontAwesomeIcon icon={faAnglesLeft} />
            </DefaultButton>
            {getPageList().map((page) => (
                <DefaultButton key={`page${page}`} className="pl-3 pr-3" isActive={page === actualPage} onClick={() => changePage(page)} disabled={actualPage === page}>
                    {page}
                </DefaultButton>
            ))}
            <DefaultButton isActive={false} onClick={() => changePage(maxPages)} disabled={actualPage === maxPages}>
                <FontAwesomeIcon icon={faAnglesRight} />
            </DefaultButton>
        </div>
    )
}

export default Pagination