import React, { Component } from 'react';
import './AddPantryItem.css';

class AddPantryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            shelf: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.baseState = this.state
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit() {
        this.props.addPantryItem({
            name: this.state.name,
            quantity: this.state.quantity,
            shelf: this.state.shelf,
        });
        this.resetForm()
    }

    resetForm() {
        this.setState(this.baseState);
    }

    render() {
        return (
            <div className="add-pantry-item">
                <div>
                    <label className="label-padding">Item Name</label>
                    <input
                        name="name"
                        className="input-field"
                        type="text"
                        onChange={this.handleInput}
                        value={this.state.name}
                    />
                </div>
                <div>
                    <label className="label-padding">Quantity Remaining</label>
                    <input
                        name="quantity"
                        className="input-field"
                        type="text"
                        onChange={this.handleInput}
                        value={this.state.quantity}
                    />
                </div>
                <div>
                    <select
                        name="shelf"
                        type="select"
                        onChange={this.handleInput}
                        value={this.state.shelf}
                    >
                        <option>Select a shelf</option>
                        <option>Bakery</option>
                        <option>Dairy/Deli</option>
                        <option>Freezer</option>
                        <option>Pantry</option>
                        <option>Produce</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <button className="btn" onClick={this.handleSubmit}>Add New Item</button>
                </div>
            </div>
        );
    }
}

export default AddPantryItem;