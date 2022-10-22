import colors from '../../utils/style/colors';
import illustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../../utils/hooks';

const StyledHome = styled.div`
  margin-top: 130px;
  margin-left: 60px;
  margin-right: 60px;
  height: 600px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundDark}`};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
  border-radius: 30px; 
  background-color: ${colors.primary};`}
`;

const StyledContainer = styled.div`
  height: 400px;
  widht: 500px;
  display: flex;
  flex-direction: column;
  ${(props) => props.$isDescription && `margin-top: 120px;`}
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundDark}`};
`;

const StyledImage = styled.img`
  height: 400px;
  widht: 500px;
`;

function Home() {
  const { theme } = useTheme();

  return (
    <StyledHome className="App" theme={theme}>
      <StyledContainer $isDescription theme={theme}>
        <h1>
          Réperez vos besoins,
          <br />
          on s'occupe du reste,
          <br /> avec les meilleurs <br />
          talents
          <br />
          <br />
        </h1>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </StyledContainer>
      <StyledContainer theme={theme}>
        <StyledImage src={illustration} alt="Illustration" />
      </StyledContainer>
    </StyledHome>
  );
}

export default Home;
