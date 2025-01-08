import React from 'react'
import styles from './ProductCard.module.scss'

const ProductCurd = (props) => {
   const { image, title, rungNumber, currentPrice, oldPrice, discount } = props

   const Raiting = (rungNumber) => {
      if (rungNumber === '5') {
         return 'rungStarsFive'
      }
      if (rungNumber === '4.5') {
         return 'fourePointFive'
      }
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
            <div className={`${styles.productCard__rungBlock} ${styles[Raiting(rungNumber)]}`}></div>
            <div className={styles.productCard__rungBlock__rungNumber}>
               <p className={styles.productCard__rungBlock__rungNumber__fromUsers}>{rungNumber}</p>
               <p className={styles.productCard__rungBlock__rungNumber__fraction}>/</p>
               <p className={styles.productCard__rungBlock__rungNumber__thereIsOnly}>5</p>
            </div>
         </div>
         <div className={styles.productCard__priceBlock}>
            <p className={styles.productCard__priceBlock__currentPrice}>{currentPrice}</p>
            <p className={styles.productCard__priceBlock__oldPrice}>{oldPrice}</p>
            <p className={styles.productCard__priceBlock__discount}>{discount}</p>
         </div>
      </li>
   )
}

export default ProductCurd