import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Valuate from './components/valuat';
import Transactionadvisory from './components/transacadvi';
import Financialmodel from './components/financial';
import StartUpEdge from './components/startupedge';
import TransferPricingAdvicery from './components/transferpricingadvisory';
import Client from './components/client';
import ContactUs from './components/contactus';
import Team from './components/team';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/home">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/clients">
          <Navbar />
          <Client/>
          <Footer />
        </Route>
        <Route path="/contactus">
          <Navbar />
          <ContactUs/>
          <Footer />
        </Route>
        <Route path="/team">
          <Navbar />
          <Team/>
          <Footer />
        </Route>
        <Route path="/service/valuation/0">
          <div>
            <Navbar />
            <Valuate val='0' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/valuation/1">
          <div>
            <Navbar />
            <Valuate val='1' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/valuation/2">
          <div>
            <Navbar />
            <Valuate val='2' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/valuation/3">
          <div>
            <Navbar />
            <Valuate val='3' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/valuation/4">
          <div>
            <Navbar />
            <Valuate val='4' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/tractional-advisory/0">
          <div>
            <Navbar />
            <Transactionadvisory val='0' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/tractional-advisory/1">
          <div>
            <Navbar />
            <Transactionadvisory val='1' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/tractional-advisory/2">
          <div>
            <Navbar />
            <Transactionadvisory val='2' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/tractional-advisory/3">
          <div>
            <Navbar />
            <Transactionadvisory val='3' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/financialmodel/0">
          <div>
            <Navbar />
            <Financialmodel val='0' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/financialmodel/1">
          <div>
            <Navbar />
            <Financialmodel val='1' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/financialmodel/2">
          <div>
            <Navbar />
            <Financialmodel val='2' />
            <Footer />
          </div>
        </Route>
        <Route path="/service/transferpricingadvisory/0">
          <div>
            <Navbar />
            <TransferPricingAdvicery val='0'/>
            <Footer />
          </div>
        </Route>
        <Route path="/service/transferpricingadvisory/1">
          <div>
            <Navbar />
            <TransferPricingAdvicery val='1'/>
            <Footer />
          </div>
        </Route>
        <Route path="/service/transferpricingadvisory/2">
          <div>
            <Navbar />
            <TransferPricingAdvicery val='2'/>
            <Footer />
          </div>
        </Route>
        <Route path="/service/transferpricingadvisory/3">
          <div>
            <Navbar />
            <TransferPricingAdvicery val='3'/>
            <Footer />
          </div>
        </Route>
        <Route path="/service/startupedge">
          <div>
            <Navbar />
            <StartUpEdge/>
            <Footer />
          </div>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
