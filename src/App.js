import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'

import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import Service from './components/Service';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

function Lost() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Navbar />
      <h1>404 Page Not Found!</h1>
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/regis" element={<RegisterPage/>}/>
        <Route element={<Lost/>} />
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
