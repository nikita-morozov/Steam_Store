import React from 'react'
import './Cart.css'
import dbs from '../../dbs.json'

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ids: this.props.cartItems
        }
        this.create = this.create.bind(this)
    }

    create = () => {
        let table = []
        let total = 0.00

        // Outer loop to create parent
        for (let i = 0; i < this.state.ids.length; i++) {
            let children = []
            //Inner loop to create children
                children.push(<td><img src={dbs['table']['games'][this.state.ids[i]]['img']} width="300" alt={dbs['table']['games'][this.state.ids[i]]['title']} /></td>)
                children.push(<td>{dbs['table']['games'][this.state.ids[i]]['title']}</td>)
                children.push(<td>{dbs['table']['games'][this.state.ids[i]]['price']}</td>)
                total += parseFloat(dbs['table']['games'][this.state.ids[i]]['price'].substring(1))
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        let pChild = []
        pChild.push(<td></td>)
        pChild.push(<td className="totaldue" >Total Due:</td>)
        pChild.push(<td className="totalprice" >${total}</td>)
        table.push(<tr>{pChild}</tr>)
        return table
    }

    render() {
        return(
            <div className='popup'>  
                <div className='popupinner'>  
                    <h1>Items</h1>
                    <table>
                    {this.create()}
                    </table>
                    <button onClick={this.props.closePopup}>close me</button>  
                </div>  
            </div>  
        );
    }
}

export default Cart;