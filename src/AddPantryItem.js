import React, { Component } from 'react';
import './AddPantryItem.css';

class AddPantryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit() {
        this.props.addPantryItem({
            name: this.state.name,
            quantity: this.state.quantity,
        });
    }

    render() {
        return (
            <div className="add-pantry-item">
                <label className="label-padding">Name</label>
                <input
                    name="name"
                    className="input-field"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.name}
                />
                <label className="label-padding">Quantity Remaining</label>
                <input
                    name="quantity"
                    className="input-field"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.quantity}
                />
                <button onClick={this.handleSubmit}>Add New Item</button>
            </div>
        );
    }
}

export default AddPantryItem;