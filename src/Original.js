// @flow

import React from "react";
import Cleave from 'cleave.js/react';

type Props = {
  onSetPhoneNumberClicked: (phoneNumber: string) => void,
};
type State = {
  phoneNumber: string,
  errorMessage: string,
};

export class Original extends React.Component<Props, State> {
  phoneInputRef: ?HTMLInputElement = null;

  constructor(props: Props) {
    super(props);
    this.state = { phoneNumber: ``, errorMessage: `` };
  }

  componentDidMount() {
    if (this.phoneInputRef != null) {
      this.phoneInputRef.focus();
    }
  }

  onSubmitButtonClicked = () => {
    if (this.state.phoneNumber.length !== 14) {
      this.setState({ errorMessage: `Phone numbers must appear in the format: (XXX) XXX-XXXX.` });
    } else {
      this.props.onSetPhoneNumberClicked(this.state.phoneNumber);
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginTop: 5 }}>Only one phone number can be added to each call transfer rule.</div>
        <div style={{ flexDirection: `row`, marginTop: 10, alignItems: `center` }}>
          <Cleave
            htmlRef={(ref) => { this.phoneInputRef = ref; }}
            style={{ fontSize: 14, marginRight: 10 }}
            options={{
              numericOnly: true,
              blocks: [0, 3, 0, 3, 4],
              delimiters: [`(`, `)`, ` `, `-`],
            }}
            placeholder="(555) 555-5555"
            value={this.state.phoneNumber}
            onChange={event => this.setState({ phoneNumber: event.target.value })}
          />
          <button onClick={this.onSubmitButtonClicked}>
            Set Phone Number
          </button>
        </div>
        {this.state.errorMessage !== `` && (
          <div style={{ flexDirection: `row`, alignItems: `center`, marginTop: 5 }}>
            <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
          </div>
        )}
      </div>
    );
  }
}