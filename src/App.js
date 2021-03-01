import React from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { FullPost } from './components/FullPost/FullPost';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const content = useSelector(state => {return state.reddit.postClicked}) ?
    (
      <main>
        <FullPost />
      </main>
    ) : (
      <main>
        <Search />
        <Results />
      </main>
    );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reduceddit</h1>
      </header>
      {content}
    </div>
  );
}

export default App;
