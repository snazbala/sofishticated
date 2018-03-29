import React, { Component } from 'react';
import './AddPantryItem.css';

class AddPantryItem extends Component {
    constructor(props) {
        super(props);
        this.state = { pantryItem: '' };
        this.handleInput = this.handleInput.bind(this);
        this.addPantryItem = this.addPantryItem.bind(this);
    }

    handleInput(event) {
        this.setState({ pantryItem: event.target.value });
    }

    addPantryItem() {
        this.props.addPantryItem(this.state.pantryItem);
        this.setState({ pantryItem: '' });
    }

    render() {
        return (
            <div className="add-pantry-item">
                <input
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.pantryItem}
                />
                &nbsp; &nbsp;
                <button onClick={this.addPantryItem}>Add New Item</button>
            </div>
        );
    }
}

export default AddPantryItem;