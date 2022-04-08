const Header = () => {
  return (
    <div className="header">
      <div className="logo"><h1 className="title">ZOOmania</h1></div>
      <div className="menu">
        <nav className="navigation">
          <ul className="list">
            <li className="shop">
              <div className="shop-item"></div>
              <a href="#" className="header-link shop-link">SHOP</a>
            </li>
            <li className="leaf">
            <div className="search-item"></div>
              <a href="#" className="header-link search-link">SEARCH</a>
            </li>
            <li className="leaf">
            <div className="basket-item"></div>
              <a href="#" className="header-link basket-link">BASKET</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;