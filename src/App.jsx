import React, { useState } from 'react'
import './App.css'
import quizData from  "./data/data.json";



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



let indexArray = [];
let newQuestions = [];

let maxNumber = quizData.length;

for (let i = 0; newQuestions.length < 5; i++)

{

  let randomInteger = getRandomInt(0, ( quizData.length - 1 ));

  if (indexArray.includes(randomInteger)) 
  {
    
  }
  else 
  {
    indexArray.push(randomInteger);
    newQuestions.push(quizData[randomInteger]);
  }

}

console.log(newQuestions);


const getOptionStyle = (que, opn) => 
{
  let inLineStyles = { backgroundColor: 'white'};

  if(opn === que.selectedOption && opn === que.capital)
  {
    inLineStyles = {backgroundColor: 'green'};
    return inLineStyles;
  }
  else if (opn === que.selectedOption && opn != que.capital)
  {
    inLineStyles = {backgroundColor: 'red'};
    return inLineStyles;
  }
  else
  {
    inLineStyles = { backgroundColor: 'white'};
  }
}

let counter = 0;
const checkVisibility = (setShow) => {
  counter++;

  {setShow(false)}

  if( counter > 3 )
    {
      setShow(false);
    }

  console.log(counter);
}



function App() {

  const [allQuizData, setallQuizData] = React.useState(newQuestions);
  const [qIndex, setqIndex] =  React.useState(0);
  const [show, setShow] = React.useState(false);
  const q = allQuizData[qIndex];

  const onSelectOption = (qid, op) => {
    const copyQuestions = [...allQuizData];
    const question = copyQuestions.find(q => q.id === qid);
    question.selectedOption = op;
    setallQuizData(copyQuestions);
    console.log(allQuizData);
    
    if( counter > 3 )
    {
      setShow(false);
    }
    else
    {
      setShow(true);
    }

  }


  return (
    <>
      <div>
        <h4>Quiz Data</h4>
        
           <div key={q.id}>
            <p>What is the capital of {q.country}</p>
            <img src={q.flag} alt="flag" width="250" height="250"></img>
              
              <ul>
                {q.options.map((op) => ( 
                <li 
                key={op}
                style={getOptionStyle(q, op)}
                onClick={() => onSelectOption(q.id, op)}
                >
                {op}
                </li>
                ))}
              </ul>

           </div> 
           

            {
      
            show && <p onClick={() => checkVisibility(setShow)}>

            <button onClick={() => setqIndex(qIndex + 1)}> Next </button> 
           
            </p>
           
            }

      </div>
      
    </>
  )

}

export default App