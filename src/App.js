import React, { Component } from 'react';
import PantryItemList from './PantryItemList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app-title">Sofishticated</h1>
                <PantryItemList />
            </div>
        );
    }
}

export default App;
