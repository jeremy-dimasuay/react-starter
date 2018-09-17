/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../';

const createButton = (props = {}) => (
    <Button
        {...props}
    />
);

describe('<Button>', () => {
    it('renders', () => {
        const component = renderer.create(createButton());

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
