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
import Cars from './Components/Cars/Cars';
import ResponsiveDrawer from './Components/Dashboard/Dashboard';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import Myorders from './Components/Dashboard/MyOrders/Myorders';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import DashboardHoeme from './Components/Dashboard/Home/DashboardHoeme';
import About from './Components/About/About';
import Details from '../src/Components/Cars/Details/Details'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='cars' element={<Cars />} />
          <Route path='cars/:id' element={<Details/>} />
          <Route path='dashboard'
            element={<ResponsiveDrawer />}>
            <Route path={'/dashboard'} element={<DashboardHoeme />}></Route>
            <Route path='manage' element={<ManageOrders />} />
            <Route path='addReview' element={<AddReview />}></Route>
            <Route path='orders' element={<Myorders />}></Route>
           
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
