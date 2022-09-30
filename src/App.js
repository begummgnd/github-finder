import React  from 'react';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import AppRouter from './router/AppRouter';
const App = () => {
  return (
    <GithubState>
      <AlertState>
       <AppRouter />
      </AlertState>
    </GithubState>
  );
}

export default App;
