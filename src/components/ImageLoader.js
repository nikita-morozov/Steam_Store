import React from 'react';
import ror from '../asset/ror2.jpg';

class ImageLoader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            load: "",
            loadn: "",
            title: ""
        }
    }

    componentDidMount() {
        if (this.props.title.toLowerCase() === "risk of rain 2") {
            this.setState({load: {ror}, loadn: "ror"});
        }
    }

    render() {
        return (
            <img class='promo_lg' src={this.state.load[this.state.loadn]} alt={this.state.title + " promo"} />
        )
    }
}

export default ImageLoader;