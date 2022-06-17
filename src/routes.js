import { Home, Support, Docs, Download } from './pages/pages';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/support', element: <Support /> },
    { path: '/docs', element: <Docs /> },
    { path: '/download', element: <Download /> },
];

export default routes;