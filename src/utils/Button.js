// import React from 'react'
// import styles from '../layers/Home/Home.module.scss'

// const buttonDark = {
//    display: 'block',
//    width: '100%',
//    maxWidth: '210px',
//    padding: '18px 0',
//    border: '2px solid',
//    borderColor: '#000000',
//    borderRadius: '26px',
//    backgroundColor: '#000000',
//    fontFamily: 'Satoshi',
//    fontWeight: '500',
//    fontSize: '16px',
//    lineHeight: '1',
//    textAlign: 'center',
//    color: '#FFFFFF',
//    cursor: 'pointer',
// };

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

// const Button = (props) => {  
   
//    const { children, theme } = props;
   
   // const setButtonStyle = (theme) => {
   //    if (theme === 'dark') {
   //       return 'buttonDark';
   //    }
   //    if (theme === 'light') {
   //       return 'buttonLight';		
   //    }
   //    if (theme === 'pink') {
   //       return 'buttonPink';
   //    }
   // };

//    return (
//       <button>
//          {children}
//       </button>
//    )
// }

// export default Button