import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

describe('Home', () => {

  it('Home should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('Home renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
