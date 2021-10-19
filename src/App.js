import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Book from "./components/Book/Book";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HelpInfo from "./components/HelPInfo/HelpInfo";
import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import Services from "./components/Services/Services";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <div>
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
          <Route path="/book/:bookingId">
            <Book></Book>
          </Route>
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

          <Route to="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
