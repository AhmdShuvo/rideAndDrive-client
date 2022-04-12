import logo from './logo.svg';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer/Footer';
import Contact from './Components/Home/ContactPage/Contact';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <AuthProvider>
      
<BrowserRouter>
<Navbar></Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signup' element={<SignUp />} />
      
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
