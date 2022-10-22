import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/Atoms';
import { SurveyContext } from '../../utils/context';
import { useFecth, useTheme } from '../../utils/hooks';

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
    color: ${({ theme }) => (theme === 'light' ? `black` : `white`)};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundDark}`};
  color: ${({ theme }) => (theme === 'light' ? `black` : `white`)};
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Survey() {
  const { questionNumber } = useParams();
  let questionNumberInt = parseInt(questionNumber);
  const { answers, saveAnswers } = useContext(SurveyContext);
  const { data, isLoading, error } = useFecth(`http://localhost:8000/survey`);

  const { theme } = useTheme();

  if (error) {
    return <span>Il y a un problème !</span>;
  }

  const { surveyData } = data;

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question n° {questionNumberInt}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[questionNumber]}{' '}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
          theme={theme}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
          theme={theme}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <nav>
        <LinkWrapper theme={theme}>
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
