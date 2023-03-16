import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'

import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import UserDetail from "./components/auth/UserDetail";
import Service from './components/Service';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
      </Route>
    )
  )


  return (
    <div className='App'>
      <RouterProvider router = {router}/>
    </div>
  );
}

const Root = () => {
  return(
    <>
      <Navbar/>
    </>
  )
}

export default App;
