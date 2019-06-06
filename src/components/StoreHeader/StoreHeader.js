import React from 'react';
import './StoreHeader.css';
import searchlogo from '../../asset/search.svg';
import CartButton from '../CartButton/CartButton.js';
import WishlistButton from '../WishlistButton/WishlistButton.js';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown.js';


class StoreHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      yourstore: [
        {
          name: 'Recently Viewed',
          id: 'a1',
          key: 'yourstore'
        },
        {
          name: 'Steam Curators',
          id: 'a2',
          key: 'yourstore'
        },
        {
          name: 'Recently Updated',
          id: 'a3',
          key: 'yourstore'
        }
      ],
      games: [
        {
          name: 'Free to Play',
          id: 'b1',
          key: 'games'
        },
        {
          name: 'Early Access',
          id: 'b2',
          key: 'games'
        },
        {
          name: 'Demos',
          id: 'b3',
          key: 'games'
        },
        {
          name: 'Virtual Reality',
          id: 'b4',
          key: 'games'
        },
        {
          name: 'Steam Controller Friendly',
          id: 'b5',
          key: 'games'
        },
        {
          name: 'PC Café Games on Steam',
          id: 'b6',
          key: 'games'
        },
        {
          name: 'Action',
          id: 'g1',
          key: 'gamesbygenre'
        },
        {
          name: 'Adventure',
          id: 'g2',
          key: 'gamesbygenre'
        },
        {
          name: 'Casual',
          id: 'g3',
          key: 'gamesbygenre'
        },
        {
          name: 'Indie',
          id: 'g4',
          key: 'gamesbygenre'
        },
        {
          name: 'Massively Multiplayer',
          id: 'g5',
          key: 'gamesbygenre'
        },
        {
          name: 'Racing',
          id: 'g6',
          key: 'gamesbygenre'
        },
        {
          name: 'RPG',
          id: 'g7',
          key: 'gamesbygenre'
        },
        {
          name: 'Simulation',
          id: 'g8',
          key: 'gamesbygenre'
        },
        {
          name: 'Sports',
          id: 'g9',
          key: 'gamesbygenre'
        },
        {
          name: 'Strategy',
          id: 'g10',
          key: 'gamesbygenre'
        },
        {
          name: 'See Popular Tags',
          id: 'b7',
          key: 'gamesbygenre'
        },
        {
          name: 'Mac OS X',
          id: 'p1',
          key: 'gamesbyplatform'
        },
        {
          name: 'SteamOS + Linux',
          id: 'p2',
          key: 'gamesbyplatform'
        },
      ],
      software: [
        {
          name: 'Software Hub',
          id: 'c1',
          key: 'software'
        },
        {
          name: 'Animation and Modeling',
          id: 'c2',
          key: 'software'
        },
        {
          name: 'Audio Production',
          id: 'c3',
          key: 'software'
        },
        {
          name: 'Design & Illustration',
          id: 'c4',
          key: 'software'
        },
        {
          name: 'Education',
          id: 'c5',
          key: 'software'
        },
        {
          name: 'Game Development',
          id: 'c6',
          key: 'software'
        },
        {
          name: 'Photo Editing',
          id: 'c7',
          key: 'software'
        },
        {
          name: 'Utilities',
          id: 'c8',
          key: 'software'
        },
        {
          name: 'Video Production',
          id: 'c9',
          key: 'software'
        },
        {
          name: 'Web Publishing',
          id: 'c10',
          key: 'software'
        }
      ],
      hardware: [
        {
          name: 'Valve Index',
          id: 'd1',
          key: 'hardware'
        },
        {
          name: 'Steam Controller',
          id: 'd2',
          key: 'hardware'
        },
        {
          name: 'Steam Link',
          id: 'd3',
          key: 'hardware'
        },
        {
          name: 'HTC Vive',
          id: 'd4',
          key: 'hardware'
        }
      ]
    }
  }

  render() {
    return (
      <div id='navcontainer'>
        <div className='navbar' style={{ height: '38px' }}>
          <div className='bardropdown'>
            <NavbarDropdown name='Your Store' options={this.state.yourstore} posOffset='0px' scrollPadding='0px' styleType='dropdownHeaderTitleFirst' style={{ height: '38px', width: '85px' }} />
            <NavbarDropdown name="Games" options={this.state.games} posOffset='-85px' scrollPadding='5px' styleType='dropdownHeaderTitle' style={{ height: '38px', width: '85px' }} />
            <NavbarDropdown name='Software' options={this.state.software} posOffset='-170px' scrollPadding='5px' styleType='dropdownHeaderTitle' style={{ height: '38px', width: '85px' }} />
            <NavbarDropdown name='Hardware' options={this.state.hardware} posOffset='-255px' scrollPadding='0px' styleType='dropdownHeaderTitle' style={{ height: '38px', width: '85px' }} />
          </div>
          <button className='navbarmenuitem' style={{ height: '38px', width: '85px' }}>News</button>
          <div id='container_search_right'>
            <WishlistButton toggle={this.props.toggleWishlist} />
            <CartButton toggle={this.props.toggleCart} />
            <form className='searchbar'>
              <input type='text' className='searchinput' placeholder='Search the store...' style={{ height: '26px', width: '250px' }}></input>
              <button className='searchbutton'><img src={searchlogo} alt=''></img></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreHeader;
