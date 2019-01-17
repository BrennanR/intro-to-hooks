// @flow

import React, { Component } from 'react';
import { Original } from './Original';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Original setPhoneNumberClicked={() => {console.log("phone number clicked")}}/>
      </div>
    );
  }
}

export default App;
