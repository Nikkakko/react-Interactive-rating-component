import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --primary-color :hsl(25, 97%, 53%);
  --white-color :hsl(0, 0%, 100%);
  --light-grey-color:hsl(217, 12%, 63%);
  --medium-grey:hsl(216, 12%, 54%);
  --dark-blue:hsl(213, 19%, 18%);
  --very-dark-blue:hsl(216, 12%, 8%);

}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
  body {
    font-size:15px;
    font-family: 'Overpass', sans-serif;
    background-color: var(--very-dark-blue);
    
  }
`;

export default GlobalStyle;
