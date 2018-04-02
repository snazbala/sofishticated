import React, { Component } from 'react';
import PantryItemList from './PantryItemList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app-title">
                    <span role="img" aria-label="fish">🐟</span>
                    Sofishticated
                    <span role="img" aria-label="fish">🐟</span>
                </h1>
                <PantryItemList />
            </div>
        );
    }
}

export default App;
