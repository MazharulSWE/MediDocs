import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Details from './pages/Details/Details/Details';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Header></Header>
           <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/details/:serviceId">
                 <Details></Details>
              </PrivateRoute>
              <Route  path="*">
                <NotFound></NotFound>
              </Route>
           </Switch>
           <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
