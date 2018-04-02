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
                {this.props.name} {this.props.quantity}
                &nbsp; &nbsp;
                <button className="remove" onClick={this.removePantryItemHandler}>Remove</button>
            </div>
        );
    }
};

export default PantryItem;