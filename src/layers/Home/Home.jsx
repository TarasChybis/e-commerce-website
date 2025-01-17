import React from 'react'
import styles from './Home.module.scss'
import Container from '../../components/Container/Container'
import ProductCard from '../../components/ProductCard/ProductCard'
import StyleCard from '../../components/StyleCard/StyleCard'
import BlogCard from '../../components/BlogCard/BlogCard'

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

import verticalStripedShirt from '../../assets/topSelling-VERTICAL-STRIPED-SHIRT.png'
import courageGraphicTshirt from '../../assets/topSelling-COURAGE-GRAPHIC-T-SHIRT.png'
import looseFitBermudaShorts from '../../assets/topSelling-LOOSE-FIT-BERMUDA-SHORTS.png'
import fadedSkinnyJeans from '../../assets/topSelling-FADED-SKINNY-JEANS.png'

import dressStyleCasualImage from '../../assets/dressStyle-Casual-img.png'
import dressStyleFormalImage from '../../assets/dressStyle-Formal-img.png'
import dressStylePartyImage from '../../assets/dressStyle-Party-img.png'
import dressStyleGymImage from '../../assets/dressStyle-Gym-img.png'

import iconsSprite from '../../assets/icons-sprite.svg'

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
                  <Button theme='light' style={{ width: 218 }} type='button'>View All</Button>
               </div>
            </Container>
         </section>
         <section className={styles.topSelling}>
            <Container>
               <div className={styles.topSelling__titleBlock}>
                  <h2 className={styles.topSelling__titleBlock__titleText}>Top Selling</h2>
               </div>
               <div className={styles.topSelling__container}>
                  <ul className={styles.topSelling__productBlock}>
                     <ProductCard
                        image={verticalStripedShirt}
                        title='Vertical Striped Shirt'
                        rungNumber='5.0'
                        currency='&#8372;'
                        currentPrice='212'
                        oldPrice='232'
                     />
                     <ProductCard
                        image={courageGraphicTshirt}
                        title='Courage Graphic T-shirt'
                        rungNumber='4.0'
                        currency='&#8372;'
                        currentPrice='145'
                        oldPrice=''
                     />
                     <ProductCard
                        image={looseFitBermudaShorts}
                        title='Loose Fit Bermuda Shorts'
                        rungNumber='3.0'
                        currency='&#8372;'
                        currentPrice='80'
                        oldPrice=''
                     />
                     <ProductCard
                        image={fadedSkinnyJeans}
                        title='Faded Skinny Jeans'
                        rungNumber='4.5'
                        currency='&#8372;'
                        currentPrice='210'
                        oldPrice=''
                     />
                  </ul>
               </div>
               <div className={styles.topSelling__buttonBlock}>
                  <Button theme='light' style={{ width: 218 }} type='button'>View All</Button>
               </div>
            </Container>
         </section>
         <section className={styles.dressStyle}>
            <Container>
               <div className={styles.dressStyle__container}>
                  <div className={styles.dressStyle__titleBlock}>
                     <h2 className={styles.dressStyle__titleBlock__titleText}>browse by dress style</h2>
                  </div>
                  <div className={styles.dressStyle__styleBlock}>
                     <a href='/CasualStyle' className={styles.dressStyle__styleBlock__link}>
                        <StyleCard
                           width='407'
                           height='289'
                           text='Casual'
                           backgroundImage={dressStyleCasualImage}
                           backgroundSize='auto'
                           backgroundPosition='top -122px right -219px'
                        />
                     </a>
                     <a href='/FormalStyle' className={styles.dressStyle__styleBlock__link}>
                        <StyleCard
                           width='684'
                           height='289'
                           text='Formal'
                           backgroundImage={dressStyleFormalImage}
                           backgroundSize='auto'
                           backgroundPosition='top -146px left 0'
                        />
                     </a>
                     <a href='/PartyStyle' className={styles.dressStyle__styleBlock__link}>
                        <StyleCard
                           width='684'
                           height='289'
                           text='Party'
                           backgroundImage={dressStylePartyImage}
                           backgroundSize='auto'
                           backgroundPosition='top -163px left 42px'
                        />
                     </a>
                     <a href='/GymStyle' className={styles.dressStyle__styleBlock__link}>
                        <StyleCard
                           width='407'
                           height='289'
                           text='Gym'
                           backgroundImage={dressStyleGymImage}
                           backgroundSize='auto'
                           backgroundPosition='top -148px left 53px'
                        />
                     </a>
                  </div>
               </div>
            </Container>
         </section>
         <section className={styles.blog}>
            <Container>
               <div className={styles.blog__container}>
                  <div className={styles.blog__titleBlock}>
                     <p className={styles.blog__titleBlock__titleText}>OUR HAPPY CUSTOMERS</p>
                     <div className={styles.blog__titleBlock__arrowsBlock}>
                        <button className={styles.blog__titleBlock__arrowsBlock__arrowDownButton} type='button'>
                           <svg width="24px" height="24px" >
                              <use href={iconsSprite + '#icon-blog-arrow'} />
                           </svg> 
                        </button>
                        <button className={styles.blog__titleBlock__arrowsBlock__arrowUpButton} type='button'>
                           <svg width="24px" height="24px" >
                              <use href={iconsSprite + '#icon-blog-arrow'} />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className={styles.blog__carouselBlog}>
                     <BlogCard
                        userRaitingNumber='5'
                        userName='Sarah M.'
                        userBlogText="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                     />
                     <BlogCard
                        userRaitingNumber='5'
                        userName='Alex K.'
                        userBlogText="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
                     />
                     <BlogCard
                        userRaitingNumber='5'
                        userName='James L.'
                        userBlogText="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
                     />
                     <BlogCard
                        userRaitingNumber='5'
                        userName='James L.'
                        userBlogText="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
                     />
                     <BlogCard
                        userRaitingNumber='5'
                        userName='James L.'
                        userBlogText="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
                     />
                  </div>
               </div>
            </Container>
         </section>
      </>
   )
}

export default Home