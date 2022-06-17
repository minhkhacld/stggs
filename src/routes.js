import { Home, Support, Docs, Download } from './pages/pages';

const routes = [
    { path: '/stggs/', element: <Home />, name: 'Home', },
    { path: '/stggs/support', element: <Support />, name: 'Support', },
    { path: '/stggs/docs', element: <Docs />, name: 'Docs', },
    { path: '/stggs/download', element: <Download />, name: 'Dowload', },
];

export default routes;