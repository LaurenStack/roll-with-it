import React, { Component } from 'react';
import FileInput from './components/imputs/FileInput';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };

    this.acceptFile = this.acceptFile.bind(this);
  }
  acceptFile(e) {
    this.setState({file:e.target.value})
  }
  render() {
    return (
      <div className="App">
        <FileInput acceptFile={this.acceptFile}/>
      </div>
    );
  }
}

export default App;
