import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import ScoreBoard from '../components/ScoreBoard';

function ResultPage() {
  const { totalScore } = useContext(QuizContext);

  return <ScoreBoard score={totalScore} />;
  
}

export default ResultPage;
