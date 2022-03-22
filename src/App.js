import { useState } from 'react';
import './App.css';
import data from './data.js'
import { Stack, Button, LinearProgress, Alert} from '@mui/material/';



function App() {

  const questions = data.questions
  console.log(questions)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  const progress = currentQuestion/questions.length*100
  console.log(progress)

  const handleAnswerclick = (isCorrect) => {
    if (isCorrect) {
			setScore(score + 1);
		}
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
     setShowScore(true);
    }
    
  };
  return (
  <div className='app'>
    
    {showScore ? (
				<Alert severity="info"><div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
        </Alert>
       

) : (
  <>
  <div className='question-count'>
	<h1><span>Question {currentQuestion+ 1}</span>/{questions.length}</h1>
  </div>
      <div className='question-text'>{questions[currentQuestion].question}</div>
      <div className='answer-section' >
	    {questions[currentQuestion].answers.map((answer) => (
		<Stack spacing={50} key={answer.id}> 
  
  <Button variant="contained" style={{margin: '10px'}} onClick={()=>handleAnswerclick(answer.isCorrect)}>{answer.answerText}</Button>
    </Stack>
    
    
	))}
  <LinearProgress variant="determinate" value={progress}></LinearProgress>
</div>

</>


)}

</div>

  )
 
}


export default App;
