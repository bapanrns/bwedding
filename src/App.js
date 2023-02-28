import './App.css';
import NavBars from './components/NavBars';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProfile from './Profile/AllProfile';
import ProfileDetails from './Profile/ProfileDetails';
import Home from './Home/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Test from './Profile/Test';
import HomeNavBars from './components/HomeNavBars';


function App() {
    return (
      <>
      <h1>{localStorage.getItem('login')}</h1>
        <BrowserRouter>
        {
          localStorage.getItem('login') === "true" ? <NavBars /> : <HomeNavBars />
        }
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/" element={<AllProfile />} />
            <Route path="profiledetails/:id" element={<ProfileDetails />} />
            <Route path="test/" element={<Test></Test>} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
