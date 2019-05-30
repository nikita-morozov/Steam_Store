import React from 'react';
import './Tag.css';

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Genre",
            tagStyle: 'Ctag'
        }
    }

    clicked() {
        this.setState({ tagStyle: 'CtagClicked' });
    }

    render() {
        if (this.props.text == null) {
            return null;
        } else {
            return (
                <button className={this.state.tagStyle} onClick={(e) => { this.clicked(); }}>
                    {this.props.text}
                </button>
            );
        }
    }
}

export default Tag;