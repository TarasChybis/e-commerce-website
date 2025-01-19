import React from 'react'
import styles from './Footer.module.scss'
import Container from '../Container/Container'
import iconsSprite from '../../assets/icons-sprite.svg'

const Footer = () => {
  return (
     <footer className={styles.footer}>
        <Container>
           <section className={styles.footer__subscribing}>
              <div className={styles.footer__subscribing__title}></div>
              <form className={styles.footer__subscribing__form}></form>
           </section>
           <section className={styles.footer__main}>
              <div className={styles.footer__main__social}>
                 <a href='/' className={styles.footer__social__logoLink}>
                    <p className={styles.footer__social__logoLink__logoText}>shop.co</p>
                 </a>
                 <p className={styles.footer__main__social__text}></p>
                 <div className={styles.footer__main__social__icons}>
                    <a href='/' className={styles.footer__main__social__icons__icon}>
                       <svg width="24px" height="24px" >
                          <use href={iconsSprite + '#icon-twitter'} />
                       </svg>
                    </a>
                    <a href='/' className={styles.footer__main__social__icons__icon}>
                       <svg width="24px" height="24px" >
                          <use href={iconsSprite + '#icon-facebook'} />
                       </svg>
                    </a>
                    <a href='/' className={styles.footer__main__social__icons__icon}>
                       <svg width="24px" height="24px" >
                          <use href={iconsSprite + '#icon-instagram'} />
                       </svg>
                    </a>
                    <a href='/' className={styles.footer__main__social__icons__icon}>
                       <svg width="24px" height="24px" >
                          <use href={iconsSprite + '#icon-git'} />
                       </svg>
                    </a>
                 </div>
              </div>
              <div className={styles.footer__main__block}>
                 <h5 className={styles.footer__main__block__title}>Company</h5>
                 <ul className={styles.footer__main__block__list}>
                    <li className={styles.footer__main__block__list__item}>About</li>  
                    <li className={styles.footer__main__block__list__item}>Features</li>
                    <li className={styles.footer__main__block__list__item}>Works</li>
                    <li className={styles.footer__main__block__list__item}>Career</li>
                 </ul>
              </div>
              <div className={styles.footer__main__block}>
                 <h5 className={styles.footer__main__block__title}>Help</h5>
                 <ul className={styles.footer__main__block__list}>
                    <li className={styles.footer__main__block__list__item}>Customer Support</li>  
                    <li className={styles.footer__main__block__list__item}>Delivery Details</li>
                    <li className={styles.footer__main__block__list__item}>Terms & Conditions</li>
                    <li className={styles.footer__main__block__list__item}>Privacy Policy</li>
                 </ul>
              </div>
              <div className={styles.footer__main__block}>
                 <h5 className={styles.footer__main__block__title}>FAQ</h5>
                 <ul className={styles.footer__main__block__list}>
                    <li className={styles.footer__main__block__list__item}>Account</li>  
                    <li className={styles.footer__main__block__list__item}>Manage Deliveries</li>
                    <li className={styles.footer__main__block__list__item}>Orders</li>
                    <li className={styles.footer__main__block__list__item}>Payments</li>
                 </ul>
              </div>
              <div className={styles.footer__main__block}>
                 <h5 className={styles.footer__main__block__title}>Resources</h5>
                 <ul className={styles.footer__main__block__list}>
                    <li className={styles.footer__main__block__list__item}>Free eBooks</li>  
                    <li className={styles.footer__main__block__list__item}>Development Tutorial</li>
                    <li className={styles.footer__main__block__list__item}>How to - Blog</li>
                    <li className={styles.footer__main__block__list__item}>Youtube Playlist</li>
                 </ul>
              </div>
           </section>
           <section className={styles.footer__finish}>
              <div className={styles.footer__finish__text}></div>
              <div className={styles.footer__finish__paymentWay}>
                 <a href='/' className={styles.footer__finish__paymentWay__iconPayment}>
                    <svg width="24px" height="24px" >
                       <use href={iconsSprite + '#icon-visa'} />
                    </svg>
                 </a>
                 <a href='/' className={styles.footer__finish__paymentWay__iconPayment}>
                    <svg width="24px" height="24px" >
                       <use href={iconsSprite + '#icon-master'} />
                    </svg>
                 </a>
                 <a href='/' className={styles.footer__finish__paymentWay__iconPayment}>
                    <svg width="24px" height="24px" >
                       <use href={iconsSprite + '#icon-payPal'} />
                    </svg>
                 </a>
                 <a href='/' className={styles.footer__finish__paymentWay__iconPayment}>
                    <svg width="24px" height="24px" >
                       <use href={iconsSprite + '#icon-applePay'} />
                    </svg>
                 </a>
                 <a href='/' className={styles.footer__finish__paymentWay__iconPayment}>
                    <svg width="24px" height="24px" >
                       <use href={iconsSprite + '#icon-googlePay'} />
                    </svg>
                 </a>
              </div>
           </section>
        </Container>
    </footer>
  )
}

export default Footer