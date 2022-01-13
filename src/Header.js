import React from 'react'

function Header() {
    return (
        <div>
        <img
          className="header__logo" src="./images/amazon.jpg"
        />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
        </div>
    )
}

export default Header
