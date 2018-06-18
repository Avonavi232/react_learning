import React, { Component } from 'react'
import { Menu, NewColor, Colors } from './containers'
import '../stylesheets/APP.css'

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App