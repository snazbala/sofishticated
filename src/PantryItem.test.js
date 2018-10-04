import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PantryItem from './PantryItem';

describe(PantryItem, () => {
    let name = 'Sugar';
    const mockRemovePantryItem = jest.fn();
    const component = shallow(
        <PantryItem name={name} removeItem={mockRemovePantryItem}/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <PantryItem name="Flour" />
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains the supplied pantry item name', () => {
        expect(component.text()).toContain(name);
    });
});


