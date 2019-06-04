import React from 'react'
import './Wishlist.css'
import dbs from '../../dbs.json'

class Wishlist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ids: this.props.wishlistItems
        }

        this.create = this.create.bind(this)
    }

    create = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < this.state.ids.length; i++) {
            let children = []
            //Inner loop to create children
                children.push(<td><img src={dbs['table']['games'][this.state.ids[i]]['img']} width="300" /></td>)
                children.push(<td>{dbs['table']['games'][this.state.ids[i]]['title']}</td>)
                children.push(<td>{dbs['table']['games'][this.state.ids[i]]['price']}</td>)
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }

    render() {
        return(
            <div className='popup'>  
                <div className='popupinner'>  
                    <h1>{this.props.text}</h1> 
                    <table>
                    {this.create()}
                    </table>
                    <button onClick={this.props.closeWishlist}>close me</button>  
                </div>  
            </div>  
        );
    }
}

export default Wishlist;