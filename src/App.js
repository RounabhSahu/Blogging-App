import React from 'react';
import{BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Navbar from './Navbar';
import Logout from "./pages/Logout";
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/post" element={<Post/>} />
                    <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>


        </Router>
    );
};

export default App;
