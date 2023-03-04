import './App.css';
import CustomerHome from './components/CustomerHome';
import ExpertHome from './components/ExpertHome';
import InputForm from './components/InputForm';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';


const router=createBrowserRouter([
  {
    path:'/',
    element:<InputForm />,
    errorElement:<ErrorPage />
  },
  {
    path:'/customer',
    element:<CustomerHome />,
    errorElement:<ErrorPage />
  },
  {
    path:'/expert',
    element:<ExpertHome />,
    errorElement:<ErrorPage />

  },
])
function App() {
  return (
    <div className="App">
      {/* <CustomerHome /> */}
      <div style={{
        backgroundColor:'black',
        height:'100vh',
        width:'100vw',
        position:'absolute',
        zIndex:-1,
        opacity:0.9
      }}></div>

      <div className='d-flex flex-wrap'>
        <InputForm/>
        <ExpertHome />
      </div>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
