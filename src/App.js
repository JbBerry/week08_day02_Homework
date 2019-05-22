import React from 'react';
import NewListContainer from './containers/NewListContainer';
import ExistingListContainer from './containers/ExistingListContainer';

function App() {
  return (
    <>
      <h1> The list to end all lists </h1>
      <NewListContainer/>
      <h2> Lists </h2>
      <ExistingListContainer/>
    </>
  );
}

export default App;
