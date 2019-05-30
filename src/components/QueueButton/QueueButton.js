import React from 'react';
import './QueueButton.css';


class QueueButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonStyle: 'qbutton',
            text: "",
            styles: { height: '32px' }
        }
    }

    clicked() {
        this.setState({ buttonStyle: 'qbuttonClicked' });
    }

    render() {
        return (
            <div>
                <button className={this.state.buttonStyle} style={this.state.styles} onClick={(e) => { this.clicked(); }}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default QueueButton;