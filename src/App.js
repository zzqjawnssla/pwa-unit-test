import './App.css';
import {useEffect, useState} from 'react';
import NavigationBar from './components/NavigationBar';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './route/PrivateRoute';
import Home from './pages/core/Home';
import Login from './pages/core/Login';
import TopBar from "./components/Topbar";


function App() {
    const [authenticated, setAuthenticated] = useState(false);


    useEffect(() => {
        console.log('authenticated', authenticated);
    }, [authenticated]);

    return (
        <div className="App">
            <header className="App-header">
                <TopBar/>
                <NavigationBar authenticated={authenticated} setAuthenticated={setAuthenticated}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>}/>
                    <Route path="/user"
                           element={<PrivateRoute authenticated={authenticated} setAuthenticated={setAuthenticated}
                                                  component="UserInfoModal"/>}/>
                    <Route path="/history" element={<PrivateRoute authenticated={authenticated} component="History"/>}/>
                    <Route path="/use-unit"
                           element={<PrivateRoute authenticated={authenticated} component="Use-Unit"/>}/>
                    <Route path="/unit-detail"
                           element={<PrivateRoute authenticated={authenticated} component="Unit-Detail"/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;