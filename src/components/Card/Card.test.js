import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should render one exactly card', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
//  const wrapper = shallow(<Card />);
//   it('should not have any props to be empty', () => {
//     // console.log(wrapper.instance().props.data);
//     const propData = wrapper.instance().props.data;
//     expect(propData).toBeDefined();
//   });
});
