import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './TodosLoading.css';

function TodosLoading() {
    return (
        <li className='baseSkeleton'>
            <Skeleton circle width={40} height={40} />
            <Skeleton className='textSkeleton' width={260} borderRadius={8} height={40} />
            <Skeleton circle width={40} height={40} />
        </li>
    )
}

export { TodosLoading }