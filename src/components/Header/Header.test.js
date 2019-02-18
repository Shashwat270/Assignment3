import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render a header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  const wrapper = shallow(<Header />);
  it('should have listed items in header', () => {
    expect(wrapper.find('li').getElements().length > 0).toEqual(true);
  });
});
