import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Quiz = lazy(() => import('./pages/Quiz'));
const Result = lazy(() => import('./pages/Result'));

function App() {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'quiz/:id',
            element: <Quiz />,
        },
        {
            path: 'result',
            element: <Result />,
        },
        {
            path: '*',
            element: (
                <Navigate
                    to={'/'}
                    replace
                />
            ),
        },
    ]);

    return (
        <div className={'min-w-80 max-w-[1920px] min-h-screen flex bg-light-gray'}>
            <Suspense fallback={null}>{element}</Suspense>
        </div>
    );
}

export default App;
