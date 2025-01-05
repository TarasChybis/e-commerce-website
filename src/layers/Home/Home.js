import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
   return (
      <>
         <section className={styles.hero}>
            <div className={styles.container}>
               <div className={styles.hero__container}>
                  <div className={styles.hero__titleBlock}>
                     <h1 className={styles.hero__titleBlock__titleText}>Home</h1>
                  </div>
                  <div className={styles.hero__textBlock}>
                     <p className={styles.hero__textBlock__textText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, perferendis voluptatem maiores veniam molestias error.</p>
                  </div>
                  <div className={styles.hero__buttonBlock}>
                     <button className={styles.buttonDark}></button>
                  </div>
                  <div className={styles.hero__achievement}>
                     <div className={styles.hero__achievement__achievementItem}>
                        <p className={styles.hero__achievement__achievementItem__number}>200+</p>
                        <p className={styles.hero__achievement__achievementItem__text}>Brands</p>
                     </div>
                     <div className={styles.hero__achievement__achievementItem}>
                        <p className={styles.hero__achievement__achievementItem__number}>2,000+</p>
                        <p className={styles.hero__achievement__achievementItem__text}>Products</p>
                     </div>
                     <div className={styles.hero__achievement__achievementItem}>
                        <p className={styles.hero__achievement__achievementItem__number}>30,000+</p>
                        <p className={styles.hero__achievement__achievementItem__text}>Customers</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className={styles.brandsLine}>
            <div className={styles.container}>
               <ul className={styles.brandsLine__list}>
                  <li className={styles.brandsLine__item}></li>
                  <li className={styles.brandsLine__item}></li>
                  <li className={styles.brandsLine__item}></li>
                  <li className={styles.brandsLine__item}></li>
                  <li className={styles.brandsLine__item}></li>
               </ul>
            </div>
         </section>
         <section className={styles.newArrivals}>
            <div className={styles.container}>
               <div className={styles.newArrivals__titleBlock}>
                  <h2 className={styles.newArrivals__titleBlock__titleText}>NewArrivals</h2>
               </div>
               <div className={styles.newArrivals__container}>
                  <ul className={styles.newArrivals__productBlock}>
                     <li className={styles.newArrivals__productBlock__productCard}>
                        <div className={styles.newArrivals__productBlock__productCard__imageBlock}>
                           <img className={styles.newArrivals__productBlock__productCard__imageBlock__imageItem} src='/' alt='new-arrivals-img1' />
                        </div>
                        <div className={styles.newArrivals__productBlock__productCard__titleBlock}>
                           <p className={styles.newArrivals__productBlock__productCard__titleText}></p>
                        </div>
                        <div className={styles.newArrivals__productBlock__productCard__rungBlock}>
                           <div className={styles.newArrivals__productBlock__productCard__rungStars}></div>
                           <p className={styles.newArrivals__productBlock__productCard__rungText}></p>
                        </div>
                        <div className={styles.newArrivals__productBlock__productCard__priceBlock}>
                           <p className={styles.newArrivals__productBlock__productCard__currentPrice}></p>
                           <p className={styles.newArrivals__productBlock__productCard__oldPrice}></p>
                           <p className={styles.newArrivals__productBlock__productCard__discount}></p>
                        </div>
                     </li>
                     <li className={styles.newArrivals__productBlock__productCard}></li>
                     <li className={styles.newArrivals__productBlock__productCard}></li>
                     <li className={styles.newArrivals__productBlock__productCard}></li>
                  </ul>
               </div>
               <div className={styles.newArrivals__buttonBlock}>
                  <button className={styles.buttonLight} type='button'>View All</button>
               </div>
            </div>
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
                           <p className={styles.topSelling__productBlock__productCard__titleText}></p>
                        </div>
                        <div className={styles.topSelling__productBlock__productCard__rungBlock}>
                           <div className={styles.topSelling__productBlock__productCard__rungStars}></div>
                           <p className={styles.topSelling__productBlock__productCard__rungText}></p>
                        </div>
                        <div className={styles.topSelling__productBlock__productCard__priceBlock}>
                           <p className={styles.topSelling__productBlock__productCard__currentPrice}></p>
                           <p className={styles.topSelling__productBlock__productCard__oldPrice}></p>
                           <p className={styles.topSelling__productBlock__productCard__discount}></p>
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
                        <div className={styles.blog__
                        }>

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