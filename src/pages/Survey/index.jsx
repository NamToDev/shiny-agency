import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/Atoms';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.p`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

function Survey() {
  const { questionNumber } = useParams();
  let questionNumberInt = parseInt(questionNumber);
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);

  //useEffect(() => {
  //  setIsDataLoading(true);
  //  fetch(`http://localhost:8000/survey`).then((response) =>
  //   response
  //     .json()
  //      .then(({ surveyData }) => {
  //       setSurveyData(surveyData);
  //       setIsDataLoading(false);
  //     })
  //      .catch((error) => console.log(error))
  // );
  // }, []);

  // From ES7
  useEffect(() => {
    async function fetchSurvey() {
      setIsDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
      } catch (err) {
        setError(err);
        console.log(error);
      } finally {
        setIsDataLoading(false);
      }
    }

    fetchSurvey();
  }, []);

  return (
    <SurveyContainer>
      <QuestionTitle>Question n° {questionNumberInt}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]} </QuestionContent>
      )}
      <nav>
        <LinkWrapper>
          {questionNumberInt > 1 && (
            <Link to={`/survey/${questionNumber - 1}`}>Precedent</Link>
          )}
          {questionNumberInt < 10 ? (
            <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
          ) : (
            <Link to={`/results`}>Resultats</Link>
          )}
        </LinkWrapper>
      </nav>
    </SurveyContainer>
  );
}

export default Survey;
