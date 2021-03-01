import React from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { FullPost } from './components/FullPost/FullPost';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const samplePost = useSelector(state => {return state.reddit.posts[0]});
  const content = useSelector(state => {return state.reddit.postClicked}) ?
    (
      <main>
        <FullPost post={samplePost}/>
      </main>
    ) : (
      <main>
        <Search />
        <Results />
      </main>
    );

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="main-title">reduceddit</h1>
        <p className="subtitle">because you deserve less&trade;</p>
      </header>
      {content}
    </div>
  );
}

export default App;
