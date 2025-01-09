import React from 'react'
import styles from './ProductCard.module.scss'

const ProductCard = (props) => {
   const { image, title, rungNumber, currency, currentPrice, oldPrice, discount } = props

   const Raiting = () => {
      if (rungNumber === '5/') {
         return <div className={styles.productCard__rungBlock__rungStars__five}></div>
      }
      if (rungNumber === '4.5/') {
         return <div className={styles.productCard__rungBlock__rungStars__fourPointFive}></div>
      }
      if (rungNumber === '4/') {
         return <div className={styles.productCard__rungBlock__rungStars__four}></div>
      }
      if (rungNumber === '3.5/') {
         return <div className={styles.productCard__rungBlock__rungStars__threePointFive}></div>
      }
      if (rungNumber === '3/') {
         return <div className={styles.productCard__rungBlock__rungStars__three}></div>
      }
      return 'Enter correct number'
   }  

   return (
      <li className={styles.productCard}>
         <div className={styles.productCard__imageBlock}>
            <img className={styles.productCard__imageBlock__imageItem} src={image} alt='product-image' />
         </div>
         <div className={styles.productCard__titleBlock}>
            <p className={styles.productCard__titleBlock__titleText}>{title}</p>
         </div>
         <div className={styles.productCard__rungBlock}>
            <Raiting></Raiting>
            <div className={styles.productCard__rungBlock__rungNumber}>
               <p className={styles.productCard__rungBlock__rungNumber__fromUsers}>{rungNumber}</p>
               {/* <p className={styles.productCard__rungBlock__rungNumber__fraction}>/</p> */}
               <p className={styles.productCard__rungBlock__rungNumber__thereIsOnly}>5</p>
            </div>
         </div>
         <div className={styles.productCard__priceBlock}>
            <p className={styles.productCard__priceBlock__currentPrice}>{currency}{currentPrice}</p>
            <p className={styles.productCard__priceBlock__oldPrice}>{currency}{oldPrice}</p>
            <p className={styles.productCard__priceBlock__discount}>{discount}</p>
         </div>
      </li>
   )
}

export default ProductCard    