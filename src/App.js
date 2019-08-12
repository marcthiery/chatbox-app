import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

// Firebase

import base from './base';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  };

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    });
  }

  addMessage = message => {
    const messages = { ...this.state.messages };
    messages[`Message-${Date.now()}`] = message;
    this.setState({ messages });
  };

  render() {
    const messages = Object.keys(this.state.messages).map(key => {
      return (
        <Message
          key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      );
    });
    return (
      <div className="box">
        <div>
          <div className="messages">
            <div className="message">{messages}</div>
          </div>
          <Formulaire
            length={140}
            addMessage={this.addMessage}
            pseudo={this.state.pseudo}
          />
        </div>
      </div>
    );
  }
}

export default App;
