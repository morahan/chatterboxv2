import React from 'react';

import './Input.styles.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div>
        <input
          className="input"
          type="text"
          // (e) => this.handleChange(e)
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.handleSubmit(this.state.message)}>Submit Message</button>
      </div>
    )
  }
}

export default Input;
