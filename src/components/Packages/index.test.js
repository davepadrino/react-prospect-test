import React from 'react';
import renderer from 'react-test-renderer';
import Packages from './index';

describe('Packages', () => {

  it('Packages should be defined', () => {
    expect(Packages).toBeDefined();
  });

  it('Packages renders correctly', () => {
    const tree = renderer
      .create(<Packages />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
