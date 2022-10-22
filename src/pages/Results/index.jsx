import React, { useContext } from 'react';
import { SurveyContext } from '../../utils/context';
import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { useFecth, useTheme } from '../../utils/hooks';
import { Loader } from '../../utils/Atoms';

const StyledResults = styled.div`
  margin-top: 130px;
  margin-left: 60px;
  margin-right: 60px;
  height: 600px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundDark}`};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? `black` : `white`)};
  font-size: 30px;
  font-weight: normal;
  padding-left: 15px;
  width: 50%;
  text-align: center;
  & span {
    color: ${({ theme }) => (theme === 'light' ? `#5843e4` : `white`)};
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 30px;
  background-color: ${colors.primary};
  color: white;
  border: none;
`;

const StyledSection = styled.section`
  width: 60%;
  & div h3 {
    color: ${({ theme }) =>
      theme === 'light' ? `${colors.primary}` : `white`};
  }
  & div p {
    color: ${({ theme }) =>
      theme === 'light' ? `${colors.secondary}` : `white`};
  }
`;

function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstAnswer = index === 0;
    const separator = isFirstAnswer ? '' : '&';
    console.log(answerNumber);
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
  }, '');
}

function Results() {
  const answers = useContext(SurveyContext);
  const { theme } = useTheme();

  const queryParams = formatQueryParams(answers.answers);

  const { data, error, isLoading } = useFecth(
    `http://localhost:8000/results?${queryParams}`
  );

  if (error) {
    return <span>Il y a un probleme !</span>;
  }

  const answersData = data.resultsData;

  return (
    <StyledResults theme={theme}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledTitle theme={theme}>
            Les compétences dont vous <br /> avez besoin :{' '}
            {answersData &&
              answersData.map((answer, index) => (
                <span key={`${answer.title}-${index}`} theme={theme}>
                  {answer.title}
                  {index < answersData.length - 1 && ','}
                  {index === 0 && <br />}
                </span>
              ))}
          </StyledTitle>
          <StyledButton onClick={() => alert('OK')}>
            Découvrez nos profils
          </StyledButton>
          <StyledSection theme={theme}>
            {answersData &&
              answersData.map((answer, index) => (
                <div key={`${answer.title}-${index}`}>
                  <h3 theme={theme}>{answer.title}</h3>
                  <p theme={theme}>{answer.description}</p>
                </div>
              ))}
          </StyledSection>
        </>
      )}
    </StyledResults>
  );
}

export default Results;
