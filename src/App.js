import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <>
      <Header score={score} />
      <Main score={score} handleScore={setScore} />
    </>
  );
}

export default App;

