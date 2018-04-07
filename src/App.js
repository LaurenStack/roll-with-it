import React, { Component } from 'react';

import FileContents from './components/FileContents';
import CharacterSheet from './components/CharacterSheet';

import FileInput from './components/forms/imputs/FileInput';

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
    const file = e.target.files[0];
    let fileText = '';
    var reader = new FileReader();
    console.log(e);
    reader.readAsText(file);

    reader.onload = r =>{
      fileText = r.target.result;
      console.log(fileText);
      this.setState({
        file:fileText,
      });
    };
  }
  render() {
    return (
      <div className="App">
        <FileInput acceptFile={this.acceptFile}/>
        {this.state.file ? <CharacterSheet fileText={this.state.file}/> : ''}
        <FileContents fileText={this.state.file}/>
      </div>
    );
  }
}

export default App;
