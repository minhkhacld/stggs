import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';
// import Footer from './components/footer/footer';
// import Navbar from './components/navbar/navbar';

const App = () => {

  return (

    <div className="h-screen w-12/12 bg-white-100 flex-col justify-center content-center overflow-y-scroll overflow-x-hidden"
    >
      {/* <Navbar /> */}
      <Routes>
        {
          routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))
        }
        <Route path='*' element={<Navigate path='/' replace />} />
      </Routes>

    </div>
  );

};

export default App;