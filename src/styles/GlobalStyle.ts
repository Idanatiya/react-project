import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
      margin: 0;
      overflow:auto;
      font-family: Poppins, sans-serif;
  }

   img {
       object-fit: cover;
       max-width: 100%;
   }

   ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }


  button {
    background: transparent;
    cursor: pointer;
    outline: 0;
    border: 0;
  }
  

  a {
    text-decoration: none;
  }
`;
