import colors from '../../utils/style/colors';
import illustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  margin-top: 130px;
  margin-left: 60px;
  margin-right: 60px;
  height: 600px;
  background-color: ${colors.backgroundLight};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: #8186a0;
  text-decoration: none;
  font-size: 15px;
  ${(props) =>
    props.$isFullLink &&
    `color:white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const StyledContainer = styled.div`
  height: 400px;
  widht: 500px;
  display: flex;
  flex-direction: column;
  ${(props) => props.$isDescription && `margin-top: 120px;`}
`;

const StyledImage = styled.img`
  height: 400px;
  widht: 500px;
`;

function Home() {
  return (
    <StyledHome className="App">
      <StyledContainer $isDescription>
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
      <StyledContainer>
        <StyledImage src={illustration} alt="Illustration" />
      </StyledContainer>
    </StyledHome>
  );
}

export default Home;
