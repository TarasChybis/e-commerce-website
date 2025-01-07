import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../../layers/Home/Home"
// import Shop from "../Pages/Home"
// import OnSale from "../Pages/About.js"
// import NewArrivals from "../Pages/Contacts"
// import Brands from "../Pages/Blog"

import styles from "./Header.module.scss"
import arrowDown from "../../assets/Header-arrow-down.svg"
import searchIcon from "../../assets/Header-search-icon.svg"
import cartIcon from "../../assets/Header-cart-icon.svg"
import userIcon from "../../assets/Header-user-icon.svg"
import Container from '../Container/Container'

const Header = () => {

   return (
      <>
         <header className={styles.header}>
            <Container>
               <div className={styles.headerContainer}>
                  <nav className={styles.nav}>
                     <a href='/' className={styles.nav__logoLink}>
                        <p className={styles.nav__logoLink__logoText}>shop.co</p>
                     </a>
                     <ul className={styles.nav__navBar}>
                        <li className={styles.nav__navBar__navBarItem}>
                           <p>Shop</p>
                           <img src={arrowDown} alt="arrow-down-image" width="16px" height="16px" />
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>On Sale</li>
                        <li className={styles.nav__navBar__navBarItem}>New Arrivals</li>
                        <li className={styles.nav__navBar__navBarItem}>Brands</li>
                     </ul>
                  </nav>
                  <div className={styles.search}>
                     <img className={styles.search__searchIcon} src={searchIcon} alt="search-svg" width="24px" height='24px' />
                     <input
                        type='search'
                        className={styles.search__searchInput}
                        placeholder='Search for products...'
                     />
                  </div>
                  <div className={styles.accauntBlock}>
                     <div className={styles.accauntBlock__cart}>
                        <img className={styles.cartIcon} src={cartIcon} alt='cart-svg' width='24px' height='24px' />
                     </div>
                     <div className={styles.accauntBlock__user}>
                        <img className={styles.userIcon} src={userIcon} alt='user-svg' width='24px' height='24px' />
                     </div>
                  </div>
               </div>
            </Container>
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