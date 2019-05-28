import React from 'react';
import "./PromoImage.css"

class PromoImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            load: "",
            loadn: "",
            title: ""
        }
    }

    render() {
        return (
            <img id="promoImage" class='promo_lg' src={this.props.src[this.props.imgname]} alt={this.props.title + " promo"} />
        )
    }
}

export default PromoImage;