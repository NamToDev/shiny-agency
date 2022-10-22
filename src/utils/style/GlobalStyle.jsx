import { createGlobalStyle } from 'styled-components';
import colors from '../../utils/style/colors';
import { useTheme } from '../../utils/hooks';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        color: ${({ isDarkMode }) => (isDarkMode ? `white` : `black`)};
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? `${colors.dark}` : `white`};
        margin: 0;  
    }
`;

function GlobalStyle() {
  const { theme } = useTheme();

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
