import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly',()=> {
    expect(app).toMatchSnapshot();
  });

  it('initializes `state` to be an empty [] of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add gift` button', () => {
    beforeEach(() => {
      app.find('.add-btn').simulate('click');
    });
    afterEach(() => {
      app.setState({gifts:[]});
    });

    it('adds a new gift should be added to `state`', () => {
      expect(app.state().gifts).toEqual([{id:1}]);
    });

    it('adds new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});
