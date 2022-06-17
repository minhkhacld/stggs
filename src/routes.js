import { Home, Support, Docs, Download } from './pages/pages';

const routes = [
    { path: '/', element: <Home />, name: 'Home', },
    { path: '/support', element: <Support />, name: 'Support', },
    { path: '/docs', element: <Docs />, name: 'Docs', },
    { path: '/download', element: <Download />, name: 'Dowload', },
];

export default routes;