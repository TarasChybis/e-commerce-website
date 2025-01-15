import React from 'react'
import styles from './BlogCard.module.scss'
import iconsSprite from '../../assets/icons-sprite.svg'

const BlogCard = (props) => {
   const { userRaitingNumber, userName, userBlogText } = props
   
   const UserRaitingStars = () => {
      if (userRaitingNumber === '5.0' || userRaitingNumber === '5' || userRaitingNumber === '5,0') {
         return <div className={styles.blogCard__userRaitingStars__five}></div>
      }
      if (userRaitingNumber === '4.5' || userRaitingNumber === '4,5') {
         return <div className={styles.blogCard__userRaitingStars__fourPointFive}></div>
      }
      if (userRaitingNumber === '4.0' || userRaitingNumber === '4' || userRaitingNumber === '4,0') {
         return <div className={styles.blogCard__userRaitingStars__four}></div>
      }
      if (userRaitingNumber === '3.5' || userRaitingNumber === '3,5') {
         return <div className={styles.blogCard__userRaitingStars__threePointFive}></div>
      }
      if (userRaitingNumber === '3.0' || userRaitingNumber === '3' || userRaitingNumber === '3,0') {
         return <div className={styles.blogCard__userRaitingStars__three}></div>
      }
      return 'Enter correct number'
   }

   return (
      <div className={styles.blogCard}>
         <UserRaitingStars />
         <div className={styles.blogCard__userTitle}>
            <p className={styles.blogCard__userTitle__userName}>{userName}</p>
            <svg className={styles.blogCard__userTitle__checkMarkIcon} width="24px" height="24px" >
               <use href={iconsSprite + '#icon-check-mark'} />
            </svg>
         </div>
         <div className={styles.blogCard__userBlogText}>"{userBlogText}"</div>
      </div>
   )
}

export default BlogCard