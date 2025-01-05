import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../layers/Home/Home";
// import Shop from "../Pages/Home";
// import OnSale from "../Pages/About.js";
// import NewArrivals from "../Pages/Contacts";
// import Brands from "../Pages/Blog";

import styles from "./Header.module.scss"
import arrowDown from "../../assets/Arrow-down.svg"
import searchIcon from "../../assets/SearchIcon.svg"
import cartIcon from "../../assets/CartIcon.svg"
import userIcon from "../../assets/UserIcon.svg"

const Header = () => {

   return (
     <>
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.headerContainer}>
               <nav className={styles.nav}>
                  <a href='/' className={styles.logoLink}>
                     <p className={styles.logoText}>shop.co</p>
                  </a>
                  <ul className={styles.navBar}>
                     <li className={`${styles.navBarItem} ${styles.navBarItemOne}`}>
                        <p>Shop</p>
                        <img src={arrowDown} alt="arrow-down-image" width="16px" height="16px" />                          
                     </li>
                     <li className={styles.navBarItem}>On Sale</li>
                     <li className={styles.navBarItem}>New Arrivals</li>
                     <li className={styles.navBarItem}>Brands</li>
                  </ul>
               </nav>
               <div className={styles.search}>
                  <img className={styles.searchIcon} src={searchIcon} alt="search-svg" width="24px" height='24px' />
                  <input
                  type='search'
                  className={styles.searchInput}
                  placeholder='Search for products...'
                  />
               </div>
               <div className={styles.accauntBlock}>
                  <div className={styles.cart}>
                     <img className={styles.cartIcon} src={cartIcon} alt='cart-svg' width='24px' height='24px'/>
                  </div>
                  <div className={styles.user}>
                     <img className={styles.userIcon} src={userIcon} alt='user-svg' width='24px' height='24px'/>
                  </div> 
               </div>
            </div>
         </div>
      </header>
         
      <Router>
         <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} />
          <Route path="/onSale" element={<OnSale />} />
          <Route path="/newArrivals" element={<NewArrivals />} />
          <Route path="/brands" element={<Brands />} /> */}
        </Routes>
      </Router>
     
      </>
  )
}

export default Header