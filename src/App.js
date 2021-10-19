import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Book from "./components/Book/Book";
import ContactUs from "./components/Contact/ContactUs";
import Authprovider from "./components/Context/Authprovider";
import EmailAuth from "./components/Email/EmailAuth";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HelpInfo from "./components/HelPInfo/HelpInfo";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PriviteRoute";
import NotFound from "./components/Notfound/NotFound";
import Services from "./components/Services/Services";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <div>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/book/:bookingId">
              <Book></Book>
            </PrivateRoute>
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/team">
              <Teams></Teams>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/information">
              <HelpInfo></HelpInfo>
            </Route>
            <Route path="/email">
              <EmailAuth></EmailAuth>
            </Route>

            <Route to="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
