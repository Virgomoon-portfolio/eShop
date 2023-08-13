import React from 'react'
import "./css/Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header' >
        <Link to="/" style={{textDecoration: "none"}} >
            <div className="header_logo">
                <StorefrontIcon className='header_logoImage' fontSize='large' />
                <h2 className="header_logoTitle">eSHOP</h2>
            </div>
        </Link>

      <div className="header_search">
        <input type="text" className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav">
      <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav_item">
        <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }} >
            <div className="nav_itemBasket">
            <ShoppingBasketIcon className='itemBasket' />
            <span className="nav_itemLineTwo nav_basketCount" >{basket.length}</span>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Header