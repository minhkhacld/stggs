import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const App = () => {
  return (
    <div className="h-screen w-12/12 bg-white-100 flex-col justify-center content-center overflow-y-scroll overflow-x-hidden">
      <Routes>
        {
          routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))
        }
        <Route path='*' element={<Navigate path='/' replace />} />
      </Routes>


    </div>
  )
}
export default App;