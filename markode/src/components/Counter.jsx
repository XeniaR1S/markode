import React from 'react'

function Counter({countWord, numChar}){
    return (
      <div className="counters">
        <p id="counter">Votre texte contient {numChar} caractère(s)</p>
        <p id="counter-words">Votre texte contient {countWord} mot(s)</p>
      </div>
  );
}

  export default Counter
  