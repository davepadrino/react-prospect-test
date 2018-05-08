import React from 'react';
import renderer from 'react-test-renderer';
import Doctors from './index';

describe('Doctors', () => {

  it('Doctors should be defined', () => {
    expect(Doctors).toBeDefined();
  });

  it('Doctors renders correctly', () => {
    const tree = renderer
      .create(<Doctors />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
