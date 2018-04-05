import React, { Component } from 'react';
import './PantryItem.css';

class PantryItem extends Component {
    constructor(props) {
        super(props);
        this.state= {};
        this.removePantryItemHandler = this.removePantryItemHandler.bind(this);
    }

    removePantryItemHandler() {
        this.props.removePantryItem(this.props.name);
    }

    render() {
        return (
            <div className="pantry-item">
                <div>Name: {this.props.name}</div>
                <div>Quantity Remaining: {this.props.quantity}</div>
                <div>Shelf: {this.props.shelf}</div>
                <div>Date Added: {this.props.dateAdded}</div>
                <button className="remove" onClick={this.removePantryItemHandler}>Remove</button>
            </div>
        );
    }
};

export default PantryItem;