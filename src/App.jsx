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


function App() {

  const [allQuizData, setallQuizData] = React.useState(newQuestions);
  const [qIndex, setqIndex] =  React.useState(0);
  const q = allQuizData[qIndex];

  const onSelectOption = (qid, op) => {
    const copyQuestions = [...allQuizData];
    const question = copyQuestions.find(q => q.id === qid);
    question.selectedOption = op;
    setallQuizData(copyQuestions);
    console.log(allQuizData);
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
                onClick={() => onSelectOption(q.id, op) }
                >
                {op}
                </li>
                ))}
              </ul>

           </div> 
           

           <button onClick={() => setqIndex(qIndex + 1)}>Next</button>
           
           

      </div>
      
    </>
  )

}

export default App



{/* <div className="container my-3">
//       <h4>Quiz Demo</h4>
//       {allQuestions.map((q) => (
//         <div className="card my-2" key={q.id}>
//           <div className="card-header"> {q.statement} </div>
//           <ul className="list-group list-group-flush">
//             {q.options.map((op) => (
//               <li
//                 key={op}
//                 className={getOptionStyle(q, op)}
//                 onClick={() => onSelectOption(q.id, op)}
//               >
//                 {op}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div> */}