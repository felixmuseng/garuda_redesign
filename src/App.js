import { Route, BrowserRouter , Routes } from 'react-router-dom'

import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import UserDetail from "./components/auth/UserDetail";
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';

function App() {
  // const [] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/regis" element={<RegisterPage/>}/>
        </Route>
      </Routes>
      <UserDetail />
    </BrowserRouter>
  );
}

export default App;
