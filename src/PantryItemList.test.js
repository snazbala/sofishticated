import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PantryItemList from './PantryItemList';

describe(PantryItemList, () => {
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <PantryItemList/>
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});


