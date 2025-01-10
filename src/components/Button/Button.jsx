import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {

   const { children, theme, style, type } = props

   const ButtonStyled = () => {

      if (theme === 'dark') {
         return <button className={styles.buttonDark} style={style} type={type}>{children}</button>
      }
      if (theme === 'light') {
         return <button className={styles.buttonLight} style={style} type={type}>{children}</button>
      }
   }

   return (
      <ButtonStyled />
   )
}

export default Button




// const ButtonStyle = (props) => {
//    const theme = {
//       blue: {
//          default: "#3f51b5",
//          hover: "#283593",
//       },
//       pink: {
//          default: "#e91e63",
//          hover: "#ad1457",
//       },
//    };
// };

// const ButtonStyles = styles.buttonDark`
//   background-color: ${(props) => theme[props.theme].default};
//   color: white;
//   padding: 5px 15px;
//   border-radius: 5px;
//   outline: 0;
//   border: 0;
//   text-transform: uppercase;
//   margin: 10px 0px;
//   cursor: pointer;
//   box-shadow: 0px 2px 2px lightgray;
//   transition: ease background-color 250ms;
//   &:hover {
//     background-color: ${(props) => theme[props.theme].hover};
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }
// `;