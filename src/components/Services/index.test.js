import React from 'react';
import renderer from 'react-test-renderer';
import Services from './index';

describe('Services', () => {

  it('Services should be defined', () => {
    expect(Services).toBeDefined();
  });

  it('Services renders correctly', () => {
    const tree = renderer
      .create(<Services />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
