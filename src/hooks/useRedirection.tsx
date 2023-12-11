import { useRouter } from 'next/navigation';
import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

const useRedirection = () => {
    const router = useRouter();
    const { setReady } = useContext(ThemeContext);

    const push = (route: string) => {
        setReady(false);
        router.push(route);
    }

    return { push };
}

export default useRedirection