import React, { useContext } from 'react'
import Button from '@/components/Button/Button';
import { PokemonContext } from '@/contexts/PokemonListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import useRedirection from '@/hooks/useRedirection';
import ThemeContext from '@/src/contexts/ThemeContext';
import useWindowSizeTracker from '@/src/hooks/useWindowSizeTracker';

const Pagination = ({ endpoint, actualPage, className = "" }: { actualPage: number, className?: string, endpoint: string }) => {
    const router = useRedirection();
    const windowSize = useWindowSizeTracker();
    const { maxPages } = useContext(PokemonContext);
    const { theme } = useContext(ThemeContext);

    const getButtonSize = () => {
        if (windowSize.width > 640) {
            return "md";
        }
        if (windowSize.width > 360) {
            return "sm";
        }

        return "xs";
    }

    const getPageList = () => {
        let beginsAt = (actualPage <= 3) ? 1 : actualPage >= maxPages - 2 ? maxPages - 4 : actualPage - 2;
        let endsAt = (actualPage <= 3) ? 5 : actualPage >= maxPages - 2 ? maxPages : actualPage + 2;

        let values = [];
        for (let i = beginsAt; i <= endsAt; i++) {
            values.push(i);
        }
        return values;
    }

    const changePage = (val: number) => {
        if (val === actualPage) return;

        endpoint = endpoint[endpoint.length - 1] !== "/" ? endpoint + "/" : endpoint;

        router.push(endpoint + val);
    }

    return (
        <div className={"flex flex-wrap gap-2 " + className}>
            <Button color="theme" size={getButtonSize()} inverted={theme === "dark"} bordered onClick={() => changePage(1)} disabled={actualPage === 1}>
                <FontAwesomeIcon icon={faAnglesLeft} />
            </Button>
            <Button color="theme" size={getButtonSize()} inverted={theme === "dark"} className="hidden sm:block" bordered onClick={() => changePage(actualPage - 1)} disabled={actualPage <= 1}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            {getPageList().map((page) => (
                <Button color={page === actualPage ? "default" : "theme"} size={getButtonSize()} key={`page${page}`} bordered transparentBg={page !== actualPage} onClick={() => changePage(page)}>
                    {page}
                </Button>
            ))}
            <Button color="theme" size={getButtonSize()} inverted={theme === "dark"} bordered className="hidden sm:block" onClick={() => changePage(actualPage + 1)} disabled={actualPage === maxPages}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Button>
            <Button color="theme" size={getButtonSize()} inverted={theme === "dark"} bordered onClick={() => changePage(maxPages)} disabled={actualPage === maxPages}>
                <FontAwesomeIcon icon={faAnglesRight} />
            </Button>
        </div>
    )
}

export default Pagination