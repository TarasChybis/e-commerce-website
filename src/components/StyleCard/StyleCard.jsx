import React from 'react'
import styles from './StyleCard.module.scss'

const StyleCard = (props) => {

   const { width, height, text, backgroundImage, backgroundSize, backgroundPosition } = props

   let userStyle = {
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: { backgroundSize },
      backgroundPosition: `${ backgroundPosition }`,      
   };
   
   return (
      <div className={styles.styleCard} style={userStyle}>
         <p className={styles.styleCard__text}>{text}</p>
      </div>
   )
}

export default StyleCard