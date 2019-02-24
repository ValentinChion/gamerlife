import React, { Component } from 'react';
import './App.css';
import './App.scss'
import AppLayout from "./components/AppLayout/AppLayout";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppLayout/>
            </div>
        );
    }
}

export default App;
