import React from 'react';

class FileContents extends React.Component {
    render() {
        return (
            <p>{this.props.fileText}</p>
        )
    }
}
export default FileContents;