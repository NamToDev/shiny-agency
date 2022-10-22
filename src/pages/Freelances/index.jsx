import Card from '../../components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/Atoms';
import { useFecth, useTheme } from '../../utils/hooks';

const FreelanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => (theme === 'light' ? `black` : `white`)};
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

function Freelances() {
  const { theme } = useTheme();
  const { data, isLoading, error } = useFecth(
    `http://localhost:8000/freelances`
  );

  const freelancersProfile = data.freelancersList;

  if (error) {
    return <span>Il y a un probleme !</span>;
  }

  return (
    <FreelanceContainer theme={theme}>
      <h1>Trouvez votre prestataire</h1>
      <p style={{ color: '#8186A0' }}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersProfile.map((profile) => (
            <Card
              key={`${profile.name}-${profile.id}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </FreelanceContainer>
  );
}

export default Freelances;
