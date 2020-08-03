import React from 'react';
import Layout from "./Layouts/Layout";
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';


function App() {
    return ( 
      <div className = "App" >
            <BrowserRouter>
                  <Layout></Layout>
                  <Route path="#top"></Route>
                  <Route path="#services"></Route>
                  <Route path="#about"></Route>
                  <Route path="#contact"></Route>
                  <Route path="#testimonials"></Route>

            </BrowserRouter>
           
      </div>
    );
}

export default App;