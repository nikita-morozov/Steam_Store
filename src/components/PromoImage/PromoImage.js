import React from 'react';
import "./PromoImage.css";


class PromoImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            load: "",
            loadn: "",
            title: ""
        }
    }

    undefcheck() {
        return this.props.src[this.props.imgname] === undefined
    }

    render() {
        if (this.undefcheck) {
            return (<img className='promo_lg' src={this.props.src} alt={this.props.title + " promo"} />)
        }
        else {
            return (<img className='promo_lg' src={this.props.src[this.props.imgname]} alt={this.props.title + " promo"} />)
        }
    }
}

export default PromoImage;