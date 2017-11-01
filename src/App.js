import React, { Component } from 'react';
import './App.css';
// Firebase
import firebase from 'firebase/app'
import 'firebase/database'
import { FB_CONFIG } from './firebaseConfig'

class App extends Component {
  constructor(props) {
    super(props)

    // Firebase
    this.app = firebase.initializeApp(FB_CONFIG)
    this.database = this.app.database()
    this.notes = this.database.ref().child('notes')

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.notes.on('child_added', snap => {
      this.setState({
        id: snap.key,
        content: snap.content.val()
      })
    })

    console.log(this.state.notes)
  }

  render() {
    return (
      <div className="App">
        notes
      </div>
    );
  }
}

export default App;
