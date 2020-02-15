import React from 'react';
import MessageTile from './components/MessageTile/MessageTile';
import Input from './components/Input/Input';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{ username: 'Bailey' }],
      number: 2
    };
  }

  componentDidMount() {
    fetch('http://parse.bld.hackreactor.com/chatterbox/classes/messages?order=-createdAt', {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'input id here',
        'X-Parse-REST-API-Key': 'input key here'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ messages: data.results }))
  }

  handleSubmit = (message) => {
    const data = {
      username: 'Bailey',
      roomname: 'lobby',
      text: message
    }

    fetch('http://parse.bld.hackreactor.com/chatterbox/classes/messages', {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': 'input id here',
        'X-Parse-REST-API-Key': 'input key here'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(parsed => {
        this.setState((prevState) => {
          const newMessages = prevState.messages;
          newMessages.unshift(data)

          return {
            messages: newMessages
          }
        })
      })
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>
            React is better than jQuery
          </h1>
        </header>
        <Input
          handleSubmit={this.handleSubmit}
        />

        {this.state.messages.map((message, idx) => {
          if (idx < 15) {
            return (
              <MessageTile
                name={message.username}
                text={message.text}
              />
            )
          }
          return null;
        })}

      </div>
    );
  }
}

export default App;
