import React from 'react'
import './Cart.css'

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ids: []
        }
    }


    render() {
        return(
            <div className='popup'>  
                <div className='popupinner'>  
                    <h1>{this.props.text}</h1>  
                    <button onClick={this.props.closePopup}>close me</button>  
                </div>  
            </div>  
        );
    }
}

export default Cart;