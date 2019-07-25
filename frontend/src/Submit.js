import React, { Component } from 'react';
import { eztz } from 'eztz';

const AUCTION = 'KT1V7bXs8xG16VxrHBhA6KJhUXBe2bpp96GK';

export default class Submit extends Component {
  state = { bids: [] };

  logBid = storage => {
    console.log(JSON.stringify(storage.args));
    const newBid = storage.args[0].args[1].int;
    const newBidOrigin = storage.args[1].args[0].string;
    this.setState(prevState => ({
      bids: [...prevState.bids, { bid: newBid, origin: newBidOrigin }],
    }));
  };

  componentDidMount() {
    eztz.node.setProvider('http://zeronet-tezos.chainaccelerator.academy:8732');
    eztz.contract
      .load(AUCTION)
      .then(function(res) {
        console.log(res); // Contract Object
      })
      .catch(function(e) {});
    eztz.contract.watch(AUCTION, 5, this.logBid);
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
