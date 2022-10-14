import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/Atoms';
import { useState, useEffect } from 'react';

const FreelanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  const [freelancersProfile, setFreelancersProfile] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFreelancersProfil() {
      setIsDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await response.json();
        setFreelancersProfile(freelancersList);
      } catch (err) {
        setError(err);
        console.log(error);
      } finally {
        setIsDataLoading(false);
      }
    }

    fetchFreelancersProfil();
  }, []);

  return (
    <FreelanceContainer>
      <h1>Trouvez votre prestataire</h1>
      <p style={{ color: '#8186A0' }}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </p>
      {isDataLoading ? (
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
