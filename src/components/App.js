import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {max_number} from '../helper';
import Gift from './Gift';

class App extends Component {
  constructor() {
    super();
    this.state = {gifts: []};
  }
  addGift = () =>
  {
      const {gifts} = this.state;
      const max_id = max_number(this.state.gifts.map(gift=>gift.id));
      gifts.push({id: max_id+1});
      this.setState({gifts});
  }
  removeGift = id =>
  {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({gifts});
  }
  render() {
    return (
        <div>
            <h2>Gift Giver</h2>
            <div className="gift-list">
              {
                this.state.gifts.map(gift => {
                  return (
                    <Gift
                      key={gift.id}
                      gift={gift}
                      removeGift={this.removeGift}
                    />
                  );
                })
              }
            </div>
            <Button className="add-btn" onClick={this.addGift}>Add Gift</Button>
        </div>
    );
  }
}

export default App;
