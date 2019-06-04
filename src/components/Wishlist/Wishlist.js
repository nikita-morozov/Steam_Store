import React from 'react'
import './Wishlist.css'

class Wishlist extends React.Component {

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
                    <button onClick={this.props.closeWishlist}>close me</button>  
                </div>  
            </div>  
        );
    }
}

export default Wishlist;