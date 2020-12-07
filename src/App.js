import React, { Component } from 'react';

import './App.css';
import Contact from './components/Contact';


class App extends Component {
  state = {
    showContacts: true
  }

  togglePersons = () => {
    let showContacts = this.state.showContacts;
    this.setState({ showContacts: !showContacts })
  }

  render() {
    return (
      <div className="App">
        
          <h1>My contacts</h1>

          <button onClick={this.togglePersons}>Toggle contacts</button>
          

          { this.state.showContacts 
            ? (<div>
              <Contact name="Eca" project="DataBASE" />
              <Contact name="Juliane" project="World of Plants" />
              <Contact name="Jamie" project="Wookiepedia" />
              <Contact name="Lucy" project="The Video Store" />
            </div>)
            : null
          }

      
      </div>
    )
  }
}

export default App;
