import React from 'react'
import styles from './Home.module.scss'
import Container from '../../components/Container/Container'
import ProductCard from '../../components/ProductCard/ProductCard'

import versaceLogo from '../../assets/brandsLine-versace-logo.svg'
import zaraLogo from '../../assets/brandsLine-zara-logo.svg'
import guccilogo from '../../assets/brandsLine-gucci-logo.svg'
import pradaLogo from '../../assets/brandsLine-prada-logo.svg'
import calvinKleinLogo from '../../assets/brandsLine-calvin-klein-logo.svg'

import tShirtWithTapeDetails from '../../assets/newArrivals-T-SHIRT-WITH-TAPE-DETAILS.png'
import skinnyFitJeans from '../../assets/newArrivals-SKINNY-FIT-JEANS.png'
import checkeredShirt from '../../assets/newArrivals-CHECKERED-SHIRT.png'
import sleeveStripedTshirt from '../../assets/newArrivals-SLEEVE-STRIPED-T-SHIRT.png'
import Button from '../../components/Button/Button'

const Home = () => {
   return (
      <>
         <section className={styles.hero}>
            <Container>
               <div className={styles.hero__container}>
                  <div className={styles.hero__container__titleBlock}>
                     <h1 className={styles.hero__container__titleBlock__titleText}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                  </div>
                  <div className={styles.hero__container__textBlock}>
                     <p className={styles.hero__container__textBlock__textText}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                  </div>
                  <div className={styles.hero__container__buttonBlock}>
                     <Button theme='dark' style={{ width: 210 }} type='button'>Shop Now</Button>
                  </div>
               </div>
               <div className={styles.hero__achievement}>
                  <div className={styles.hero__achievement__achievementItem}>
                     <p className={styles.hero__achievement__achievementItem__number}>200+</p>
                     <p className={styles.hero__achievement__achievementItem__text}>International Brands</p>
                  </div>
                  <div className={styles.hero__achievement__achievementItem}>
                     <p className={styles.hero__achievement__achievementItem__number}>2,000+</p>
                     <p className={styles.hero__achievement__achievementItem__text}>High-Quality Products</p>
                  </div>
                  <div className={styles.hero__achievement__achievementItem}>
                     <p className={styles.hero__achievement__achievementItem__number}>30,000+</p>
                     <p className={styles.hero__achievement__achievementItem__text}>Happy Customers</p>
                  </div>
               </div>
            </Container>
         </section>
         <section className={styles.brandsLine}>
            <Container>
               <div className={styles.brandsLine__carousel}>
                  <ul className={styles.brandsLine__carousel__list}>
                     <li className={styles.brandsLine__carousel__list__item}>
                        <img src={versaceLogo} alt='versace-logo-img' height='33px' />
                     </li>
                     <li className={styles.brandsLine__carousel__list__item}>
                        <img src={zaraLogo} alt='zara-logo-img' height='38px' />
                     </li>
                     <li className={styles.brandsLine__carousel__list__item}>
                        <img src={guccilogo} alt='gucci-logo-img' height='36px' />
                     </li>
                     <li className={styles.brandsLine__carousel__list__item}>
                        <img src={pradaLogo} alt='prada-logo-img' height='32px' />
                     </li>
                     <li className={styles.brandsLine__carousel__list__item}>
                        <img src={calvinKleinLogo} alt='calvin-klein-logo-img' height='33.35px' />
                     </li>
                  </ul>
               </div>
            </Container>
         </section>
         <section className={styles.newArrivals}>
            <Container>
               <div className={styles.newArrivals__titleBlock}>
                  <h2 className={styles.newArrivals__titleBlock__titleText}>NEW ARRIVALS</h2>
               </div>
               <div className={styles.newArrivals__container}>
                  <ul className={styles.newArrivals__productBlock}>
                     <ProductCard
                        image={tShirtWithTapeDetails}
                        title='T-shirt with Tape Details'
                        rungNumber='4.5'
                        currency='&#8372;'
                        currentPrice='120'
                        oldPrice=''
                     />
                     <ProductCard
                        image={skinnyFitJeans}
                        title='Skinny Fit Jeans'
                        rungNumber='3.5'
                        currency='&#8372;'
                        currentPrice='240'
                        oldPrice='260'
                     />
                     <ProductCard
                        image={checkeredShirt}
                        title='Checkered Shirt'
                        rungNumber='4.5'
                        currency='&#8372;'
                        currentPrice='180'
                        oldPrice=''
                     />
                     <ProductCard
                        image={sleeveStripedTshirt}
                        title='Sleeve Striped T-Shirt'
                        rungNumber='4.5'
                        currency='&#8372;'
                        currentPrice='130'
                        oldPrice='160'
                     />
                  </ul>
               </div>
               <div className={styles.newArrivals__buttonBlock}>
                  <Button theme='light' style={{width: 218}} type='button'>View All</Button>
               </div>
            </Container>
         </section>
         <section className={styles.topSelling}>
            <div className={styles.container}>
               <div className={styles.topSelling__titleBlock}>
                  <h2 className={styles.topSelling__titleBlock__titleText}>NewArrivals</h2>
               </div>
               <div className={styles.topSelling__container}>
                  <ul className={styles.topSelling__productBlock}>
                     <li className={styles.topSelling__productBlock__productCard}>
                        <div className={styles.topSelling__productBlock__productCard__imageBlock}>
                           <img className={styles.topSelling__productBlock__productCard__imageBlock__imageItem} src='/' alt='new-arrivals-img1' />
                        </div>
                        <div className={styles.topSelling__productBlock__productCard__titleBlock}>
                           <p className={styles.topSelling__productBlock__productCard__titleBlock__titleText}></p>
                        </div>
                        <div className={styles.topSelling__productBlock__productCard__rungBlock}>
                           <div className={styles.topSelling__productBlock__productCard__rungBlock__rungStars}></div>
                           <p className={styles.topSelling__productBlock__productCard__rungBlock__rungText}></p>
                        </div>
                        <div className={styles.topSelling__productBlock__productCard__priceBlock}>
                           <p className={styles.topSelling__productBlock__productCard__priceBlock__currentPrice}></p>
                           <p className={styles.topSelling__productBlock__productCard__priceBlock__oldPrice}></p>
                           <p className={styles.topSelling__productBlock__productCard__priceBlock__discount}></p>
                        </div>
                     </li>
                     <li className={styles.topSelling__productBlock__productCard}></li>
                     <li className={styles.topSelling__productBlock__productCard}></li>
                     <li className={styles.topSelling__productBlock__productCard}></li>
                  </ul>
               </div>
               <div className={styles.topSelling__buttonBlock}>
                  <button className={styles.buttonLight} type='button'>View All</button>
               </div>
               <section className={styles.dressStyle}>
                  <div className={styles.container}>
                     <div className={styles.dressStyle__container}>
                        <div className={styles.dressStyle__titleBlock}>
                           <h2 className={styles.dressStyle__titleBlock__titleText}>browse by dress style</h2>
                        </div>
                        <div className={styles.dressStyle__styleBlock}>
                           <div className={styles.dressStyle__styleBlock__styleCard}>
                              <p className={styles.dressStyle__styleBlock__styleCard__text}>Casual</p>
                           </div>
                           <div className={styles.dressStyle__styleBlock__styleCard}>
                              <p className={styles.dressStyle__styleBlock__styleCard__text}>Formal</p>
                           </div>
                           <div className={styles.dressStyle__styleBlock__styleCard}>
                              <p className={styles.dressStyle__styleBlock__styleCard__text}>Party</p>
                           </div>
                           <div className={styles.dressStyle__styleBlock__styleCard}>
                              <p className={styles.dressStyle__styleBlock__styleCard__text}>Gym</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section className={styles.blog}>
                  <div className={styles.container}>
                     <div className={styles.blog__container}>
                        <div className={styles.blog__titleBlock}>
                           <p className={styles.blog__titleBlock__titleText}></p>
                        </div>
                        <div className={styles.blog__carouselBlog}>
                           <div className={styles.blog__carouselBlog__container}>
                              <div className={styles.blog__carouselBlog__card}>
                                 <div className={styles.blog__carouselBlog__card__rungStars}></div>
                                 <div className={styles.blog__carouselBlog__card__userBlock}>
                                    <div className={styles.blog__carouselBlog__card__userBlock__userTitle}>
                                       <p className={styles.blog__carouselBlog__card__userBlock__userTitle__userName}></p>
                                       <img className={styles.blog__carouselBlog__card__userBlock__userTitle__checkMarkIcon} src='/' alt='check-mark-icon'></img>
                                    </div>
                                    <div className={styles.blog__carouselBlog__card__userBlock__userText}></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </section>
      </>
   )
}

export default Home