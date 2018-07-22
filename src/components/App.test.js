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
    const id = 1;
    beforeEach(() => {
      app.find('.add-btn').simulate('click');
    });
    afterEach(() => {
      app.setState({gifts:[]});
    });

    it('adds a new gift should be added to `state`', () => {
      expect(app.state().gifts).toEqual([{id}]);
    });

    it('adds new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove gift', () => {
        beforeEach(() => {
          app.instance().removeGift(id);
        });
        it('removes gift from `state`', () => {
          expect(app.state().gifts).toEqual([]);
        });
    });
  });
});
