import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('CreateBlogForm', () => {
  it('should render form for creating Blog Post', () => {
    const tree = renderer.create(<MainPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
