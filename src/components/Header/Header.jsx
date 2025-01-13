import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../../layers/Home/Home"
import CasualStyle from '../../layers/CasualStyle/CasualStyle'
import FormalStyle from '../../layers/FormalStyle/FormalStyle'
import PartyStyle from '../../layers/PartyStyle/PartyStyle'
import GymStyle from '../../layers/GymStyle/GymStyle'
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
                           <button className={styles.nav__navBar__navBarItem__btn} type='button'>Shop</button>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <button className={styles.nav__navBar__navBarItem__btn} type='button'>
                              <img src={arrowDown} alt="arrow-down-image" width="16px" height="16px" />
                           </button>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <button className={styles.nav__navBar__navBarItem__btn} type='button'>On Sale</button>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <button className={styles.nav__navBar__navBarItem__btn} type='button'>New Arrivals</button>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <button className={styles.nav__navBar__navBarItem__btn} type='button'>Brands</button>
                        </li>
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
               <Route path="/CasualStyle" element={<CasualStyle />} />
               <Route path="/FormalStyle" element={<FormalStyle />} />
               <Route path="/PartyStyle" element={<PartyStyle />} />
               <Route path="/GymStyle" element={<GymStyle />} />
            </Routes>
         </Router>

      </>
   )
}

export default Header