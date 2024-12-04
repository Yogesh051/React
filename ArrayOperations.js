import React from 'react';

const ArrayOperations = ({ numbers }) => {
  
  const doubledArray = numbers.map((num) => num * 2);

 
  const evenNumbers = doubledArray.filter((num) => num % 2 === 0);

  
  const sumOfEvenNumbers = evenNumbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h2>Array Operations</h2>
      <p><strong>Original Array:</strong> {JSON.stringify(numbers)}</p>
      <p><strong>Doubled Array:</strong> {JSON.stringify(doubledArray)}</p>
      <p><strong>Even Numbers:</strong> {JSON.stringify(evenNumbers)}</p>
      <p><strong>Sum of Even Numbers:</strong> {sumOfEvenNumbers}</p>
    </div>
  );
};


const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <ArrayOperations numbers={numbers} />
    </div>
  );
};

export default App;
