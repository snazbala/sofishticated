import React, { Component } from 'react';
import AddPantryItem from './AddPantryItem';
import PantryItem from './PantryItem';
import './PantryItemList.css';

class PantryItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: 'Flour',
                    quantity: '12 cups',
                    shelf: 'Pantry',
                    dateAdded: 'Mon Apr 02 2018'
                },
                {
                    name: 'Sugar',
                    quantity: '2 cups',
                    shelf: 'Pantry',
                    dateAdded: 'Fri Mar 23 2018'
                }
            ]
        };
        this.addPantryItem = this.addPantryItem.bind(this);
        this.removePantryItem = this.removePantryItem.bind(this);
    }

    addPantryItem(newPantryItem) {
        this.setState({ items: [...this.state.items, newPantryItem] });
    }

    removePantryItem(itemToRemove) {
        const filteredPantryItems = this.state.items.filter(item => {
            return item.name !== itemToRemove;
        });
        this.setState({ items: filteredPantryItems });
    }

    renderPantryItems() {
        return this.state.items.map((item, index) => (
            <PantryItem
                key={item.name+index}
                name={item.name}
                quantity={item.quantity}
                shelf={item.shelf}
                dateAdded={item.dateAdded}
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