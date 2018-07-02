import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly',()=> {
  expect(app).toMatchSnapshot();
});

it('initializes `state` to be an empty [] of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('the `add gift` button is clicked then a new gift should be added to `state`', () => {
  app.find('.add-btn').simulate('click');
  expect(app.state().gifts).toEqual([{id:1}]);
});

it('adds new gift to rendered list', () => {
  app.find('.add-btn').simulate('click');
  expect(app.find('.gift-list').children().length).toEqual(2);
});
