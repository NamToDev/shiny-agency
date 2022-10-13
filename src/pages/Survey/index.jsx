import { Link, useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  let questionNumberInt = parseInt(questionNumber);
  console.log(questionNumberInt);

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question n° {questionNumberInt}</h2>
      <nav>
        {questionNumberInt > 1 && (
          <Link to={`/survey/${questionNumber - 1}`}>Precedent</Link>
        )}
        {questionNumberInt < 10 ? (
          <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
        ) : (
          <Link to={`/results`}>Resultats</Link>
        )}
      </nav>
    </div>
  );
}

export default Survey;
