import React, { Component } from 'react';
import AddPantryItem from './AddPantryItem';
import PantryItem from './PantryItem';
import './PantryItemList.css';

class PantryItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { pantryItems: ['Flour', 'Sugar'] };
        this.addPantryItem = this.addPantryItem.bind(this);
        this.removePantryItem = this.removePantryItem.bind(this);
    }

    addPantryItem(newPantryItem) {
        this.setState({ pantryItems: [...this.state.pantryItems, newPantryItem] });
    }

    removePantryItem(itemToRemove) {
        const filteredPantryItems = this.state.pantryItems.filter(name => {
            return name !== itemToRemove;
        });
        this.setState({ pantryItems: filteredPantryItems });
    }

    renderPantryItems() {
        return this.state.pantryItems.map(name => (
            <PantryItem
                key={name}
                name={name}
                removePantryItem={this.removePantryItem}
            />
        ));
    }

    render() {
        return (
            <div className="pantry-item-list">
                <AddPantryItem addPantryItem={this.addPantryItem} />
                {this.renderPantryItems()}
            </div>
        );
    }
}

export default PantryItemList;