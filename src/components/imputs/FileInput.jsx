import React from 'react';

class FileInput extends React.Component {
    render(){
        return(
            <input type='file' onChange={this.props.acceptFile}/>
        )
    }
}

export default FileInput;