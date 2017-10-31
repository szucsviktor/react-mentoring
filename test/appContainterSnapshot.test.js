import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../src/components/appContainer';


it('test to see if the App renders correctly', () => {
    const tree = renderer
            .create(<App />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});