import React, { Component } from 'react';
import './PantryItem.css';

class PantryItem extends Component {
    constructor(props) {
        super(props);
        this.state= {};
        this.removePantryItem = this.removePantryItem.bind(this);
    }

    removePantryItem() {
        this.props.removePantryItem(this.props.name);
    }

    render() {
        return (
            <div className="pantry-item">
                {this.props.name}
                &nbsp; &nbsp;
                <button className="remove" onClick={this.removePantryItem}>Remove</button>
            </div>
        );
    }
};

export default PantryItem;