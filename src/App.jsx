import React, { useState } from 'react'
import './App.css'
import quizData from  "./data/data.json";

function App() {
  
  return (
    <>
      <div>
        <h4>Quiz Data</h4>
        
        {quizData.map(q=>(

           <div key={q.id}>
            <p>What is the capital of {q.country}</p>
            <img src={q.flag} alt="flag" width="250" height="250"></img>
              
              <ul>
                {q.options.map((op) => ( <li key={op}>{op}</li>
                ))}
              </ul>



           </div> 

        ))}




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