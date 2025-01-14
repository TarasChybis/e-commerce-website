import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../../layers/Home/Home'
import CasualStyle from '../../layers/CasualStyle/CasualStyle'
import FormalStyle from '../../layers/FormalStyle/FormalStyle'
import PartyStyle from '../../layers/PartyStyle/PartyStyle'
import GymStyle from '../../layers/GymStyle/GymStyle'
import Shop from '../../layers/Shop/Shop'
import OnSale from '../../layers/OnSale/OnSale'
import NewArrivals from '../../layers/NewArrivals/NewArrivals'
import Brands from '../../layers/Brands/Brands'

import styles from './Header.module.scss'
import iconsSprite from '../../assets/icons-sprite.svg'

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
                           <a href='/Shop' className={styles.nav__navBar__navBarItem__link}>Shop</a>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <button className={styles.nav__navBar__navBarItem__btn} type='button' id='headerShopBtn'>
                              <svg width='16px' height='16px'>
                                 <use href={iconsSprite + '#icon-header-arrow-down'} />
                              </svg>
                           </button>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <a href='/OnSale' className={styles.nav__navBar__navBarItem__link}>On Sale</a>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <a href='/NewArrivals' className={styles.nav__navBar__navBarItem__link}>New Arrivals</a>
                        </li>
                        <li className={styles.nav__navBar__navBarItem}>
                           <a href='/Brands' className={styles.nav__navBar__navBarItem__link}>Brands</a>
                        </li>
                     </ul>
                  </nav>
                  <form className={styles.search}>
                     <button className={styles.search__searchBtn} type='submit'>
                        <svg width='24px' height='24px'>
                           <use href={iconsSprite + '#icon-header-search'} />
                        </svg>
                     </button>
                     <label for='site-search'></label>
                     <input
                        type='search'
                        className={styles.search__searchInput}
                        id='site-search'
                        name='searchInput'
                        placeholder='Search for products...'
                     />
                  </form>
                  <div className={styles.accauntBlock}>
                     <button className={styles.accauntBlock__cartBtn} type='button'>
                        <svg width='24px' height='24px'>
                           <use href={iconsSprite + '#icon-header-cart'} />
                        </svg>
                     </button>
                     <button className={styles.accauntBlock__userBtn} type='button'>
                        <svg width='24px' height='24px'>
                           <use href={iconsSprite + '#icon-header-user'} />
                        </svg>
                     </button>
                  </div>
               </div>
            </Container>
         </header>

         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Shop" element={<Shop />} />
               <Route path="/OnSale" element={<OnSale />} />
               <Route path="/NewArrivals" element={<NewArrivals />} />
               <Route path="/Brands" element={<Brands />} />
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