import error404 from '../../assets/404.svg';
import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';

const StyledHome = styled.div`
  margin-top: 130px;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 20px;
  height: 600px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundDark}`};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function Error() {
  const { theme } = useTheme();

  return (
    <StyledHome theme={theme}>
      <h1>Oups...</h1>
      <img src={error404} alt="Erreur 404" height={250} />
      <h2>Il sembelerait qu'il y ait un problème</h2>
    </StyledHome>
  );
}

export default Error;
