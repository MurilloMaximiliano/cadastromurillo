import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'
import {HashRouter} from "react-router-dom"
import Router from './Router'
import Logo from '../components/tamplets/Logo'
import Nave from '../components/tamplets/Nave'

import Footer from '../components/tamplets/Footer'


export default props =>
<HashRouter>
<div className="app">
    <Logo />
    <Nave />
    <Router/>
    <Footer />
  
</div>
</HashRouter>


