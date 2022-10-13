import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logo from '../../assets/dark-logo.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 60px;
  padding-top: 25px;
`;

const StyledLogo = styled.img`
  height: 50px;
  width: 130px;
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

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <StyledLogo src={logo} alt="Shiny logo" />
      </Link>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/Freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
